<template>
  <div>
    <div id="header">
      <img id="logo" src="../assets/Blibli.webp" width="20%" height="120" />

      <button id="logout" @click="user_logout()" type="button">Logout</button>
    </div>
    <div class="cartPaymentContainer">
      <h1 v-if="!getCart.length && !isPlaced" style="text-align: center">
        Your Cart is Empty
      </h1>
      <pre v-if="isPlaced" style="font-size: 30px">
        Thank you your order has been placed
         Redirecting......
      </pre>
      <div style="flex: 0.75">
        <div class="contain" v-for="(product, index) in getCart" :key="index">
          <div class="cart">
            <img :src="product?.images[0]" width="330px" height="450px" />
          </div>
          <div class="cart">
            <h2>{{ product?.name }}</h2>
            <p>location:{{ product?.location }}</p>
            <p>Price :{{ (product?.price?.priceDisplay).split(" ")[0] }}</p>
            <p>Rating: {{ product?.review?.rating }}</p>
            <p>Badge :{{ product?.badge?.merchantBadge }}</p>

            <p>{{ product?.status }}</p>
            <p>
              <button type="button" @click="add(product)">+</button>
              {{ product.quantity }}
              <button type="button" @click="reduce(product)">-</button>
            </p>
            <br /><br />
            <button @click="removeFromCart(product)" type="button">
              Remove Product
            </button>
          </div>
        </div>
      </div>
      <div class="checkout">
        <div class="checkoutgrid">
          <h2>CHECKOUT</h2>
          <label style="text-align: left">Card holder Name</label><br />
          <input placeholder="xyz" class="cardName" type="text" /><br />
          <br /><label style="text-align: left">Card Number</label><br />
          <input
            placeholder="XXXX XXXX XXXX XXXX"
            class="cardName"
            type="text"
          /><br /><br /><br />

          <div class="cvv">
            <input placeholder="CVV" class="cardName1" type="text" />
            <input placeholder="MM/YYYY" class="cardName1" type="text" />
            <p></p>
          </div>
          <br /><br />
          <hr />
          <br />
          <div class="checkOut_footer">
            <div>
              <b>Total : Rp {{ totalCartPrice }} </b>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="site-footer">
      <button class="placeOrder" type="button" @click="placeOrder()">
        PLACE ORDER
      </button>
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
  width: 25%;
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
  width: auto;
  flex: 0.75;
  height: max-content;
  margin-bottom: 10px;
  align-content: flex-start;
  background-color: white;
  border-radius: 8px;
}
.contain {
  display: flex;
  width: auto;
  background-color: aliceblue;
  flex-wrap: wrap;

  flex-direction: row;
  padding-top: 40px;
  border: 1px solid black;
}
.cartPaymentContainer {
  display: flex;
  border-collapse: collapse;
  margin-top: 30px;
  grid-gap: 10px;
}
.checkout {
  border: 2px solid black;
  flex: 0.25;
  min-height: 500px;
  max-height: 505px;
  background-color: rgba(219, 215, 215, 0.836);
}
.checkoutgrid {
  margin: 5px 15px 5px 15px;
}
.cardName {
  width: 100%;
  height: 30px;
}
.cardName1 {
  width: 45%;
  height: 30px;
}

.cvv {
  display: flex;
  justify-content: space-between;
  align-content: flex-end;
}
.checkOut_footer {
  text-align: right;
  font-size: 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
