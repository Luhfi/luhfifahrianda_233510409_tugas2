<template>
  <div class="component-container">
    <h1 class="title">Welcome to Vue Learning</h1>
    <div class="example-box">
      <p>This is a demo project to help you learn the fundamentals of Vue.js.</p>
      <ul>
        <li>Declarative Rendering</li>
        <li>Attribute Bindings</li>
        <li>Form Bindings</li>
        <li>Conditional Rendering</li>
        <li>List Rendering</li>
        <li>Computed Property</li>
        <li>Lifecycle and Template Refs</li>
        <li>Watchers</li>
      </ul>
      <p class="demo-text">Use the navigation menu to explore each topic.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
ul {
  list-style: none;
  padding: 0;
}
ul li::before {
  content: '✔️ ';
  margin-right: 5px;
}
.demo-text {
  margin-top: 20px;
  font-weight: bold;
}
</style>
