<script setup>
import Sidebar from './components/Sidebar.vue';
import MobileSidebar from './components/MobileSidebar.vue';
import { MqResponsive } from 'vue3-mq';

</script>

<template>
  <div class="app">
    <MqResponsive target="sm">
      <MobileSidebar />
    </MqResponsive>

    <MqResponsive target="md">
      <Sidebar />
    </MqResponsive>

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
  --sidebar-height: 20rem;
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
  flex-direction: column;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 36rem) {
      padding-left: 1rem;
    }
  }

  background-image: url("@/assets/image0.jpeg");
  background-size: 72% auto;
  overflow: hidden;

}

@media (min-width: 36rem) {
  .app {
    flex-direction: row;
  }
}
</style>