<template>
  <div class="desc">
    <div class="head">
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
      <button type="button" id="search_button">search</button>
      <button id="logout" type="button">Logout</button>
    </div>
    <div class="contain">
      <div class="table2">
        <img :src="getValue().images" width="330px" height="450px" />
      </div>
      <div class="table2">
        <h2>{{ getValue().name }}</h2>
        <p>location:{{ getValue().location }}</p>
        <p>Price : Rs.{{ getValue().price.priceDisplay }}</p>
        <p>Rating: {{ getValue().review?.rating }}</p>
        <p>Stock available : {{ getValue().itemCount }}</p>

        <p>{{ getValue().status }}</p>
      </div>
    </div>
  </div>
</template>

<script src="../ProductDescription.js">
</script>

<style scoped>
.table2 {
  height: max-content;
  width: 50%;
  padding: 10px 10px 20px 0px;
  margin-bottom: 10px;
  height: 500px;
  align-content: center;
  background-color: white;
  box-shadow: 10px 10px;
  border-radius: 8px;
}
.contain {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 40px;
  margin-top: 50px;
  border: 1px solid black;
}
.head {
  position: sticky;
  text-align: left;
  top: 0;
  border: 2px rgba(0, 148, 217, 255);
  margin: -10px -10px -10px -10px;
  overflow: auto;
  z-index: 10;

  /* padding-bottom: -300px; */

  background-color: rgba(0, 148, 217, 255);
}

#logo {
  position: relative;
  top: 20px;
  left: 50px;
}

#search {
  position: relative;
  left: 60px;
  bottom: 30px;
  border-radius: 10px;
  height: 30px;
}

#search_button {
  position: relative;
  left: 70px;
  bottom: 23px;
}
</style>