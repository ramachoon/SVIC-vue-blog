<template>
  <footer class="container">
    <div class="span-12 site-links bt no-gutter" v-if="focusNum === 1">
      <div class="span-6 no-gutter icon-button">
        <img src="../../assets/imgpsh_fullsize_anim.png" class="cicc-ccic" />
        <a href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant">
          <button class="verify-button">VERIFY STATUS WITH CICC</button>
        </a>
      </div>
      <div class="span-3 no-gutter third">
        <a href="#" v-if="focusNum === 1" @click="updateInputValue(4)">Connect with Us</a>
        <a href="#" v-if="focusNum === 1" @click="updateInputValue(5)">Blog</a>
      </div>
      <div class="span-3 no-gutter si">

        <div class="span-12">
          <div style="font-family: 'Nunito Bold';">Follow Us</div>
          <!-- <div class="totalnumber">We have {{ total }} visitors!</div> -->

          <div class="icon-container">
            <div class="sh-icons">
              <a href="https://www.facebook.com/profile.php?id=100093814286724" target="_blank">
                <img src="../../assets/facebook.png" alt="Facebook Logo" />
              </a>
            </div>

          </div>


        </div>

      </div>
    </div>


  </footer>
  <div class="footer-under" style="margin: auto">
    <div class="button" style="text-align: center; margin: 40px 0 15px">
      <button @click="scrollToTop" id="scrollButton" class="b2t en" style="">˄</button>
    </div>
    <div class="logo-words">
      <!-- <div class="img-footer">
        <img alt="logo" class="logo-footer" src="../../assets/SVIC_logo.png" width="125" height="125" />
        <img alt="logo text" class="logo-text-footer" src="../../assets/logo-text.png" width="125" />
      </div> -->

      <div class="" style="text-align: right; justify-content: right">
        © SVIC Immigration - All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted } from 'vue';
import axios from 'axios';

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

let total = ref(0);

const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const setCookie = (cname, cvalue, exdays) => {
  let d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

onMounted(async () => {
  if (!getCookie('visited')) {
    const response = await fetch('http://localhost:8080/increment-access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ip: window.location.hostname }),
    });
    setCookie('visited', 'true', 1);
  }
  total.value = await getTotalAccess();
});


const scrollToTop = () => {
  const scrollOptions = {
    top: 0,
    behavior: 'smooth'
  };
  window.scrollTo(scrollOptions);
};

const emits = defineEmits(['set-state']);

const updateInputValue = value => {
  emits('set-state', value);
};

defineProps({
  focusNum: {
    type: Number,
    required: true
  }
})

</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  max-width: var(--max-width);
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
}

.span-12.site-links.bt {
  border-top: 1px solid #ddd;
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.no-gutter {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

a:hover {
  color: red;
  text-decoration: underline;
}

@media (min-width: 1200px) {
  .span-3 {
    width: 25%;
  }
}

@media (min-width: 1200px) {

  .span-1,
  .span-2,
  .span-3,
  .span-4,
  .span-5,
  .span-6,
  .span-7,
  .span-8,
  .span-9,
  .span-10,
  .span-11,
  .span-12 {
    float: left;
  }
}

@media (min-width: 768px) {
  .span-3 {
    width: 20%;
  }
}

@media (min-width: 768px) {

  .span-1,
  .span-2,
  .span-3,
  .span-4,
  .span-5,
  .span-6,
  .span-7,
  .span-8,
  .span-9,
  .span-10,
  .span-11,
  .span-12 {
    float: left;
  }
}

.span-1,
.span-2,
.span-3,
.span-4,
.span-5,
.span-6,
.span-7,
.span-8,
.span-9,
.span-10,
.span-11,
.span-12,
.span-1-m,
.span-2-m,
.span-3-m,
.span-4-m,
.span-5-m,
.span-6-m,
.span-7-m,
.span-8-m,
.span-9-m,
.span-10-m,
.span-11-m,
.span-12-m,
.span-1-sm,
.span-2-sm,
.span-3-sm,
.span-4-sm,
.span-5-sm,
.span-6-sm,
.span-7-sm,
.span-8-sm,
.span-9-sm,
.span-10-sm,
.span-11-sm,
.span-12-sm,
.span-1-md,
.span-2-md,
.span-3-md,
.span-4-md,
.span-5-md,
.span-6-md,
.span-7-md,
.span-8-md,
.span-9-md,
.span-10-md,
.span-11-md,
.span-12-md,
.span-1-lg,
.span-2-lg,
.span-3-lg,
.span-4-lg,
.span-5-lg,
.span-6-lg,
.span-7-lg,
.span-8-lg,
.span-9-lg,
.span-10-lg,
.span-11-lg,
.span-12-lg {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.b2t {
  font-size: 30px !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* padding: 25px 10px; */
  color: #fff;
  background: #616161 !important;
  border-radius: 57px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0px 15px 10px -8px rgb(0, 0, 0);
  font-weight: 700;
  text-shadow: 0px 3px 3px rgb(0, 0, 0);
  margin-bottom: -50px;
  width: 50px;
  height: 50px;
}

.button,
.b2t {
  transition: all 0.5s;
}

.b2t button {
  text-decoration: none;
}

a {
  color: #333;
  color: #3C1053;
}

.b2t:hover {
  color: #fff;
  background: #0070bb !important;
  text-decoration: none;
}

p,
a {
  overflow: visible;
}

html,
body,
p,
a {
  font-family: "Nunito Regular";
  font-size: 18px !important;
  letter-spacing: 0;
  overflow-x: hidden;
  color: #333;
}

.jb {
  display: flex;
  justify-content: left;
  align-items: flex-end;
  height: 103px;
}

.sh-icons img {
  margin-top: -20px;
  width: 40px;
  height: 40px;
}

.icon-container {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-content: center;
  margin-top: 20px;
}

.footer-under {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 20px;
}

.logo-words {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin: 50px 10%;
}

.logo-footer {
  width: 70px;
  height: 70px;
}

.logo-text-footer {
  height: 50px;
  width: 210px;
}

.cicc-ccic {
  margin-top: -50px;
  width: 400px;
}

.verify-button {
  border: 3px solid black;
  padding: 10px 30px;
  border-radius: 35px;
  color: black;
  background-color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  transition: background-color 0.5s ease;
  transition: color 0.5s ease;
}

.verify-button:hover {
  color: white;
  background-color: black;
}

@media only screen and (max-width: 800px) {
  .cicc-ccic {
    width: 250px;
  }

  .verify-button {
    font-size: 15px;
  }

  .icon-button {
    margin-right: -50px;
  }
}

.icon-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 80px;
}

.third {
  margin-left: -50px;
}

.img-footer {
  margin-left: -50px;
}

a {
  cursor: pointer;
}
.totalnumber {
  color: #da291c;
  font-weight: 700;
}
</style>