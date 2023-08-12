<template>
  <div class="container mt-5 mb-5">
    <h1 class="mb-4 text-center">Batch Processing Page</h1>
    <div class="mt-5">
      <ul class="batch-process-list text-center">
        <li>Step 1. Mock 데이터 Insert</li>
        <li>Step 2. 일일 정산</li>
        <li>Step 3. 정산 금액 송금</li>
        <li>Step 4. 실패 내역 재송금</li>
        <li>Step 5. 정산 내역 이메일 전송</li>
      </ul>
    </div>

    <BatchStatusWindow/>

    <form @submit.prevent="startBatch" class="p-5 border rounded shadow">
      <div class="form-group">
        <label for="chunkSize">Chunk Size:</label>
        <select id="chunkSize" v-model="chunkSize" required class="form-control">
          <option value="100">100</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="5000">5000</option>
        </select>
      </div>
      <div class="form-group">
        <label for="mockDataSize">Mock Data Size:</label>
        <select id="mockDataSize" v-model="mockSize" required class="form-control">
          <option value="100000">100,000</option>
          <option value="200000">200,000</option>
          <option value="300000">300,000</option>
          <option value="400000">400,000</option>
          <option value="500000">500,000</option>
          <option value="600000">600,000</option>
          <option value="700000">700,000</option>
          <option value="800000">800,000</option>
          <option value="900000">900,000</option>
          <option value="1000000">1,000,000</option>
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
import {ref} from 'vue';
import axios from "axios";
import Test from "@/components/Test.vue";
import BatchStatusWindow from "@/components/BatchStatusWindow.vue";

export default {
  components: {BatchStatusWindow, Test},

  setup() {

    const showBatchStatusWindow = ref(false); // Initialize as hidden
    let chunkSize = ref(100);
    let mockSize = ref(100000);
    let targetDate = ref(new Date().toISOString().substr(0, 10));

    const requestBatchStart = () => {
      // const url = 'http://www.sideproject.site:8001/start-batch';
      const url = 'http://localhost:8001/start-batch';

      const data = {
        messageType: 'batch',
        chunkSize: chunkSize.value,
        mockSize: mockSize.value,
        targetDate: targetDate.value
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

.batch-process-list {
  padding: 0;
  list-style-type: none;
  line-height: 2;
}

.batch-process-list li {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

form {
  background-color: #f8f9fa;
  margin-top: 20px;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

</style>
