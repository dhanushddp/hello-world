<template>
  <div class="productCard" @click="showDescription()">
    <!-- <img :src="pro.image" width="110px" height="150px" /> -->
    <div class="table2">
      <img :src="productobj.images" width="110px" height="150px" />

            <h2>{{ productobj.name }}</h2>
            <p>Loaction :{{productobj.location }}</p>
            <p>Price :{{productobj.price.priceDisplay}}</p>
            
            <p>Rating:{{productobj.review?.rating }}</p>
            <p :class="productobj.itemCount < 10 ? 'red' : 'grey'">
              Stock : {{ productobj.itemCount }}
            </p>

            <button @click="added(productobj)" :disabled="productobj.itemCount <= 0" class="add">
              Add to cart
            </button>
            <p>{{ productobj.status }}</p>
          </div>
          </div>
</template>

<script src="../ProductCardComponent.js">


</script>


<style scoped>

.table2{
    width: 300px;
    padding: 10px 10px 20px 0px;
    margin-bottom: 10px;
    height:600px;
    background-color: antiquewhite;
    border: 2px solid black;
    box-shadow: 10px 10px;
    border-radius: 8px;
}
.add{
  font-size: 20px;
  width:80%;
  border-radius:10px;
  background-color: orange;
}
</style>