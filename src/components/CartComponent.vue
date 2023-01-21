<template>
  <div>
    <div id="header">
      <img id="logo" src="../assets/Blibli.webp" width="20%" height="120" />
      <p id="p">Hi {{ user.name }}</p>

      <button id="logout" @click="user_logout()" type="button">Logout</button>
    </div>


    <h1 v-if="isPlaced">Thank you your order has been placed</h1>
    <h3 v-if="isPlaced">Redirecting.....</h3>
    <div class="contain" v-for="(product, index) in getCart" :key="index">
      <div class="cart">
        <img :src="product?.images[0]" width="330px" height="450px" />
      </div>
      <div class="cart">
        <h2>{{ product?.name }}</h2>
        <p>location:{{ product?.location }}</p>
        <p>Price : {{ product?.price?.priceDisplay }}</p>
        <p>Rating: {{ product?.review?.rating }}</p>
        <p>Stock available : {{ product?.itemCount }}</p>

        <p>{{ product?.status }}</p>
        <button type="button" @click="add()">+</button>
        <p>1</p>
        <button type="button" @click="reduce()">-</button><br><br>
        <button @click="removeFromCart(product)" type="button">
          Remove Product
        </button>
      </div>
    </div>
    <footer class="site-footer">
      <button class="placeOrder" type="button" @click="placeOrder()">PLACE ORDER</button>
    </footer>
  </div>
</template>

<script src="../scripts/cartComponent.js">
</script>

<style scoped>
.placeOrder {
  position: absolute;
  border: 2px solid black;
  border-radius: 14px;
  bottom: 2px;
  right: 10px;
  height: 35px;
  width:25%;
  background-color: rgb(255, 209, 123);
}
.site-footer {

  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px; 
  background: rgb(168, 222, 249);
}
.cart {
  height: max-content;
  width: 50%;
  padding: 10px 10px 20px 0px;
  margin-bottom: 10px;
  height: 500px;
  align-content: center;
  background-color: white;
  border-radius: 8px;
}
.contain {
  display: flex;
  background-color: aliceblue;

  flex-direction: row;
  justify-content: space-around;
  padding-top: 40px;
  margin-top: 50px;
  border: 1px solid black;
}
</style>
