<template>
  <div class="avatar-container">
    <div class="avatar"></div>
    <div class="camera">
      <img class="camera-img" src="../assets/camera.png" />
    </div>
  </div>
</template>


<script setup>

</script>

<style>
.avatar-container {
  zoom: 1;
  cursor: pointer;;
}
.avatar {
  background-image: url('../assets/woman.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 5px solid white;
}
.camera {
  width: 35px;
  height: 35px;
  border-radius: 20px;
  background-color: #BBBBBB;
  margin-left: 150px;
  margin-top: -50px;
}
.camera img {
  width: 25px;
  margin-left: 5px;
  margin-top: 5px;
}
</style>