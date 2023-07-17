<template>
  <div class="login-container">
    <div class="form-container">
      <h1 class="title">Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required class="form-control">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required class="form-control">
        </div>
        <div class="button-group">
          <button type="submit" class="btn btn-primary">Login</button>
          <button id="admin-login" type="button" class="btn btn-success" @click="adminQuickLogin">Admin Quick Login</button>
        </div>
      </form>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </div>
</template>


<script setup>
import axios from 'axios';
import {useCookies} from "vue3-cookies";
import {useRouter} from "vue-router";

const url = 'http://localhost:8001';
let username = '';
let password = '';
let errorMessage = '';

const router = useRouter(); // Get vue-router instance here
const {cookies} = useCookies();

const requestLogin = (credentials) => {
  axios.post(url + '/login', credentials)
      .then((response) => {
        if (response.data != null) {
          alert('Login Successful!');
          // store.dispatch('setUser', response.data.username);
          cookies.set('MY-SESSION-ID', response.data.sessionId);
          router.push('/home'); // Redirect to '/home' upon successful login
        }
      })
      .catch(error => {
        console.error('Login Failed:', error);
      });
};

const createCredentials = (un, pw) => {
  return {
    username: un,
    password: pw,
    withCredentials: true
  };
}

const login = () => {
  const credentials = createCredentials(username, password);
  requestLogin(credentials);
};

const adminQuickLogin = () => {
  const credentials = createCredentials('admin', 'admin');
  requestLogin(credentials);
};
</script>



<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
}

.form-container {
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.btn-primary {
  background: #007bff;
  color: #fff;
}

.btn-success {
  background: #28a745;
  color: #fff;
}

.error-message {
  margin-top: 20px;
  color: #dc3545;
  font-weight: bold;
}
</style>
