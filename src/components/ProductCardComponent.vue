<template>
  <div class="productCard">
    <div class="table2">
      <img :src="productobj.images[0]" @click="showDescription()" width="110px" height="150px" />

      <h2>{{ productobj.name }}</h2>
      <p>Loaction :{{ productobj.location }}</p>
      <p>Price :{{ (productobj?.price?.priceDisplay).split(' ')[0]}}</p>

      <p>Rating:{{ productobj.review?.rating }}</p>
      <p :class="productobj.itemCount < 10 ? 'red' : 'grey'">
        Stock : {{ productobj.itemCount }}
      </p>

      <button
        @click="added(productobj)"
        :disabled="productobj.itemCount <= 0"
        class="add"
      >
        Add to cart
      </button>
      <p>{{ productobj.status }}</p>
    </div>
  </div>
</template>

<script src="../scripts/ProductCardComponent.js">
</script>


<style scoped>
.table2 {
  width: 300px;
  padding: 30px 10px 20px 0px;
  margin-bottom: 10px;
  height: 600px;
  background-color: rgb(179, 230, 255);
  border: 2px solid black;
  box-shadow: 10px 10px;
  border-radius: 8px;
}
.add {
  font-size: 20px;
  width: 80%;
  border-radius: 10px;
  background-color: orange;
}
@media screen and (max-width: 429px) {
  .table2 {
    margin-left: 50%;
    width: 300px;
    padding: 10px 10px 20px 0px;
    margin-bottom: 10px;
    height: 600px;
    background-color: rgb(179, 230, 255);
    border: 2px solid black;
    box-shadow: 10px 10px;
    border-radius: 8px;
  }
}
@media screen and (max-width: 375px) {
  .table2 {
    margin-left: 40%;
    width: 300px;
    padding: 10px 10px 20px 0px;
    margin-bottom: 10px;
    height: 600px;
    background-color: rgb(179, 230, 255);
    border: 2px solid black;
    box-shadow: 10px 10px;
    border-radius: 8px;
  }
}
@media screen and (max-width: 349px) {
  .table2 {
    margin-left: 40%;
    width: 270px;
    padding: 10px 10px 20px 0px;
    margin-bottom: 10px;
    height: 600px;
    background-color: rgb(179, 230, 255);
    border: 2px solid black;
    box-shadow: 10px 10px;
    border-radius: 8px;
  }
}
</style>