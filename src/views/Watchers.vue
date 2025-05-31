<template>
  <div class="component-container">
    <h1 class="title">Watchers</h1>
    <div class="example-box">
      <p>Watchers allow you to perform actions in response to data changes:</p>
      <input v-model.number="number" type="number" placeholder="Enter a number" />
      <p class="demo-text">Doubled: {{ doubled }}</p>
      <p class="demo-text">Status: {{ status }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      status: ''
    }
  },
  computed: {
    doubled() {
      return this.number * 2;
    }
  },
  watch: {
    number(newValue, oldValue) {
      if (newValue > oldValue) {
        this.status = 'Increased';
      } else if (newValue < oldValue) {
        this.status = 'Decreased';
      } else {
        this.status = 'No change';
      }
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
input {
  padding: 8px;
  margin-bottom: 10px;
}
</style>
