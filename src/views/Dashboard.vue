<template>
  <div>
    <n-space vertical>
      <n-layout class="n-layout-main" has-sider>
        <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="280" show-trigger>
          <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" />
          

        </n-layout-sider>

        <n-layout>
      <div class="totalnumber">We have {{ total }} visitors!</div>
      <RouterView />
        </n-layout>
      </n-layout>
    </n-space>
  </div>
</template>

<script setup>
import { h, ref, onMounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { NIcon } from 'naive-ui'
import {
  AlbumsOutline as ArticleIcon,
  FileTrayFullOutline as ClassifyIcon,
  LogOutOutline as ExitIcon,
  People as UserIcon
} from '@vicons/ionicons5'

const menuOptions = [
  {
    label: () => h(
      RouterLink,
      { to: { path: '/dashboard/article' } },
      { default: () => 'Article management' }
    ),
    key: 'article-management',
    icon: renderIcon(ArticleIcon)
  },
  {
    label: () => h(
      RouterLink,
      { to: { path: '/dashboard/category' } },
      { default: () => 'Category management' }
    ),
    key: 'classification-management',
    icon: renderIcon(ClassifyIcon)
  },
  {
    label: () => h(
      RouterLink,
      { to: { path: '/dashboard/changepassword' } },
      { default: () => 'Change Password' }
    ),
    key: 'admin-password-management',
    icon: renderIcon(UserIcon)
  },
  {
    label: () => h(
      RouterLink,
      { to: { path: '/' } },
      { default: () => 'Exit' }
    ),
    key: 'exit-background',
    icon: renderIcon(ExitIcon)
  },
]

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

import axios from 'axios';

let total = ref(0);

const getTotalAccess = async () => {
  let totalNumber;

  await axios.get('/total-access', [], {
    headers: {
      'Content-type': 'application/json'
    }
  }).then((res) => {
    totalNumber = res.data.totalAccess.total;
    console.log('totalNumber',totalNumber)
  }).catch((err) => {
    console.log(err)
  })

  return totalNumber;
};

onMounted(async () => {
  total.value = await getTotalAccess();
});


</script>

<style lang="scss" scoped>
.n-layout-main {
  width: 100vw;
  height: 100vh;

  .n-layout-sider {
  padding-top: 20px;
  background: rgba(245,247,250,1);
  }
}

.totalnumber {
  color: #da291c;
  font-weight: 700;
  text-align: right;
  margin-right: 50px;
  margin-bottom: -20px;
  margin-top: 10px;
}



</style>
