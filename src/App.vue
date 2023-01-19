<template>
  <div id="app">
    <router-view></router-view>

    <!-- <PersonalInfo :name="user.name" v-else></PersonalInfo> -->
  </div>
</template>
<!-- @loggedin="login" -->

<script>
import { mapGetters } from "vuex";
// import PersonalInfo from "./components/PersonalInfo.vue";

// import LoginPage from "./components/LoginPage.vue";

export default {
  name: "App",
  components: {
    // PersonalInfo,
    // LoginPage,
  },
  data() {
    return {
      checklogin: false,
    };
  },
  created() {},
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    // login(value){
    //   this.checklogin=value;
    // },
    // val(value){
    //   this.user=value;
    //   console.log(this.user)
    // }
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
