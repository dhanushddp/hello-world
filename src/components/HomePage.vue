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
      <!-- <button type="button" id="search_button" @click="callApi">search</button> -->
      <button type="button" id="search_button">search</button>
      <button type="button" class="cartButton" @click="shoppingCart()"><i class="fa fa-cart-plus fa-lg" style=" color: black;margin: auto;"></i></button>

      <p id="p">Hi {{ loggedin }}</p>
      <button id="logout" @click="user_logout()" type="button">Logout</button>
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
          <p v-if="errorOccured">Error Occured</p>
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


<script src="../scripts/HomePage.js">
</script>

<style scoped>
@import "../CSS/PersonalInfo.css";
</style>