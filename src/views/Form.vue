<template>
  <div class="component-container">
    <h1 class="title">Form Bindings</h1>
    <div class="example-box">
      <p>Vue supports two-way binding for form input elements:</p>
      <form @submit.prevent="submitForm">
        <input v-model="name" placeholder="Enter your name" />
        <select v-model="gender">
          <option disabled value="">Select gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <p class="demo-text" v-if="submitted">Submitted: {{ name }} ({{ gender }})</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      gender: '',
      submitted: false
    };
  },
  methods: {
    submitForm() {
      this.submitted = true;
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
input, select {
  display: block;
  margin: 10px 0;
  padding: 8px;
}
button {
  padding: 8px 12px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
</style>
