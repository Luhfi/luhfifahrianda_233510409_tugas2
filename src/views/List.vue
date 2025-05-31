<template>
  <div class="component-container">
    <h1 class="title">List Rendering</h1>
    <div class="example-box">
      <p>Render lists of items using <code>v-for</code>:</p>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ index + 1 }}. {{ item }}
        </li>
      </ul>
      <input v-model="newItem" placeholder="Add item" />
      <button @click="addItem">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Learn Vue', 'Practice daily', 'Build projects'],
      newItem: ''
    }
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.items.push(this.newItem.trim());
        this.newItem = '';
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
ul {
  margin-bottom: 10px;
}
input {
  padding: 8px;
  margin-right: 10px;
}
button {
  padding: 8px 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
