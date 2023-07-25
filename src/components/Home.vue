<template>
  <div class="container text-center pt-5">
    <h1 class="welcome-text mb-4">Welcome to My App!</h1>
    <p class="lead">Spring Batch와 Vue3를 공부하기 위한 SideProject입니다!!</p>

    <!-- Server and Framework logos -->
    <div class="framework-logos">
      <div class="lead bold">HH Web Server and Framework</div>
      <img src="../assets/nginx.png" alt="Nginx logo" class="logo-nginx">
      <img src="../assets/vue.png" alt="Vue logo" class="logo-vue">
    </div>

    <div class="container ">
      <img src="../assets/smile.png" alt="My App Logo" class="logo-main mb-4">
      <router-link to="/batch" className="btn btn-primary btn-lg">Get Started</router-link>
    </div>
  </div>
</template>

<script>
export default {
  // Add any component options or logic here
}
</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
}

.welcome-text {
  color: #3182F6;
  font-weight: bold;
}

.lead {
  color: #6c757d;
}

.logo-main {
  width: 60px;
  height: auto;
  margin-right: 20px;
}

.btn-primary {
  background-color: #3182F6;
  border-color: #3182F6;
}

.btn-primary:hover {
  background-color: #2664c9;
  border-color: #2664c9;
}

.logo-nginx {
  width: 130px;
  height: auto;
  margin: 10px 20px 40px 0;
}

.logo-vue {
  width: 100px;
  height: auto;
  margin: 10px 0 40px 20px;
}

.bold {
  font-weight: bold;
}

.framework-logos {
  margin-top: 60px;
}
</style>
