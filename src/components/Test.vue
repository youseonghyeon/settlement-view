<template>
  <transition name="expand">
    <div class="card logs-card" v-show="showLogs">
      <div class="card-header">
        <h5>Spring Logs</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(log, index) in logs" :key="index">{{ log }}</li>
      </ul>
    </div>
  </transition>
  <button class="btn btn-primary" @click="toggleDiv">로그 보이기/숨기기</button>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.logs-card {
  overflow-y: auto;
}

.list-group-item {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, .125);
}

.list-group-item:last-child {
  border-bottom: none;
}

/* Add these lines for the animation */
.expand-enter-active, .expand-leave-active {
  transition: height 1s;
}

.expand-enter, .expand-leave-to {
  height: 0;
}
</style>


<script>
import {ref} from 'vue';
import {io} from "socket.io-client";

export default {
  setup() {
    const showLogs = ref(false); // Initialize as hidden

    const toggleDiv = () => {
      showLogs.value = !showLogs.value;
    };

    return {
      showLogs,
      toggleDiv,
      // Other script parts remain the same
    }
  }
  // Rest of the script
}
</script>
