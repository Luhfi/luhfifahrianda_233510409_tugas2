<template>
  <div class="component-container">
    <h1 class="title">Declarative Rendering</h1>
    <div class="example-box">
      <p>Vue enables declarative rendering using data binding:</p>
      <input v-model="message" placeholder="Type something..." />
      <p class="demo-text">You typed: "{{ message }}"</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style scoped>
.component-container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
}
.title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #42b983;
  border-bottom: 2px solid #42b983;
  padding-bottom: 0.5rem;
}
.example-box {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}
.demo-text {
  margin-top: 10px;
  font-weight: bold;
}
</style>
