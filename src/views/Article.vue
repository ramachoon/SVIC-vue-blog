<template>
  <div class="article-panel">
    <n-card title="Article Management" :bordered="false">
      <n-tabs v-model:value="tabValue" justify-content="start" type="line">
        <n-tab-pane name="list" tab="Article List">
          <div class="blog-list" v-for="blog in blogListInfo">
            <n-card :title="blog.title">
              <div v-html="blog.content"></div>
              <template #footer>
                <n-space align="center">
                  <div>Created At：{{ blog.create_time }}</div>
                  <n-button tertiary type="primary" @click="toUpdate(blog)">
                    <template #icon>
                      <n-icon>
                        <Update-icon />
                      </n-icon>
                    </template>
                    Edit
                  </n-button>
                  <n-button tertiary type="warning" @click="toDelete(blog)">
                    <template #icon>
                      <n-icon>
                        <Delete-icon />
                      </n-icon>
                    </template>
                    Delete
                  </n-button>
                </n-space>
              </template>
            </n-card>
          </div>
          <n-space class="list-bottom">
            <div v-for="pageNum in pageInfo.pageCount" @click="toPage(pageNum)">
              <div class="list-button" :style="'color:' + (pageNum == pageInfo.page ? 'red' : '')">{{ pageNum }}</div>
            </div>
          </n-space>
        </n-tab-pane>

        <n-tab-pane name="add" tab="Add Article">
          <n-form>
            <n-form-item label="Title">
              <n-input v-model:value="addArticle.title" placeholder="Please enter a title" />
            </n-form-item>
            <n-form-item label="Categories">
              <n-select v-model:value="addArticle.categoryId" :options="categoryOptions" />
            </n-form-item>
            <n-form-item label="content">
              <BasicEditor v-model="addArticle.content" />
            </n-form-item>
            <n-form-item>
              <n-button strong secondary type="primary" @click="add">
                <template #icon>
                <n-icon>
                  <add-icon />
                </n-icon>
                </template>
                Submit
              </n-button>
            </n-form-item>
          </n-form>
        </n-tab-pane>

        <n-tab-pane name="update" tab="Article Modification">
          <n-form>
            <n-form-item label="Title">
              <n-input v-model:value="updateArticle.title" placeholder="Please enter a title" />
            </n-form-item>
            <n-form-item label="Categories">
              <n-select v-model:value="updateArticle.categoryId" :options="categoryOptions" />
            </n-form-item>
            <n-form-item label="content">
              <BasicEditor v-model="updateArticle.content" />
            </n-form-item>
            <n-form-item>
              <n-button strong secondary type="primary" @click="update">
                <template #icon>
                <n-icon>
                  <add-icon />
                </n-icon>
                </template>
                Submit
              </n-button>
            </n-form-item>
          </n-form>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup>
import { ref, reactive, inject, onMounted } from 'vue'
import BasicEditor from '../components/BasicEditor.vue'
// import OtherEditor from '../components/OtherEditor.vue'
import {
  GitCommit as AddIcon,
  CogOutline as UpdateIcon,
  WarningOutline as DeleteIcon
} from '@vicons/ionicons5'

const axios = inject('axios')
const message = inject('message')
const dialog = inject('dialog')

const tabValue = ref("list")
const blogListInfo = ref([])
const categoryOptions = ref([])

const pageInfo = reactive({
  page: 1,
  pageSize: 3,
  pageCount: 0,
  count: 0,
})

const addArticle = reactive({
  title: "",
  categoryId: 0,
  content: "",
})

const updateArticle = reactive({
  id: 0,
  categoryId: 0,
  title: "",
  content: "",
})

onMounted(() => {
  loadBlogs()
  loadCategory()
})

const loadBlogs = async () => {
  let res = await axios.get(`/blog/search_article?page=${pageInfo.page}&pageSize=${pageInfo.pageSize}`)
  let temp_rows = res.data.data.rows

  for (let row of temp_rows) {
    row.content += '...'
    let time = new Date(row.create_time)
    row.create_time = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
  }

  blogListInfo.value = temp_rows

  pageInfo.count = res.data.data.count
  pageInfo.pageCount = parseInt(pageInfo.count / pageInfo.pageSize) + (pageInfo.count % pageInfo.pageSize > 0 ? 1 : 0)
}

const toUpdate = async (blog) => {
  tabValue.value = "update"
  let res = await axios.get(`/blog/detail?id=${blog.id}`)
  updateArticle.id = blog.id
  updateArticle.title = res.data.rows[0].title
  updateArticle.content = res.data.rows[0].content
  updateArticle.categoryId = res.data.rows[0].category_id
}

const toDelete = (blog) => {
  dialog.warning({
    title: 'delete',
    content: 'confirm delete?',
    positiveText: 'Sure',
    negativeText: 'Cancel',

    onPositiveClick: async () => {
      let res = await axios.delete(`/blog/_token/delete?id=${blog.id}`)

      if (res.data.code == 200) {
        loadBlogs()
        message.success(res.data.msg)
      } else {
        message.error(res.data.msg)
      }
    },

    onNegativeClick: () => {
      message.info('Cancelled')
    }
  })
}

const toPage = (pageNum) => {
  pageInfo.page = pageNum
  loadBlogs()
}

const add = async () => {
  console.log('asdf',addArticle);
  let res = await axios.post('/blog/_token/add', addArticle)
  if (res.data.code == 200) {
    message.success(res.data.msg)
    loadBlogs()
    tabValue.value = "list"
  } else {
    message.error(res.data.msg)
  }
}

const loadCategory = async () => {
  let res = await axios.get('/category/list')
  categoryOptions.value = res.data.rows.map((item) => {
    return {
      label: item.name,
      value: item.id
    }
  })
}

const update = async () => {
  let res = await axios.put("/blog/_token/update", updateArticle)
  if (res.data.code == 200) {
    message.success(res.data.msg)
    loadBlogs()
    tabValue.value = "list"
  } else {
    message.error(res.data.msg)
  }
}
</script>

<style lang="scss" scoped>
.article-panel {
  padding: 20px;

  .blog-list {
    margin-bottom: 10px;
  }

  .list-bottom {
    position: fixed;
    bottom: 40px;

    .list-button {
      width: 26px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      border-radius: 3px;
      border: 1px solid #EDF1F2;
      cursor: pointer;
    }
  }
}
</style>
