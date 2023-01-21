<template>
    <div id="image">
        <img src="../assets/Bliblimart_logo.webp" width="25%" height="5%"/><br><br>
    <div class="container">
        
         <div class="box">
               <h3 id="head">Login</h3>
               <label><b>Userid</b> </label>
               <input v-model="users.name" class="input" type="text"/><br>
               <label><b>Password</b> </label>
               <input v-model="users.pass" class="input"  type="password"/><br><br>
               <div class="signup">
               <button class="guest" type="button"><b>REGISTER</b></button>
               <button  @click="loginCheck" class="login" type="button"><b>LOGIN</b></button>
            </div>
         </div>
    </div>
    </div>

</template>

<script src="../scripts/LoginPage.js">
</script>

<style scoped>
@import '../CSS/LoginPage.css'
</style>
