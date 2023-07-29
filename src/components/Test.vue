<template>
  <button class="btn" @click="requestTest">getTest</button>
</template>


<script>
import {ref} from 'vue';
import {io} from "socket.io-client";
import axios from "axios";

export default {
  setup() {

    const requestTest = () => {
      axios.get("http://www.sideproject.site:8001/test")
          .then((response) => {
            console.log(response.data);
            alert(response.data);
          }).catch((error) => {
        console.log(error);
      });
    };

    return {
      requestTest
      // Other script parts remain the same
    }
  }
  // Rest of the script
}
</script>
