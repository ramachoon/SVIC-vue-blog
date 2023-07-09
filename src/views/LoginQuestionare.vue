<template>
  <div class="login-panel">
    <div class="logo-image-text">
      <img alt="SVIC-logo-image" class="logo-image" src="../assets/SVIC_logo.png" />
      <img alt="SVIC-logo-text" class="logo-text" src="../assets/logo-text.png" />
    </div>
    <div class="welcome-title">LET'S GET STARTED</div>
    <div class="welcome-text">In order for us to provide you with the best assistance possible, it is important for us to gather more information about you. This will enable us to identify the most suitable solution for your needs. We kindly request your cooperation in answering a few questions that will help us serve you better.</div>
    <button class="lets-go-button" @click="redirectToLetsGetStarted">Let's Go!</button>
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
    { required: true, message: "Please input Username", trigger: "blur" },
    { min: 3, max: 12, message: "Name length 3 - 12", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Please enter password", trigger: "blur" },
    { min: 6, max: 18, message: "Password length 6 - 18", trigger: "blur" },
  ],
}

const login = async () => {
  let result = await axios.post('/admin/blogadmin', {
    account: admin.account,
    password: admin.password
  })

  if (result.data.code == 200) {
    adminStore.id = result.data.data.id
    adminStore.account = result.data.data.account
    adminStore.token = result.data.data.token

    if (admin.remember) {
      localStorage.setItem('account', admin.account)
      localStorage.setItem('password', admin.password)
      localStorage.setItem('remember', admin.remember)
    }

    router.push('/questionare')
    message.success('login successful')
  } else {
    message.error('Login failed')
  }
}

const redirectToLetsGetStarted = () => {
  router.push('/questionnaire')
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
  .welcome-title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 40px;
  }
  .welcome-text {
    font-size: 16px;
    width: 800px;
    text-align: center;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 1000px) {
    .welcome-text {
      width: 80%;
    }
  }
  .lets-go-button {
    height: 50px;
    width: 200px;
    font-size: 20px;
    border-radius: 10px;
    color: white;
    text-shadow: 1px 3px 5px rgba(0,0,0,1);
    font-weight: 800;
    border: 3px solid grey;
    box-shadow: 0px 3px 5px rgb(0,0,0);
    cursor: pointer;
    background-color: rgba(0,155,0,1);
    transition: background-color 0.5s ease;
  }
  .lets-go-button:hover {
    background-color: rgba(155,0,0,1);
  }
}
</style>
