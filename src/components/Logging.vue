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
  </div>
</template>

<script>

import {onMounted, ref} from 'vue';
import axios from 'axios'

export default {
  setup() {
    let logs = ref([]);


    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:8001/logging')
        logs.value = response.data.split('\n');
        console.log(logs.value.length)

      } catch (error) {
        console.error(error)
      }

    })


    return {
      logs
    }
  }

}


</script>


<style scoped>
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.logs-card {
  height: 400px;
  overflow-y: auto;
  overflow-x: auto;
}

.list-group-item {
  border: none;
  white-space: nowrap;
  font-size: 14px;
}

.list-group-item:last-child {
  border-bottom: none;
}
</style>
