<template>
  <transition name="fade" appear>
    <div class="card logs-card" v-show="show">
      <div class="resource-status">
        <span>CPU : {{ cpuUsage }}</span>
        <span>MEM : {{ memUsage }}</span>
      </div>
      <div class="container text-center pt-5">
        <h3 class="welcome-text mb-4">{{ subject }}</h3>
        <p class="lead">{{ detail }}</p>
        <img class="status-img" :src="image" alt="">
        <!-- <img :src="image" alt="" class="logo"> -->
      </div>
    </div>
  </transition>
</template>

<script>
import {onBeforeUnmount, onMounted, ref} from 'vue';

export default {

  setup() {
    const show = ref(false);
    const subject = ref('작업 시작을 대기중입니다.');
    const detail = ref('잠시만 기다려주세요.');
    const image = ref('');
    const cpuUsage = ref();
    const memUsage = ref();

    let socket;

    onMounted(() => {
      // 웹소켓 객체 생성
      // socket = new WebSocket('ws://www.sideproject.site:8001/was-socket');
      socket = new WebSocket('ws://localhost:8001/was-socket');

      // 웹소켓이 연결되면 호출되는 이벤트
      socket.onopen = (event) => {
        console.log("WebSocket is open now.");
      };

      // 웹소켓으로부터 메시지를 받으면 호출되는 이벤트
      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.type === 'STATUS') {
          show.value = true;
          subject.value = message.subject;
          detail.value = message.detail;
          image.value = '../src/assets/' + message.img;


        } else if (message.type === 'RESOURCE') {
          cpuUsage.value = message.cpu;
          memUsage.value = message.memory;



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

    return {
      subject,
      detail,
      image,
      show,
      cpuUsage,
      memUsage
    };
  },
};
</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
}

.welcome-text {
  color: #3182F6;
  font-weight: bold;
}

.lead {
  color: #6c757d;
}

.resource-status {
  width: 220px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 0.8rem;
}

.status-img {
  height: 90px;
  margin: 4px 0 21px 0px;
}
</style>
