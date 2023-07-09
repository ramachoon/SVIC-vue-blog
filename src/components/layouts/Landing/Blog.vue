<template>
  <div class="container">
    <div class="nav">
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" @update:value="selectedCategory" />
      <n-space>
        <!-- <n-input
          v-model:value="pageInfo.keyword"
          :style="{ width: '200px' }"
          placeholder="Please enter key words"
          @input="loadBlogs(0)"
          @keyup.enter="loadBlogs(0)"
        /> -->
        <n-input
          :style="{ width: '200px' }"
          placeholder="Please enter key words"
        />
        <!-- <n-button type="primary" ghost @click="loadBlogs(0)"> Search </n-button> -->
        <!-- <n-button type="primary" ghost> Search </n-button> -->
      </n-space>
      {{ pageInfo.keyword }}
    </div>

    <div class="article" v-for="blog in blogListInfo">
      <n-card :title="blog.title" @click="toDetail(blog)" hoverable>
        <div v-html="blog.content"></div>
        <template #footer>
          <n-space align="center">
            <div>Created At：{{ blog.create_time }}</div>
          </n-space>
        </template>
      </n-card>
    </div>

    <n-pagination @update:page="loadBlogs" v-model:page="pageInfo.page" :page-count="pageInfo.pageCount" />

    <n-divider />
    <div class="container">
      <div class="home-footer">
        <div>Welcome to Symphony Ventures Immigration Consultancy Inc.</div>
        <!-- <div>+1 (819) 598 3780</div> -->
      </div>
    </div>
  </div>
</template>

<script setup>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  focusNum: Number
})

const emits = defineEmits(['setFocusNum'])

const setFocusNum = focusNum => {
  emits('setFocusNum')
}

const focusNum = ref(1);
const showTempBox = ref(0);

const axios = inject("axios")
const router = useRouter()

const activeKey = ref()
const menuOptions = ref([])
const blogListInfo = ref([])

const pageInfo = reactive({
  page: 1,
  pageSize: 3,
  pageCount: 0,
  count: 0,
  keyword: "",
  categoryId: 0,
})

onMounted(() => {
  loadCategoryOption()
  loadBlogs()
})

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const loadCategoryOption = async () => {
  const res = await axios.get("/category/list")
  let categoryChildren = []

  for (const item of res.data.rows) {
    categoryChildren.push({
      label: item.name,
      key: item.id,
    })
  }

  menuOptions.value = [
    // {
    //   label: () => h(
    //     RouterLink,
    //     { to: { path: "/" } },
    //     { default: () => "Front Page" },
    //   ),
    //   key: "0",
    //   icon: renderIcon(HomeIcon),
    // },
    {
      label: "Categories",
      key: "1",
      icon: renderIcon(CategoryIcon),
      children: categoryChildren,
    },
    // {
    //   label: () => h(
    //     RouterLink,
    //     { to: { path: "/blogadmin" } },
    //     { default: () => "Admin" },
    //   ),
    //   key: "2",
    //   icon: renderIcon(LoginIcon),
    // },
  ]
}

const selectedCategory = (key) => {
  pageInfo.categoryId = key;
  loadBlogs()
}

const loadBlogs = async (page = 0) => {
  alert(1)
  if (page != 0) {
    pageInfo.page = page;
  }

  let res = await axios.get(`/blog/search?keyword=${pageInfo.keyword}&page=${pageInfo.page}&pageSize=${pageInfo.pageSize}&categoryId=${pageInfo.categoryId}`)
  let temp_rows = res.data.data.rows;
  for (let row of temp_rows) {
    row.content += "..."
    let d = new Date(row.create_time)
    row.create_time = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  }
  blogListInfo.value = temp_rows;
  pageInfo.count = res.data.data.count;
  pageInfo.pageCount = parseInt(pageInfo.count / pageInfo.pageSize) + (pageInfo.count % pageInfo.pageSize > 0 ? 1 : 0)
}

const toDetail = (blog) => {
  // router.push({ path: "/detail", query: { id: blog.id } })
  window.open(`/detail?id=${blog.id}`, '_blank')
}

// export default {
//   name: 'Blog',
//   // Add any necessary logic or data properties here
// }
</script>

<style>
.landing-container {
  padding: 50px;
  height: 521px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.landing-left {
  width: 50%;
  height: 421px;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 50px;
}
.landing-right {
  width: 50%;
  height: 521px;
  background-image: url('@/assets/woman.png');
  background-size: cover;
  background-position: center;
}
.landing-slogan {
  color: white;
  font-size: 3vw;
}
.landing-description {
  color: white;
  font-size: 1vw;
}
</style>