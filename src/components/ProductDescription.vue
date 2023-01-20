<template>
  <div class="desc">

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