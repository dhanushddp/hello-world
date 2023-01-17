<template>
  <div id="header">
    <img id="logo" src="/Blibli.png" width="20%" height="90" />
    <input size="75" type="text" name="products" id="search" />
    <button type="button" id="search_button">
      <img src="search.png" width="25px" />
    </button>
    <nav id="navigation">
      <a href="#">LOGIN</a>&nbsp;&nbsp;&nbsp;
      <a id="signup" href="/Home.html">SIGN UP</a>
    </nav>
  </div>
</template>


<script>
function searchbox() {
  var pro = document.getElementById("search").value;
  window.alert("You have searched " + pro);
}

document.getElementById("search_button").addEventListener("click", searchbox);
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
</style>