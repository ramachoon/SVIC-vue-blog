html
<template>
  <div class="landing-container">
    <div class="container">
      <div class="section">
        <h2 class="title text-danger">About us</h2>
        <div>
          <p class="brand-text">
            SymphonyVentures Immigration Consultant Inc. (SVIC) is a boutique immigration firm providing expert immigration advice on the complex Canadian immigration system, <b>domiciled in Canada.</b>
          </p>
          <p class="brand-text">
            SVIC <b>provides grade A immigration service</b> and treats each case with the utmost importance.
          </p>
          <p class="brand-text">
            <b>We have been there!</b> SVIC understands clients' needs and has a wealth of personal experience gained from going through the process. We know that the process can be lengthy, tedious, and overwhelming, and we are here to guide you every step of the way. Because of our personal journey through the immigration process, we can...
          </p>
        </div>
      </div>

      <div class="section">
        <h3 class="subtitle text-danger">Our Mission</h3>
        <div>
          <p class="brand-text">
            SVIC is committed to delivering the highest level of immigration service to our clients on each and every engagement.
          </p>
        </div>
      </div>

      <div class="section">
        <h3 class="subtitle text-danger">Our Vision</h3>
        <div>
          <p class="brand-text">
            Test2
          </p>
        </div>
      </div>

      <div class="section">
        <h3 class="subtitle text-danger">Our Values</h3>
        <div>
          <ul class="brand-text list-group">
            <li class="list-group-item">Transparent, Efficient, Act with Complete Integrity.</li>
            <li class="list-group-item">Embrace Global Diversity.</li>
            <li class="list-group-item">Achieve Excellence through Accountability.</li>
            <li class="list-group-item">Understand Our Clients.</li>
            <li class="list-group-item">Pursue Knowledge and Stay Informed.</li>
            <li class="list-group-item">Commitment to delivering a superior service experience to our clients on each and every engagement.</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <h2 class="title text-danger">Our People</h2>
        <div>
          <p class="brand-text">
            <b>Roshana Stanley</b> - Registered Immigration Consultant (RCIC)
          </p>
          <p class="brand-text">
            <b>Herms Stanley</b>– Liaison Officer
          </p>
        </div>
      </div>

      <div class="section">
        <h2 class="title text-danger">Why choose us?</h2>
        <div>
          <ul class="brand-text list-group">
            <li class="list-group-item">We guarantee transparency in our process and in our communication with you.</li>
            <li class="list-group-item">We provide comprehensive eligibility screening.</li>
            <li class="list-group-item">We provide efficient service.</li>
            <li class="list-group-item">Error-Free applications.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>

<style scoped>
.landing-container {
  padding: 50px;
  background-color: #fff;
  transition: all 0.5s ease;
}

@media only screen and (max-width: 1100px) {
  .landing-container {
    padding: 0px;
  }
}
.section {
  margin-bottom: 50px;
}
.title {
  font-size: 25px;
  font-weight: 600;
}
.subtitle {
  font-size: 20px;
  font-weight: 500;
}
.brand-text {
  font-size: 16px;
}
h2, h3 {
  border-left: 5px solid red;
  padding: 10px 20px;
  padding-top: 20px;
  margin: 0px;
  zoom: 1.5;
  box-shadow: 3px 5px 8px -5px rgba(0,0,0,0.4);
  transition: all 0.3s ease;
}
h2:hover, h3:hover {
  background-color: #ff000033;
  border-radius: 20px 0px 0px 0px;
  padding-top: 15px;
}
.section > div {
  border-left: 5px solid #fffd6a;
  padding: 25px 20px;
  background-color: #ff000011;
  zoom: 1.2;
  transition: all 0.3s ease;
}
.section > div:hover {
  padding-top: 35px;
  border-radius: 0px 0px 0px 50px;
}
.list-group-item:hover {
  background-color: #ff000011;
}
.list-group-item {
  transition: all 0.3s ease;
}

</style>