<template>
  <div class="container">
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
      <nav class="navbar">
        <div class="navbar-logo">
          <img alt="logo" class="logo" src="../assets/SVIC_logo.png" width="125" height="125" />
          <img alt="logo text" class="logo-text" src="../assets/logo-text.png" width="125" />
        </div>
        <div class="logo-list">
          <img alt="logo text" class="logo-text upper-logo" src="../assets/logo-text.png" width="125" />
          <ul class="navbar-tabs">
            <span @mouseover="showTempBox = 1" @mouseleave="showTempBox = 0" @click="focusNum = 1"
              :class="{ 'active': focusNum === 1 }">
              <div @mouseover="hideMenuUrgent" :class="{ 'focusactive': iconShow === true }">Home</div>
              <img @mouseover="hideMenuUrgent" :class="{ 'iconactive': iconShow === false }"
                src="../assets/navicon/home.png" />
              <!-- <div v-if="focusNum === 1" class="temp-box"></div>
              <div v-if="showTempBox === 1" class="temp-box"></div> -->

            </span>
            <span @mouseover="showTempBox = 2" @mouseleave="showTempBox = 0" @click="focusNum = 2"
              :class="{ 'active': focusNum === 2 }">
              <div @mouseover="hideMenuUrgent" :class="{ 'focusactive': iconShow === true }">About</div>
              <img @mouseover="hideMenuUrgent" :class="{ 'iconactive': iconShow === false }"
                src="../assets/navicon/about.png" />
              <!-- <div v-if="focusNum === 2" class="temp-box"></div>
              <div v-if="showTempBox === 2" class="temp-box"></div> -->
            </span>
            <span @mouseover="showMenu" @mouseleave="hideMenu" :class="{ 'active': [3, 6, 7, 8, 9].includes(focusNum) }">

              <div class="dropdown" @mouseover="showMenu, showTempBox = 3">

                <div @mouseover="showTempBox = 3" @mouseleave="showTempBox = 0" @click="focusNum = 3"
                  :class="{ 'focusactive': iconShow === true }">
                  <div class="dd-button">Services ▼</div>
                </div>

                <input type="checkbox" class="dd-input" id="test" />

                <ul @mouseover="showMenu, showTempBox = 3" @mouseleave="showTempBox = 0" class="dd-menu">
                  <li @mouseover="showMenu" @click="focusNum = 6" @mouseleave="hideMenuUrgent"><a>Temporary Residence</a>
                  </li>
                  <li @mouseover="showMenu" @click="focusNum = 7" @mouseleave="hideMenuUrgent"><a>Permanent Residence</a>
                  </li>
                  <li @mouseover="showMenu" @click="focusNum = 8" @mouseleave="hideMenuUrgent"><a>Citizenship</a>
                  </li>
                  <li @mouseover="showMenu" @click="focusNum = 9" @mouseleave="hideMenuUrgent"><a>Appeals</a></li>
                </ul>

              </div>
              <img :class="{ 'iconactive': iconShow === false }" @mouseover="showTempBox = 3" @click="focusNum = 3"
                src="../assets/navicon/services.png" />
              <!-- <div v-if="showTempBox === 3" class="temp-box"></div>
              <div v-if="showTempBox === 6" class="temp-box"></div>
              <div v-if="showTempBox === 7" class="temp-box"></div>
              <div v-if="showTempBox === 8" class="temp-box"></div>
              <div v-if="showTempBox === 9" class="temp-box"></div>
              <div v-if="focusNum === 3" class="temp-box"></div>
              <div v-if="focusNum === 6" class="temp-box"></div>
              <div v-if="focusNum === 7" class="temp-box"></div>
              <div v-if="focusNum === 8" class="temp-box"></div>
              <div v-if="focusNum === 9" class="temp-box"></div> -->

            </span>
            <span @mouseover="showTempBox = 4" @mouseleave="showTempBox = 0" @click="focusNum = 4"
              :class="{ 'active': focusNum === 4 }">
              <div @mouseover="hideMenuUrgent" :class="{ 'focusactive': iconShow === true }">Contact</div>
              <img @mouseover="hideMenuUrgent" :class="{ 'iconactive': iconShow === false }"
                src="../assets/navicon/contact.png" />
              <!-- <div v-if="showTempBox === 4" class="temp-box"></div>
              <div v-if="focusNum === 4" class="temp-box"></div> -->
            </span>
            <span @mouseover="showTempBox = 5" @mouseleave="showTempBox = 0" @click="focusNum = 5"
              :class="{ 'active': focusNum === 5 }">
              <div @mouseover="hideMenuUrgent" :class="{ 'focusactive': iconShow === true }">Blog</div>
              <img @mouseover="hideMenuUrgent" :class="{ 'iconactive': iconShow === false }"
                src="../assets/navicon/blog.png" />
              <!-- <div v-if="showTempBox === 5" class="temp-box"></div>
              <div v-if="focusNum === 5" class="temp-box"></div> -->
            </span>
          </ul>
        </div>
      </nav>
    </header>

    <Home v-if="focusNum === 1" />
    <About v-else-if="focusNum === 2" />
    <Services v-else-if="focusNum === 3" />
    <Contact v-else-if="focusNum === 4" />
    <TemporaryResidence v-else-if="focusNum === 6" />
    <PermanentResidence v-else-if="focusNum === 7" />
    <Citizenship v-else-if="focusNum === 8" />
    <EnforcementAppeals v-else-if="focusNum === 9" />
    <template v-else-if="focusNum === 5" style="min-height: 400px;">
      <div class="nav">
        <!-- <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" @update:value="selectedCategory" /> -->
        <!-- <Menu v-model:value="activeKey" :items="[1,2,3]" @update:value="selectedCategory" /> -->
        <!-- <b-form-select v-model="activeKey" mode="horizontal" :options="[1,2,3]" @update:value="selectedCategory" ></b-form-select> -->
        <div class="categories">
          <div>Categories:&nbsp;&nbsp;</div>
          <select class="category-select" v-model="activeKey" @change="selectedCategory">
            <option v-for="(item, index) in menuOptions[0].children" :key="item.key">{{ item.label }}</option>
          </select>
        </div>

        <n-space>
          <n-input v-model:value="pageInfo.keyword" :style="{ width: '200px' }" placeholder="Please enter key words" @input="loadBlogs(0)" @kepup.enter="loadBlogs(0)" />
          <n-button type="primary" ghost @click="loadBlogs(0)"> Search </n-button>
        </n-space>
      </div>

      <div class="blog-container" v-for="(blog, index) in blogListInfo" :key="blog.title">
        <button v-if="index % 2 === 0 && blog.is_expanded" @click="handleAccordion(index)" class="blog-title-small">
          <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{ blog.title }}</div>
          <div style="display:flex;flex-direction:row">
            <div style="width: 95%;"></div>
            <img src="../assets/collapse.png" style="width: 30px;margin-top:-55px;margin-bottom:25px;"
              v-if="index % 2 === 0 && blog.is_expanded" />
          </div>
        </button>
        <button v-if="index % 2 === 0 && !blog.is_expanded" class="collapse-button-red" @click="handleAccordion(index)">
          <!-- <div v-html="blog.content" class="blog-content"></div> -->
          <div class="blog-title" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{ blog.title }}
          </div>
          <div class="blog-created-time"> Created: {{ blog.create_time }}</div>
          <div class="blog-text-image">
            <div class="blot-text-button">
              <div class="blog-tab-content">
                {{
                  blog.content.replace(/<.*?>/g, "").length > 313 ?
                  blog.content.replace(/<.*?>/g, "").substring(0, 313) + "..." :
                  blog.content.replace(/<.*?>/g, "")
                }}
              </div>
              <button class="read-more">READ IT</button>
            </div>
            <div v-html="blog.content.includes('<img') ?
                  blog.content.replace(/.*(<img.*?>).*/, /$1/).substring(1,) :
                  blog.content.replace(/./g, '')
                " class="blog-picture"></div>
          </div>
        </button>
        <button v-if="index % 2 === 1 && blog.is_expanded" @click="handleAccordion(index)" class="blog-title-small-white">
          <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{ blog.title }}</div>
          <div style="display:flex;flex-direction:row">
            <div style="width: 95%;"></div>
            <img src="../assets/collapse.png" style="width: 30px;margin-top:-55px;margin-bottom:25px;"
              v-if="index % 2 === 1 && blog.is_expanded" />
          </div>
        </button>
        <button v-if="index % 2 === 1 && !blog.is_expanded" class="collapse-button-white" @click="handleAccordion(index)">
          <!-- <div v-html="blog.content" class="blog-content"></div> -->
          <div class="blog-title-white" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{
            blog.title }}</div>
          <div class="blog-created-time-white"> Created: {{ blog.create_time }}</div>
          <div class="blog-text-image">
            <div v-html="blog.content.replace(/.*(<img.*?>).*/, /$1/).substring(1,)" class="blog-picture-white"></div>
            <div class="blot-text-button-white">
              <div class="blog-tab-content">
                {{
                  blog.content.replace(/<.*?>/g, "").length > 313 ?
                  blog.content.replace(/<.*?>/g, "").substring(0, 313) + "..." :
                  blog.content.replace(/<.*?>/g, "")
                }}
              </div>
              <button class="read-more-white">READ IT</button>
            </div>
          </div>
        </button>
        <Collapse :when="blog.is_expanded" class="v-collapse">
          <div v-html="blog.content" class="blog-content"></div>
        </Collapse>
      </div>



      <div class="container">
        <div class="home-footer">
          <div>Welcome to Symphony Ventures Immigration Consultancy Inc.</div>
        </div>
      </div>
    </template>
    <Footer @set-state="setFocusNum" :focusNum="focusNum" />
  </div>
</template>

<script setup>
import { ref, reactive, inject, h, onMounted, nextTick } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { NIcon } from "naive-ui";
import {
  FishOutline as HomeIcon,
  FileTrayOutline as CategoryIcon,
  CogOutline as LoginIcon,
  ArrowBack,
  ArrowForward
} from "@vicons/ionicons5"
import Footer from '../components/layouts/Footer.vue'

import Home from '../components/layouts/Landing/Home.vue'
import About from '../components/layouts/Landing/About.vue'
import Contact from '../components/layouts/Landing/Contact.vue'
import Services from '../components/layouts/Landing/Services.vue'
// import Blog from '../components/layouts/Landing/Blog.vue'
import EnforcementAppeals from '../components/layouts/Landing/Services/EnforcementAppeals.vue'
import PermanentResidence from '../components/layouts/Landing/Services/PermanentResidence.vue'
import Citizenship from '../components/layouts/Landing/Services/Citizenship.vue'
import TemporaryResidence from '../components/layouts/Landing/Services/TemporaryResidence.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { defineProps, defineEmits } from 'vue';
import { Collapse } from 'vue-collapsed'

import { Menu } from "@progress/kendo-vue-layout";

// const is_expanded = ref(false)

const props = defineProps({
  focusNum: Number
})

// const emits = defineEmits(['setFocusNum'])

// const setFocusNum = focusNum => {
//   emits('setFocusNum')
// }

const setFocusNum = value => {
  focusNum.value = value;
}

let focusNum = ref(1);
const showTempBox = ref(0);

const axios = inject("axios")
const router = useRouter()

const activeKey = ref('All')
const menuOptions = ref([])
let blogListInfo = ref([])

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
    {
      label: "Categories",
      key: "1",
      // icon: renderIcon(CategoryIcon),
      children: categoryChildren,
    },
  ]
}

const updateFocusNum = newFocusNum => {
  this.focusNum = newFocusNum;
}

const selectedCategory = async (key) => {
  let filter;
  menuOptions.value[0].children.map(item => {
    // console.log(item.label);
    // console.log(item.key);
    // console.log(key.target.value)
    if (item.label === key.target.value) {
      // console.log(true);
      filter = item.key
    }
  });
  // pageInfo.categoryId = key;
  console.log('filter', filter);
  console.log('key', key);
  pageInfo.categoryId = filter;
  await loadBlogs()
}

const fetchdatas = async () => {
  let res = await axios.get(`/blog/search?keyword=${pageInfo.keyword}&categoryId=${pageInfo.categoryId}`)
  let temp_rows = res.data.data.rows;
  for (let row of temp_rows) {
    row.content += "..."
    let d = new Date(row.create_time)
    row.create_time = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  }
  blogListInfo.value = temp_rows;
  console.log(blogListInfo[0])
}
const loadBlogs = async (page = 0) => {
  if (page != 0) {
    pageInfo.page = page;
  }

  // let res = await axios.get(`/blog/search?keyword=${pageInfo.keyword}&page=${pageInfo.page}&pageSize=${pageInfo.pageSize}&categoryId=${pageInfo.categoryId}`)
  await fetchdatas()
  pageInfo.count = res.data.data.count;
  pageInfo.pageCount = parseInt(pageInfo.count / pageInfo.pageSize) + (pageInfo.count % pageInfo.pageSize > 0 ? 1 : 0)
}

const handleAccordion = selectedIndex => {
  console.log('blogListInfo', blogListInfo);
  blogListInfo.value.forEach((_, index) => {
    blogListInfo.value[index].is_expanded = index === selectedIndex ? !blogListInfo.value[index].is_expanded : false;
    // blogListInfo = reactive(blogListInfo)
  })
}

const toDetail = (blog) => {
  // router.push({ path: "/detail", query: { id: blog.id } })
  window.open(`/detail?id=${blog.id}`, '_blank')
}

const iconShow = ref(false);

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

const handleResize = () => {
  if (window.innerWidth < 1100) {
    iconShow.value = true;
  } else {
    iconShow.value = false;
  }
};

import { defineExpose } from 'vue';

const clickOutside = {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};

let hideMenuTimeoutId;

const hideMenu = () => {
  hideMenuTimeoutId = setTimeout(() => {
    document.getElementById('test').checked = false;
  }, 2000);
};

const hideMenuUrgent = () => {
  document.getElementById('test').checked = false;
}

const showMenu = () => {
  clearTimeout(hideMenuTimeoutId);
  document.getElementById('test').checked = true;
};

const setPage = value => {
  focusNum = value;
}

defineExpose({
  directives: {
    clickOutside,
  },
  methods: {
    hideMenu,
    showMenu,
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 90vw;
  margin: 0 auto;

  .nav {
    width: 960;
    height: 60px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .n-menu {
      color: red;
      font-size: 22px;
      font-weight: bold;
    }
  }

  .carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }

  .custom-arrow {
    display: flex;
    position: absolute;
    bottom: 25px;
    right: 10px;
  }

  .custom-arrow button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin-right: 12px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-width: 0;
    border-radius: 8px;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .custom-arrow button:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .custom-arrow button:active {
    transform: scale(0.95);
    transform-origin: center;
  }

  .custom-dots {
    display: flex;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

  .custom-dots li {
    display: inline-block;
    width: 12px;
    height: 4px;
    margin: 0 3px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .custom-dots li.is-active {
    width: 40px;
    background: #fff;
  }

  .article {
    margin-bottom: 10px;
    cursor: pointer;
  }

  .home-footer {
    text-align: center;
    line-height: 25px;
    color: #64676a;
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
  align-content: center;
  justify-content: center;
  margin-bottom: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 10px 1px -8px rgb(0 0 0 / 10%);
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  margin: -10px;
  margin-bottom: 0px;
}

@media only screen and (max-width:1100px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 10px 1px -8px rgb(0 0 0 / 10%);
    flex-direction: row;
    align-items: flex-end;
    margin: -10px;
    margin-bottom: 0px;
  }
}

.navbar-logo {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.navbar-logo .logo {
  height: 15vh;
  width: 15vh;
  /* Adjust height as needed */
}

.navbar-tabs {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;

}

.navbar-tabs span {
  padding: 0.3rem 1vw;
  font-size: 18px;
  min-width: 5vw;
  width: 100%;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-content: center;
  justify-content: center;
  color: black;
  font-weight: 700;
  padding-left: 20px;
}

.navbar-tabs span:hover {
  color: red;
  cursor: pointer;
}

.active {
  padding: 0.3rem 1vw;
  font-size: 15px;
  min-width: 3vw;
  color: red;
  cursor: pointer;
}

.navbar-tabs span .showBar {
  padding: 0.3rem 1vw;
  font-size: 15px;
  min-width: 3vw;
  color: red;
  cursor: pointer;
}

.temp-box {
  position: absolute;
  margin: 0 100px;
  margin-top: 23px;
  width: 0;
  height: 0;
  width: 20px;
  height: 20px;
  z-index: 999;
  border: 13px solid rgb(155, 0, 0);
  transform: rotate(225deg);
  clip-path: polygon(0 0, 50% 0, 0 50%);
}

.logo-text {
  width: 300px;
}

@media only screen and (max-width:1100px) {
  .logo-text {
    display: none;
  }
}

.upper-logo {
  display: none;
}

@media only screen and (max-width:1100px) {
  .upper-logo {
    display: block;
  }
}

@media only screen and (max-width:1100px) {
  .navbar {
    justify-content: center;
  }
}

.logo-list {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  /* align-content: center; */
  justify-content: space-evenly;
  align-items: flex-start;
}

.focusactive {
  display: none;
}

.iconactive {
  display: none;
  height: 50px;
}

.navbar-tabs img {
  height: 30px;
  margin-top: 5px;
  padding: 1px;
}

.navicon {
  padding: 0.3rem 1vw;
  font-size: 25px;
  width: 100%;
  min-width: 3vw;
  text-decoration: none;
  font-weight: 600;
}

.active img {
  box-shadow: 0px 0px 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.8);
}


.dd-menu li a {
  text-decoration: none;
  color: #000000;
  font-weight: 400;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}



.dd-menu li a:hover {
  color: rgb(99, 48, 0);
}


.dd-menu:out-of-range {
  display: none;
}

/* Dropdown */

.dropdown {
  display: inline-block;
  position: relative;
  z-index: 10;
}

.dd-button {
  display: inline-block;
  padding: 0px 30px 0px 0px;
  cursor: pointer;
  white-space: nowrap;
  margin-left: 2vw;
}

.dd-input {
  display: none;
}

.dd-menu {
  position: absolute;
  top: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0;
  margin: 22px 0 0 0;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  list-style-type: none;
}

.dd-input+.dd-menu {
  display: none;
}

.dd-input:checked+.dd-menu {
  display: block;
}

.dd-menu li {
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap;
  color: #000000;
}

.dd-menu li:hover {
  background-color: #f6f6f6;
}

.dd-menu li a {
  display: block;
  margin: -10px -20px;
  padding: 10px 20px;
}

.dd-menu li.divider {
  padding: 0;
  border-bottom: 1px solid #cccccc;
}

.v-collapse {
  transition: height 300ms cubic-bezier(0.33, 1, 0.68, 1);
}

.collapse-button-red {
  height: 500px;
  margin-bottom: 50px;
  border: 0px solid rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  font-size: 25px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 5vw;
  background-color: #f4e9e4;
}

.collapse-button-white {
  height: 500px;
  margin-bottom: 50px;
  border: 0px solid rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  font-size: 25px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 5vw;
  background-color: rgb(0, 0, 0, 0.05);
}

.blog-title {
  font-size: 60px;
  margin-top: -50px;
}

.blog-container {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 85%;
  margin-left: 8%;
}

.blog-text-image {
  display: flex;
  flex-direction: raw;
}

.blog-tab-content {
  font-weight: 500;
  font-size: medium;
  text-align: justify;
  margin-top: 20px;
}

.blot-text-button {
  width: 50%;
}

.blog-content {
  word-wrap: break-word;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-top: #00000000;
  margin-bottom: 30px;
}

.read-more {
  width: 120px;
  height: 60px;
  border: 0px;
  background-color: #e4c1b1;
  font-weight: 100;
  margin-top: 25px;
  font-family: fantasy;
  color: rgba(0, 0, 0, 0.7);
}

.read-more-white {
  width: 120px;
  height: 60px;
  border: 0px;
  background-color: #f0cfc0;
  font-weight: 100;
  margin-top: 25px;
  font-family: fantasy;
  color: rgba(0, 0, 0, 0.7);
}

.n-space {
  zoom: 1.5;
}

@media only screen and (max-width:1000px) {
  .blog-picture {
    display: none;
  }

  .blog-picture-white {
    display: none;
  }

  .blot-text-button {
    width: 100%;
  }
}

.blog-picture {
  color: #00000000;
  width: 50%;
  position: relative;
  margin-left: 5%;
  clip-path: polygon(10% 0%, 0% 250px, 90% 250px, 100% 0px);
}

.blog-picture-white {
  color: #00000000;
  width: 50%;
  position: relative;
  margin-right: 5%;
  margin-left: -5%;
  clip-path: polygon(10% 0%, 0% 250px, 90% 250px, 100% 0px);
}

.blog-title-white {
  font-size: 60px;
  margin-top: -50px;
  text-align: right;
}

.blog-created-time-white {
  text-align: right;
}

.n-menu {}

.blog-title-small {
  border: 0px;
  height: 100px;
  background-color: #fdf4f4;
  font-size: 60px;
  font-weight: bold;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
}

.blog-title-small-white {
  border: 0px;
  height: 100px;
  background-color: rgb(0, 0, 0, 0.05);
  font-size: 60px;
  font-weight: bold;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
}

.category-select {
  height: 50px;
  width: 250px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding-left: 20px;
  margin-bottom: 15px;
  color: rgba(0, 0, 0, 0.6);
}

.category-select option {
  font-size: 25px;
  color: rgba(0, 0, 0, 0.6);
  height: 150px;
}

.categories {
  display: flex;
  flex-direction: raw;
  font-size: 30px;
  zoom: 0.8;
}

@media only screen and (max-width:1000px) {
  .container .nav {
    margin-left: 20%;
    display: block;
    word-wrap: nowrap;
    margin-bottom: 70px;
  }

  .category-select {
    height: 50px;
    width: 360px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding-left: 20px;
    margin-bottom: 15px;
    color: rgba(0, 0, 0, 0.6);
  }
}

@media only screen and (max-width:768px) {
  .container .nav {
    margin-left: 10%;
    display: block;
    word-wrap: nowrap;
  }
}

.sticky {
  position: fixed;
  bottom: 0%;
}

.collapse-button {
  position: absolute;
  right: 200px;
  width: 40px;
  margin-top: 30px;
}

.blog-image-container img {
  max-width: 100%;
  height: auto;
}

.blog-content {
  max-width: 100%;
  overflow-x: hidden;
}</style>
