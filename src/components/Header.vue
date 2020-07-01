<template>
 <header>
      <div class="navbarHeader">
          <ul class="navigationWrapper">
                  <li class="nav-item ">
                    <router-link to="/products" class="nav-link"
                      >Товары</router-link
                    >
                  </li>
                  <li class="nav-item ">
                    <router-link class="nav-link" to="/rankings"
                      >Рейтинг инвентаря</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/"> Домой</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/bar">Baz</router-link>
                  </li>
                </ul>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>


.navbarHeader {
    background-color: blue;
  
}

.navigationWrapper{
  display: flex;
  position:sticky;
  background-color: rgb(41, 38, 38);
  flex-direction: row;
  justify-content: center;
  list-style: none;
  
}

.navigationWrapper > li >a {
  color: gold;
}

.navigationWrapper > li > a:hover {
  cursor: pointer;
  color:  red;
}

header {
  width: 100%;
  height: 50px;
  position: fixed
}


</style>

