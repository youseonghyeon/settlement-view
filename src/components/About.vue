<template>
  <div class="container mt-5">
    <h1 class="mb-4">About Me</h1>
    <div class="row">
      <div class="col-lg-6">
        <h2>Personal Information</h2>
        <p>
          <strong>Name:</strong> 유성현<br>
          <strong>Job:</strong> 백엔드<br>
          <strong>Email:</strong> dolla_@naver.com<br>
          <strong>Blog:</strong> <a href="https://youseong.tistory.com" class="styled-link">Seonghyeon Blog</a>
        </p>
      </div>
      <div class="col-lg-6">
        <h2>About This Project</h2>
        <p>
          웹을 이용한 간단한 배치 실행 사이트
        </p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-12">
        <h2>My Skills</h2>
        <ul>
          <li>Java</li>
          <li>Spring</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Add any component options or logic here
}
</script>

<style scoped>
h1, h2 {
  color: #343a40;
}
p, li {
  color: #6c757d;
}
.styled-link {
  color: #17a2b8;   /* Change to the color of your choice */
  text-decoration: none;
  font-weight: bold;
}
.styled-link:hover {
  color: #138496;  /* Change to the color of your choice */
  text-decoration: underline;
}
</style>
