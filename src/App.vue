<template>
  <div id="app">
    <PersonalInfo></PersonalInfo>
  </div>
</template>

<script>
import PersonalInfo from "./components/PersonalInfo.vue";

export default {
  name: "App",
  components: {
    PersonalInfo,
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
