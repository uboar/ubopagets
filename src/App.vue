<script setup lang="ts">
import 'animate.css'
import navbar from "./components/navbar.vue"
import store from './scripts/store';

</script>

<template>
  <div id="app" :data-theme="store.state.currentTheme" class="h-screen">
    <div class="back fixed h-full w-screen z-0">
    </div>
    <div class="z-50 w-full absolute">
      <navbar></navbar>
      <router-view class="flex-grow"></router-view>
    </div>
  </div>
</template>

<style>

.back {
  background-color: theme('colors.base-100');
  background-image: radial-gradient(theme('colors.base-100') 20%, transparent 0), radial-gradient(theme('colors.base-200') 20%, transparent 0);
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
}

.logo-font {
  font-family: 'Montserrat', sans-serif;
}

#app {
  font-family: 'Kosugi', sans-serif;
}

.fade {
  opacity: 0;
  animation: fadeIn 0.3s ease 0.2s 1 forwards;
}

@keyframes fadeIn {
  0%{
    opacity: 0;
     transform: translateY(20px);
  }
  100% {
    opacity: 1;
     transform: translateY(0);
  }
}
</style>
