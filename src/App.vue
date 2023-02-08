<script setup>
import Sidebar from "./components/Sidebar.vue"
</script>

<template>
  <div class="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --primary: #FFD60A;
  --grey: #FFC300;
  --dark: #000814;
  --dark-alt: #003566;
  --light: #FFD60A;
  --sidebar-width: 18.75rem;
  --transparent-dark: rgba(0, 8, 20, 0.5);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 48rem) {
      padding-left: 6rem;
    }
  }

  background-image: url("@/assets/image0.jpeg");
  background-size: contain;

  min-height: 100vh;

}
</style>