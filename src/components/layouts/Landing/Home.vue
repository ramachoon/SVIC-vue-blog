<template>
  <div class="landing-container">
    <div class="landing-left">
      <div class="landing-slogan">SymphonyVentures Immigration Consultancy Inc (SVIC)</div>
      <div class="landing-description">Your personal guide towards achieving your Canadian immigration goals</div>
    </div>
    <div class="landing-right"></div>
  </div>
  <!-- Something more goes here... -->
</template>

<script>

// export default {
//   name: 'App',
//   data() {
//     return {
//       blogs: []
//     }
//   },
//   methods: {
//     async getBlogs() {
//       try {
//         const url = `http://localhost:3000/signup`
//         const response = await fetch(url, {
//           method: 'GET'{
//             "Content-Type": "application/json"
//           }
//         }).then((r) => r.json()).catch(() => {
//           notification.error({
//             message: 'Error',
//             description: 'Server connect has failed.'
//           })
//         })
//       }
//       catch (error) {
//         console.error('Failed to sign up:', error.message);
//       }
//     },
//     async signin() {
//       try {
//         const url = `http://localhost:3000/login`;
//         const response = await fetch(url, {
//           method: 'POST',
//           body: JSON.stringify({
//             email: this.email,
//             password: this.password
//           }),
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }).then((r) => r.json()).catch(() => {
//           notification.error({
//             message: 'Error',
//             description: 'Server connect has failed.'
//           })
//         });

//         if (response.error) {
//           console.error('Failed to sign in:', response.error);
//         } else {
//           console.log('HERE HAS SUCCEDD');
//           // Redirect to the home page
//           this.$router.push({ path: '/'});
//         }
//       } catch (error) {
//         console.error('Failed to sign in:', error.message);
//       }
//     }
//   }
// }

export default {
  name: 'Landing1',
  // Add any necessary logic or data properties here
}
</script>

<style scoped>
.landing-container {
  padding: 50px;
  height: 521px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-bottom: 100px;
}
@media only screen and (max-width: 1000px) {
  .landing-container {
    flex-direction: column;
  }
  .landing-left {
    width: 100% !important;
  }
  .landing-right {
    width: 100% !important;
    padding: 100px;
  }
}
.landing-left {
  width: 50%;
  height: 521px;
  background-color: #da291c;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 50px;
  min-width: 300px;
}
.landing-right {
  width: 50%;
  height: 521px;
  background-image: url('../../../assets/woman.png');
  background-size: cover;
  background-position: center;
}
.landing-slogan {
  color: white;
  font-size: 2rem;
  margin-bottom: 20px;
}
.landing-description {
  color: white;
  font-size: 1rem;
}
</style>