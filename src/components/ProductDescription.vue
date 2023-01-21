<template>
  <div class="desc">
    <div id="header">
      <img id="logo" src="../assets/Blibli.webp" width="20%" height="120" />
    </div>
    <div class="contain">
      <div class="table2">
        <img :src="proDesc.images[0]" width="330px" height="450px" />
      </div>
      <div class="table2">
        <h2>{{ proDesc.name }}</h2>
        <p>location:{{ proDesc.location }}</p>
        <p>Price :{{ proDesc.price.priceDisplay }}</p>
        <p>Rating: {{ proDesc.review?.rating }}</p>
        <p>Stock available : {{ proDesc.itemCount }}</p>

        <p>{{ proDesc.status }}</p>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/ProductDescription.js">
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