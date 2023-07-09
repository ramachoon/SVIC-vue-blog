<template>
  <div class="container">
    <n-button type="primary" @click="back" ghost>
      <template #icon>
        <n-icon>
          <return-icon />
        </n-icon>
      </template>
      Return
    </n-button>

    <n-divider />

    <n-h1>{{ blogInfo.title }}</n-h1>
      <div class="blog-content">
        <div v-html="blogInfo.content"></div>
      </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowUndo as ReturnIcon } from '@vicons/ionicons5'

const router = useRouter()

const axios = inject("axios")
const blogInfo = ref({})

onMounted(() => {
  loadBlog()
})

const loadBlog = async () => {
  const route = useRoute()
  let res = await axios.get(`/blog/detail?id=${route.query.id}`)
  blogInfo.value = res.data.rows[0];
}

const back = ()=>{
  // focusNum = 5;
  // router.push("/");
  window.close();
}
</script>

<style lang="scss" scoped>
.container {
  width: 960px;
  padding: 20px;
  overflow: hidden;
  margin: 0 auto;

  .blog-content {
    font-size: 16px;
    font-family: '幼圆';
  }
}
</style>
