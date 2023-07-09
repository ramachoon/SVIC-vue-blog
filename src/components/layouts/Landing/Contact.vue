<template>
  <div class="landing-container">
    <div class="row">
      <div class="col-lg-6">
        <div class="brand-text">
          <p>We are thrilled that you've taken the initiative to reach out to us. Our team of experienced professionals is here to assist you with all your immigration needs. Whether you have inquiries about our services, want to discuss your specific immigration situation, or simply require general guidance, we are dedicated to providing you with the best possible assistance.</p>
    
          <p>To ensure that we address your queries and concerns accurately, please take a moment to provide us with some necessary information. By filling out the contact form below, you will enable us to understand your requirements and tailor our response to your specific needs.</p>
    
          <p>Thank you for choosing SVIC Immigration Consultancy Inc. We look forward to helping you navigate the immigration process smoothly and providing effective solutions.</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div v-if="!emailSuccess" class="contact-form">
          <h2 class="title">Connect with Us</h2>
          <!-- {{ name }} -->
          <input type="text" name="name" placeholder="Name*" v-model="name" />
          <input type="text" name="email" placeholder="E-Mail*" v-model="email" />
          <input type="text" name="subject" placeholder="Subject*" v-model="subject" />
          <textarea name="message" placeholder="message*" rows="7" v-model="message"></textarea>
          <button v-if="!spin" type="button" @click="sendEmail">Send</button>
          <svg v-if="spin" id="loading-spinner" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <g fill="none">
              <path id="track" fill="#C6CCD2" d="M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 Z"/>
              <path id="section" fill="#3F4850" d="M24,0 C37.254834,0 48,10.745166 48,24 L44,24 C44,12.954305 35.045695,4 24,4 L24,0 Z">
                <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="1s" repeatCount="indefinite"/>
              </path>
            </g>
          </svg>
        </div>
        <div v-if="emailSuccess" class="contact-form success-email">
          <div class="login-panel">
            <div class="logo-image-text">
              <img alt="SVIC-logo-image" class="logo-image" src="../../../assets/SVIC_logo.png" />
              <img alt="SVIC-logo-text" class="logo-text" src="../../../assets/logo-text.png" />
            </div>
          </div>
          <div class="text-center response-text-container">
            <div class="contact-response">Your email has been sent</div>
            <div class="contact-response">Thank you for your email</div>
            <div class="contact-response">We will contact you Shortly</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';

let name = ref('');
let email = ref('');
let subject = ref('');
let message = ref('');
let error = ref('');
let spin = ref(false);
let emailSuccess = ref(false);

onMounted(() => {
  spin.value = false;
  emailSuccess.value = false;
})

const sendEmail = async (e) => {
  spin.value = true;
  if (email.value && name.value && subject.value && message.value ) {
    if (message.value !== "") {
      e.preventDefault();

      console.log([
        email.value,
        name.value,
        subject.value,
        message.value
      ]);

      const body = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      }

      await axios.post('/mail', body, {
        headers: {
          'Content-type': 'application/json'
        }
      }).then((res) => {
        alert('Email Sent Successfully')
        console.log(res)
        // window.location.reload()
        emailSuccess.value = true;
      }).catch((err) => {
        console.log(err)
      })
    } else {
      alert('Compose Email')
    }

  } else {
    alert('Please fill all required filled')
  }
  spin.value=false;
}

</script>

<style scoped>
.landing-container {
  padding: 50px;
  height: 521px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: padding-bottom 0.5s ease;
  margin-bottom: 200px;
}
.brand-text {
  width: 90%;
  text-align: left;
  font-size: 20px;
  transform: width 0.5s ease;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-bottom: 100px;
}
.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background-color: #ffffff;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
  margin-top: -25px;

}
.contact-form input {
  height: 50px;
  width: 100%;
}
.contact-form input {
  height: 50px;
  width: 100%;
}
.contact-form input, textarea, button {
  margin: 2px 0;
}
.contact-form input, textarea {
  padding: 10px 10px;
  background: rgba(255,255,255,0.5);
  border: 2px solid rgba(0,0,0,0.2);
  transition: background 0.5s ease;
}
.contact-form input:focus, textarea:focus {
  padding: 10px 10px;
  background: rgba(255,255,255,0.5);
  border: 2px solid rgba(0,0,0,0.2);
  background-color: rgba(255, 251, 0, 0.05);
  outline: none;
  box-shadow: 0px 0px 15px rgba(255,0,0,0.5);
  border-radius: 10px;
}
.contact-form textarea {
  height: 250px;
  width: 100%;
}
.contact-form button {
  width: 120px;
  height: 60px;
  border: 0px;
  background-color: #ffffff;
  font-weight: 100;
  margin-top: 25px;
  font-family: fantasy;
  color:black;
  /*text-shadow: 0px 3px 3px rgb(0,0,0);*/
  font-size: 25px;
  box-shadow: 0px 3px 5px rgb(0,0,0);
}
.contact-form button:hover {
  color: red;
  text-shadow: 0px 0px 0px rgb(0,0,0);
}
.contact-form h2 {
  margin-bottom: 40px;
  font-weight: 700;
}
@media only screen and (max-width: 1200px) {
  .landing-container {
    padding-bottom: 1100px;
  }
}
@media only screen and (max-width: 720px) {
  .landing-container {
    padding-bottom: 1500px;
  }
}
@media only screen and (max-width: 992px) {
  .brand-text {
    width: 100%;
  }
}

.contact-response {
  font-size: max(20px, 1.5vw);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
}
.login-panel {
  padding-top: 40px;
  background-color: white;
  background-size: cover;
  display: flex;
  justify-content: center;
  zoom: 0.8;
}

.logo-image-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-image {
  height: 171px;
  margin-left: -40px;
}

.logo-text {
  height: 100px;
  margin-left: -40px;
}

.success-email {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.response-text-container {
  border-bottom: 1px solid #999999;
  margin-bottom: 50px;
}
</style>