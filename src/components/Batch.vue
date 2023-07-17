<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-center">Batch Processing Page</h1>
    <div class="mt-5">
      <ul class="text-center">
        <li>1. Insert Mock Data</li>
        <li>2. Daily Settlement</li>
        <li>3. Transfer Settlement</li>
        <li>4. Retry Failed Transfer</li>
        <li>5. Send Settlement Transfer Result Message</li>
      </ul>
    </div>
    <form @submit.prevent="startBatch" class="p-5 border rounded shadow">
      <div class="form-group">
        <label for="chunkSize">Chunk Size:</label>
        <select id="chunkSize" v-model="chunkSize" required class="form-control">
          <option value="100">100</option>
          <option value="1000">1000</option>
          <option value="5000">5000</option>
        </select>
      </div>
      <div class="form-group">
        <label for="mockDataSize">Mock Data Size:</label>
        <select id="mockDataSize" v-model="mockSize" required class="form-control">
          <option value="100000">100,000</option>
          <option value="1000000">1,000,000</option>
          <option value="10000000">10,000,000</option>
          <option value="100000000">100,000,000</option>
        </select>
      </div>
      <div class="form-group">
        <label for="targetDate">Target Date:</label>
        <input type="date" id="targetDate" v-model="targetDate" required class="form-control">
      </div>
      <button type="submit" class="btn btn-primary mt-3">Start</button>
    </form>
  </div>
</template>
<script>
import { ref } from 'vue';
import axios from "axios";

export default {
  setup() {
    let chunkSize = ref(100);
    let mockSize = ref(100000);
    let targetDate = ref(new Date().toISOString().substr(0, 10));

    const requestBatchStart = () => {
      const url = 'http://localhost:8001/start-batch';
      const data = {
        chunkSize: chunkSize.value,
        mockSize: mockSize.value,
        targetDate: targetDate.value,
      };

      axios.post(url, data)
          .then(response => {
            console.log('Batch started:', response.data);
          })
          .catch(error => {
            console.error('Failed to start batch:', error);
          });
    };

    const startBatch = () => {
      requestBatchStart();
    };

    return {
      chunkSize,
      mockSize,
      targetDate,
      startBatch,
    };
  },
};
</script>
<style scoped>
.container {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  color: #3182F6;
}

h2 {
  color: #343a40;
}

p {
  color: #6c757d;
}

form {
  background-color: #f8f9fa;
}
</style>
