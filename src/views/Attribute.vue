[file name]: Attribute.vue
<template>
  <div class="component-container">
    <h1 class="title">Attribute Bindings</h1>
    <div class="example-box">
      <p>Bind attributes dynamically using <code>v-bind</code> or <code>:</code> shorthand:</p>
      <img :src="imagePath" :alt="imageAlt" width="200">
      <p class="demo-text">Current alt text: "{{ imageAlt }}"</p>
      <button @click="changeImage">Change Image</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePath: 'https://vuejs.org/images/logo.png',
      imageAlt: 'Vue.js Logo'
    }
  },
  methods: {
    changeImage() {
      this.imageAlt = this.imageAlt === 'Vue.js Logo' ? 'Vue Logo' : 'Vue.js Logo';
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