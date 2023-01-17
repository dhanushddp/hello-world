<template>
  <div>
    <div id="header" style="text-align: left">
      <img
        id="logo"
        src="https://www.static-src.com/siva/asset//10_2022/Blibli.png"
        width="30%"
        height="100px"
      />
      <input size="75" type="text" name="products" id="search" />
      <button @click="searchbox" type="button" id="search_button">
        <!-- <img src="search.png" width="25px" /> -->
        search
      </button>
      <nav id="navigation">
        <a href="#">LOGIN</a>&nbsp;&nbsp;&nbsp;
        <a id="signup" href="/Home.html">SIGN UP</a>
      </nav>
    </div>
    <div class="grid-container">
      <div class="grid-item">
        <img
          src="https://cdn2.hubspot.net/hubfs/4567260/1_vFFalkreTFmQiDSdKX0lhg.png"
          width="100%"
          height="150px"
        />
        <h1>Filter</h1>
        <form>
        <label>Brand:</label><br>
        <input v-model="searchitem.brand" type="text"/><br>
        <label>Model:</label><br>
        <input v-model="searchitem.model" type="text"/><br>
        <label>RAM:</label><br>
        <input v-model="searchitem.ram" type="text"/><br>
        <label>Memory:</label><br>
        <input v-model="searchitem.memory" type="text"/><br>
        <label>Price:</label><br>
        <input v-model="searchitem.price" type="number"/><br>
        <button  @click="update()" type="button">Submit</button>
    </form>
      </div>
      <div style="text-align: center">
        <div class="table1">
          <div class="table2" v-for="(pro, index) in fil_list" :key="index">
            <img :src="pro.image" width="110px" height="150px" />
            <h3>Brand Name : {{ pro.brand }}</h3>
            <h2>Model : {{ pro.model }}</h2>
            <p>Ram : {{ pro.ram }} {{ pro.memory }}</p>
            <p>Rating : {{ pro.rating }}</p>
            <p>Price : Rs.{{ pro.price }}</p>
            <p :class="pro.stock < 10 ? 'red' : 'grey'">
              Stock : {{ pro.stock }}
            </p>
            <button @click="added(pro)" :disabled="pro.stock <= 0" class="add">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script src="/Users/dhanushpraveen/hello-world/src/assets/info.js">
</script>

<style scoped>
#header {
  position: sticky;
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
  left: 150px;
}

#navigation {
  text-align: right;
  padding-bottom: 10px;
  padding-right: 10px;
}

#search {
  position: relative;
  left: 200px;
  bottom: 30px;
  border-radius: 10px;
  height: 30px;
}

#search_button {
  position: relative;
  left: 210px;
  bottom: 23px;
}

a {
  text-decoration: none;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 3px 3px 3px 3px;
  font-size: 22px;
}
a:hover {
  background-color: black;
}

.filter {
  height: 100%;
}
.table1 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
.table2 {
  height: max-content;
  width: 300px;
  padding: 10px 0px 10px 0px;
  margin-bottom: 10px;

  margin-top: 20px;
  background-color: antiquewhite;
  border: 2px solid black;
  box-shadow: 10px 10px;
  border-radius: 8px;
}

.grey {
  color: grey;
}

.red {
  color: red;
}
.grid-container {
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-auto-rows: max-content;
  grid-gap: 1px;
}
.grid-item {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 20px;
  text-align:left;
}
.add:hover{
    border:2px solid blueviolet;
    color: red;
}
</style>