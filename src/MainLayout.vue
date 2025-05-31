<template>
  <div class="app-layout">
    <aside class="sidebar" :class="{ collapsed: isCollapsed }">
      <h2 @click="isCollapsed = !isCollapsed">
        {{ isCollapsed ? '☰' : 'P2n3' }}
      </h2>
      <nav>
        <ul>
          <li><router-link to="/">🏠 {{ isCollapsed ? '' : 'Home' }}</router-link></li>
          <li><router-link to="/declarative">📄 {{ isCollapsed ? '' : 'Declarative Rendering' }}</router-link></li>
          <li><router-link to="/attribute">🏷️ {{ isCollapsed ? '' : 'Attribute Bindings' }}</router-link></li>
          <li><router-link to="/form">📝 {{ isCollapsed ? '' : 'Form Bindings' }}</router-link></li>
          <li><router-link to="/conditional">❓ {{ isCollapsed ? '' : 'Conditional Rendering' }}</router-link></li>
          <li><router-link to="/list">📋 {{ isCollapsed ? '' : 'List Rendering' }}</router-link></li>
          <li><router-link to="/computed">🔢 {{ isCollapsed ? '' : 'Computed Property' }}</router-link></li>
          <li><router-link to="/lifecycle">🔄 {{ isCollapsed ? '' : 'Lifecycle and Template Refs' }}</router-link></li>
          <li><router-link to="/watchers">👀 {{ isCollapsed ? '' : 'Watchers' }}</router-link></li>
        </ul>
      </nav>
    </aside>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false
    }
  }
}
</script>

<style >
.app-layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-sizing: border-box;
}

.sidebar {
  width: 250px;
  background-color: #1a1a1a;
  color: white;
  padding: 1.5rem 1rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  /* position: sticky; */ /* Removed sticky to allow collapse to shrink */
  top: 0;
  height: 100vh;
  overflow-y: auto;
  transition: width 0.3s ease; /* Add transition for smooth collapse */
}

.sidebar.collapsed {
  width: 60px; /* Collapsed width */
  padding: 1.5rem 0.5rem; /* Adjust padding for collapsed state */
  align-items: center; /* Center items when collapsed */
}

.sidebar h2 {
  margin-top: 0;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  cursor: pointer; /* Indicate it's clickable */
  white-space: nowrap; /* Prevent text wrapping */
  overflow: hidden; /* Hide overflow text */
  text-overflow: ellipsis; /* Add ellipsis if text is cut off */
}

.sidebar.collapsed h2 {
  font-size: 1.8rem; /* Make the icon larger when collapsed */
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin: 0.75rem 0;
}

.sidebar a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  display: flex; /* Use flex to align icon and text */
  align-items: center;
  gap: 0.5rem; /* Space between icon and text */
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  white-space: nowrap; /* Prevent text wrapping */
  overflow: hidden; /* Hide overflow text */
  text-overflow: ellipsis; /* Add ellipsis if text is cut off */
}

.sidebar.collapsed a {
  padding: 0.5rem; /* Adjust padding for collapsed links */
  justify-content: center; /* Center icon when collapsed */
}

.sidebar a:hover,
.sidebar a.router-link-exact-active {
  background-color: #333;
  color: #747bff;
}

.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  box-sizing: border-box;
}
</style>