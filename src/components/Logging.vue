<template>
  <div class="container my-4">
    <h1 class="text-center mb-4">Logging Page!</h1>
    <div class="card logs-card">
      <div class="card-header">
        <h5>Spring Logs</h5>
      </div>
      <div class="">
        <li class="list-group-item" v-for="(log, index) in logs" :key="index">
          {{ log }}
        </li>
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-primary mt-3" @click="clear">Clear</button>
    </div>
  </div>
</template>


<script>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import axios from "axios";

export default {

  setup() {
    let logs = ref([]);
    let socket;

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:8001/logging')
        logs.value = response.data.split('\n');
      } catch (error) {
        console.error(error)
      }
      // 웹소켓 객체 생성
      socket = new WebSocket('ws://localhost:8001/was-socket');

      // 웹소켓이 연결되면 호출되는 이벤트
      socket.onopen = (event) => {
        console.log("WebSocket is open now.");
      };

      // 웹소켓으로부터 메시지를 받으면 호출되는 이벤트
      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log(message);
        if (message.type === 'LOG') {
          logs.value.push(message.subject);
        }
      };

      // 웹소켓이 닫히면 호출되는 이벤트
      socket.onclose = (event) => {
        console.log("WebSocket is closed now.");
      };

      // 웹소켓 중 오류가 발생하면 호출되는 이벤트
      socket.onerror = (event) => {
        console.error("WebSocket error observed:", event);
      };
    });

    onBeforeUnmount(() => {
      if (socket) {
        socket.close();
      }
    });

    const clear = () => {
      logs.value = [];
    };

    return {
      logs,
      clear
    };
  },
};
</script>


<style scoped>
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.logs-card {
  height: 500px;
  overflow-y: auto;
  overflow-x: auto;
}

.list-group-item {
  border: none;
  white-space: nowrap;
  font-size: 13px;
}

.list-group-item:last-child {
  border-bottom: none;
}
</style>
