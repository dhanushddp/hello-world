

<template>
  <div>
    <div id="header" style="text-align: left">
      <img
        id="logo"
        src="https://www.static-src.com/siva/asset//10_2022/Blibli.png"
        width="27%"
        height="120px"
      />
      <input
        v-model="search"
        size="75"
        type="text"
        name="products"
        id="search"

      />
      <button type="button" id="search_button" @click="callApi">
        <!-- <img src="search.png" width="25px" /> -->
        search
      </button>
      <p id="p">Hi {{ loggedin }}</p>
      <button id="logout" @click="user_logout()" type="button">Logout</button>

      <!-- <button @click="samplePutCall()" id="logout" type="button">put button</button> -->
      <!-- <nav id="navigation">
        <a href="#">LOGIN</a>&nbsp;&nbsp;&nbsp;
        <a id="signup" href="/Home.html">SIGN UP</a>
      </nav> -->
    </div>
    <div class="grid-container">
      <div class="grid-item">
        <h1>Filter</h1>
        <form>
          <label>name:</label><br />
          <input class="res" v-model="searchitem.name" type="text" /><br />
          <label>Model:</label><br />
          <input class="res" v-model="searchitem.model" type="text" /><br />
          <label>RAM:</label><br />
          <input class="res" v-model="searchitem.ram" type="text" /><br />
          <label>Memory:</label><br />
          <input class="res" v-model="searchitem.memory" type="text" /><br />
          <label>Price:</label><br />
          <input class="res" v-model="searchitem.price" type="number" /><br />
          <button @click="update()" type="button">Submit</button>
          <button @click="samplePostCall()" type="button">post button</button>
          <button @click="sampleDelCall()" type="button">Delete button</button>




        </form>
      </div>
      <div style="text-align: center">
        <div class="table1">
          <!-- <div class="table2" v-for="(pro, index) in fil_list" :key="index">
            <img :src="pro.image" width="110px" height="150px" />
            <h2>name Name : {{ pro.name }}</h2>
            <h3>Model : {{ pro.model }}</h3>
            <p>Ram : {{ pro.ram }} {{ pro.memory }}</p>
            <p>Rating : {{ pro.rating }}</p>
            <p>Price : Rs.{{ pro.price }}</p>
            <p :class="pro.stock < 10 ? 'red' : 'grey'">
              Stock : {{ pro.stock }}
            </p>
            <button @click="added(pro)" :disabled="pro.stock <= 0" class="add">
              Add to cart
            </button>
          </div> -->
          <ProductCardComponent
            v-for="(order, index) in fil_list"
            :key="index"
            :productobj="order"
            >hi
          </ProductCardComponent>
        </div>
      </div>
    </div>
  </div>
</template>


<script src="/Users/dhanushpraveen/hello-world/src/PersonalInfo.js">
</script>

<style scoped>
@import "../CSS/PersonalInfo.css";
</style>