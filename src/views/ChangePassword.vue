<template>
  <div class="login-panel">
    <div class="logo-image-text">
      <img alt="SVIC-logo-image" class="logo-image" src="../assets/SVIC_logo.png" />
      <img alt="SVIC-logo-text" class="logo-text" src="../assets/logo-text.png" />
    </div>
    <n-card>
      <n-form :rules="rules" :model="admin">
        <n-form-item path="account" label="New Name">
          <n-input v-model:value="admin.account" placeholder="Please enter your name" />
        </n-form-item>
        <n-form-item path="password" label="Old Password">
          <n-input v-model:value="admin.old_password" type="password" placeholder="Enter your original password" />
        </n-form-item>
        <n-form-item path="password" label="New Password">
          <n-input v-model:value="admin.new_password" type="password" placeholder="Enter your new password" />
        </n-form-item>
      </n-form>

      <template #footer>
        <n-space justify="space-between">
          <!-- <n-checkbox v-model:checked="admin.remember" label="Remember me" /> -->
          <div></div>
          <n-button strong secondary type="primary" @click="change">Change Password</n-button>
        </n-space>
      </template>
    </n-card>
  </div>
</template>

<script setup>
import { reactive, inject } from 'vue'
import { useRouter } from 'vue-router'
import { AdminStore } from '../stores/AdminStore'

const router = useRouter()
const adminStore = AdminStore()

const axios = inject('axios')
const message = inject('message')

const admin = reactive({
  account: localStorage.getItem('account') || '',
  password: localStorage.getItem('password') || '',
  remember: localStorage.getItem('remember') || false,
})

let rules = {
  account: [
    { required: true, message: "Please input New Username", trigger: "blur" },
    { min: 3, max: 12, message: "Name length 3 - 12", trigger: "blur" },
  ],
  old_password: [
    { required: true, message: "Please enter old password", trigger: "blur" },
    { min: 6, max: 18, message: "Password length 6 - 18", trigger: "blur" },
  ],
  new_password: [
    { required: true, message: "Please enter new password", trigger: "blur" },
    { min: 6, max: 18, message: "Password length 6 - 18", trigger: "blur" },
  ]
}

const change = async () => {
  let result = await axios.post('/admin/changepassword', {
    account: admin.account,
    old_password: admin.old_password,
    new_password: admin.new_password
  })

  console.log(result)

  if (result.data.code == 200) {
    adminStore.account = result.data.data.account

    if (admin.remember) {

      localStorage.setItem('account', admin.account)
      localStorage.setItem('password', admin.password)
    }

    router.push('/dashboard/article')
    message.success('Successfully changed')
  } else {
    message.error('Failed to change')
  }
}
</script>

<style lang="scss" scoped>
.login-panel {
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .n-card {
    width: 400px;
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(15px);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    zoom: 1.5;
  }

  .logo-image {
    width: 150px;
    margin-left: -20px;
  }

  .logo-text {
    height: 100px;
    margin-left: -40px;
  }
  
  .logo-image-text {
    margin-top: -50px;
    margin-bottom: 50px;
  }
}
</style>
