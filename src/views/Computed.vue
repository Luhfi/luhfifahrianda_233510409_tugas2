<template>
  <div class="component-container">
    <h1 class="title">Computed Property</h1>
    <div class="example-box">
      <p>Computed properties are used for complex logic that depends on reactive data.</p>
      <p>They are cached based on their reactive dependencies.</p>
      <p class="demo-text">Original message: "{{ message }}"</p>
      <p class="demo-text">Reversed message (computed): "{{ reversedMessage }}"</p>
      <button @click="changeMessage">Change Message</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue 3!'
    }
  },
  computed: {
    // A computed property that reverses the message
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    changeMessage() {
      this.message = this.message === 'Hello Vue 3!' ? 'Computed properties are awesome!' : 'Hello Vue 3!';
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
  color: #2c3e50;
  font-weight: bold;
}
button {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}
button:hover {
  background: #369f6b;
}
</style>