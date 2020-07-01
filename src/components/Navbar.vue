<template>
  <ul class="sidebar__nav">
    <li>
          <router-link to="/products"> Товары</router-link>
  </li>
    <li>
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

        <style>
.sidebar__nav {
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #000;
  height: 700px;
  position: sticky;
  top: 80px;
}

.sidebar__nav li {
  text-indent: 20px;
  line-height: 40px;
}

.sidebar__nav li a {
  display: block;
  text-decoration: none;
  color: #999999;
}

.sidebar__nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}

.sidebar__nav li a:active,
.sidebar__nav li a:focus {
  text-decoration: none;
}
</style>  