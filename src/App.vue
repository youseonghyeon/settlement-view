<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-tos-blue shadow-sm mb-4">
      <router-link to="/home" class="navbar-brand ml-5 pl-5 text-light">My App</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto mr-4">

          <li class="nav-item">
            <router-link to="/batch" class="nav-link text-light">Batch</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/logging" class="nav-link text-light">Logging</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link text-light">About</router-link>
          </li>

        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>


<script setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
</script>

<style>
body {
  background-color: #F5F8FD;
}
.navbar-brand {
  font-weight: bold;
  padding-left: 100px; /* Increase left padding */
}
.nav-item {
  margin-left: 15px;
}
.bg-tos-blue {
  background-color: #3182F6;
}
.nav-link.text-light:hover {
  color: #fff;
}
</style>
