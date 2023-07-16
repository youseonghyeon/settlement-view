<script setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
</script>


<template>
  <div class="login-page">
    <h1 class="display-4">Login</h1>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required class="form-control">
      </div>
      <div class="button-group">
        <button type="submit" class="btn btn-primary btn-lg">Login</button>
        <button id="admin-login" type="button" class="btn btn-success btn-lg" @click="adminQuickLogin">Admin Quick
          Login
        </button>
      </div>
    </form>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import {useCookies} from "vue3-cookies";


export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      withCredentials: true
    };
  },
  methods: {
    login() {
      const userCredentials = {
        username: this.username,
        password: this.password
      };

      const url = 'http://localhost:8001';
      axios.post(url + '/login', userCredentials, {withCredentials: true})
          .then((response) => {
            useCookies().cookies.set('MY-SESSION-ID', response.data);

          })
          .catch(error => {
            // 요청이 실패했을 때 수행할 작업
            console.log('Login Failed:', error);
          });
      // Default 로그인
    },
    adminQuickLogin() {
      // Admin Quick Login 요청을 보내는 로직
      const adminCredentials = {
        username: 'admin',
        password: 'admin',
        withCredentials: true
      };
      const url = 'http://localhost:8001';
      axios.post(url + '/login', adminCredentials)
          .then((response) => {
            useCookies().cookies.set('MY-SESSION-ID', response.data);
          })
          .catch(error => {
            // 요청이 실패했을 때 수행할 작업
            console.log('Admin Quick Login Failed:', error);
          });
    }
  }
}
</script>

<style>
.login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.login-form {
  margin-top: 30px;
}

.button-group {
  margin-top: 20px;
}

.btn {
  margin-right: 10px;
}

.btn-primary {
  background-color: #007bff;
}

.btn-success {
  background-color: #28a745;
}
</style>
