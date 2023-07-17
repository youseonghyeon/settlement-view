<template>
  <div class="container">
    <h1>Logging Page!</h1>
    <div class="logs">
      <p v-for="(log, index) in logs" :key="index">{{ log }}</p>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";
export default {
  // data() {
  //   return {
  //     socket: null,
  //     logs: [],
  //   };
  // },
  // created() {
  //   this.socket = io('http://localhost:8001');
  //   this.socket.on('log', (log) => {
  //     this.logs.push(log);
  //   });
  // },
  // beforeDestroy() {
  //   if (this.socket) {
  //     this.socket.disconnect();
  //   }
  // },
}
</script>

<style scoped>
.logs {
  height: 400px;
  border: 1px solid #ddd;
  padding: 10px;
  overflow-y: scroll;
  margin-top: 20px;
}
</style>
