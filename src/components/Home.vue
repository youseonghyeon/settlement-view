<template>
  <div class="container text-center pt-5">
    <h1 class="welcome-text mb-4">Welcome to My App!</h1>
    <p class="lead">Your ultimate solution for batch processing and logging</p>
    <div class="container">
      <img src="../assets/smile.png" alt="My App Logo" class="logo mb-4">
      <router-link to="/batch" class="btn btn-primary btn-lg">Get Started</router-link>
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

.logo {
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

</style>
