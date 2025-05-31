<template>
  <div class="component-container">
    <h1 class="title">Lifecycle and Template Refs</h1>
    <div class="example-box">
      <p>Vue provides lifecycle hooks that let you run code at different stages:</p>
      <p class="demo-text">Check the console for lifecycle messages.</p>
      <button @click="destroyComponent">Destroy Component</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intervalId: null
    };
  },
  created() {
    console.log("Component is created");
  },
  mounted() {
    console.log("Component is mounted");
    this.intervalId = setInterval(() => {
      console.log("Interval running...");
    }, 1000);
  },
  beforeDestroy() {
    console.log("Component is about to be destroyed");
    clearInterval(this.intervalId);
  },
  methods: {
    destroyComponent() {
      this.$destroy();
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
button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
</style>
