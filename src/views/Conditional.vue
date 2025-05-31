<template>
  <div class="component-container">
    <h1 class="title">Conditional Rendering</h1>
    <div class="example-box">
      <p>Control element visibility using <code>v-if</code>, <code>v-else-if</code>, <code>v-else</code>, and <code>v-show</code>.</p>

      <p class="demo-text">Using `v-if` / `v-else`:</p>
      <div v-if="isVisible" class="conditional-block visible-block">
        This block is rendered because `isVisible` is true.
      </div>
      <div v-else class="conditional-block hidden-block">
        This block is rendered because `isVisible` is false.
      </div>

      <p class="demo-text" style="margin-top: 15px;">Using `v-show`:</p>
      <div v-show="showWithVShow" class="conditional-block visible-block">
        This block is toggled with `v-show`. It's always in the DOM, but its CSS `display` property changes.
      </div>

      <button @click="toggleVisibility">Toggle `v-if` / `v-else`</button>
      <button @click="toggleVShow" style="margin-left: 10px;">Toggle `v-show`</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      showWithVShow: true
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    toggleVShow() {
      this.showWithVShow = !this.showWithVShow;
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
.conditional-block {
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
  text-align: center;
}
.visible-block {
  background-color: #e6ffe6;
  border: 1px solid #42b983;
  color: #42b983;
}
.hidden-block {
  background-color: #ffe6e6;
  border: 1px solid #d9534f;
  color: #d9534f;
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