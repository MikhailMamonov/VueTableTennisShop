<template>
  <ul class="sidebar__nav">
    <li>
          <router-link to="/products"> Товары</router-link>
  </li>
      <!-- Dropdown menu -->
        <li class="nav-item">
            <router-link to="/rankings">Рейтинг инвентаря</router-link>
          
    </li>
    
    <li>
          <router-link to="/"> Домой</router-link>
  </li>
    <li>
    <router-link to="/bar">Bar</router-link>
    </li>
    <li>
          <router-link to="/foo"> Foo</router-link>
  </li>
    <li>
    <router-link to="/bar">Baz</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

        <style lang="scss">
.sidebar__nav {
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #000;
  height: 700px;
  position: sticky;
  top: 80px;
  li {
  text-indent: 20px;
  line-height: 40px;
    a {
    display: block;
    text-decoration: none;
    color: #999999;
    &:hover {
      text-decoration: none;
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
      }
    &:active {
      text-decoration: none;
    }
    &:focus {
      text-decoration: none;
      }
    }
  }
}

</style>  