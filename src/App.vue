<template>
  <div id="app">
              <Header />
              
    <div class="app_wrapper">

      <nav>
        <div class="well">
          <div class="google-translate-sidebar__title">
            <img
              src="/images/layout/language-icon.png"
              class="google-translate-sidebar-icon"
            />
            Translate
          </div>
        </div>
      </nav>
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
//import Navbar from './components/Navbar'

export default {
  name: "App",
  components: {
    Header,
    Footer,
    // Navbar
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: #fff;
}

.well {
  margin: 10px 0;
  background-color: #eee;
  padding: 15px 15px;
  border-radius: 8px;
}

.google-translate-sidebar__title {
  font-weight: bold;
  font-size: 19px;
  text-align: left;
  padding-left: 8px;
}

.app_wrapper {
  display: grid;
  height: 100%;
  grid-template-areas: "header header" "nav content" "footer footer ";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 50px auto 50px;
  background-color: #fff;
}



footer {
  grid-area: footer;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(red),
    to(white)
  );
  padding: 5px;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  width: 100%;
  display: inline-block;
  box-shadow: 1px 1px 3px #292929;
  color: #454545;
  text-shadow: 0 1px 0 white;
}


nav {
  background-color: #fff;
  grid-area: nav;
  min-height: 500px;
}

main {
  grid-area: content;
  background-color: #fdf4e3;
}

aside {
  grid-area: side;
  margin-right: 0.5rem;
}


</style>
