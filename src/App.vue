<template >
  <div id="app">
    <Header />
    <div class="app_wrapper">
      <nav>
        <div class="well">
          <div class="google-translate-sidebar__title">
            <img src="/images/layout/language-icon.png" class="google-translate-sidebar-icon" />
            <p>Translate</p>
          </div>
        </div>
      </nav>
      <main>
        <router-view></router-view>
      </main>

    </div>
         <Footer />
  
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
    Footer
    // Navbar
  }
};
</script>

<style>

html, body {
  height: 100%;
  margin: 0;
  background-color: white;
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
  grid-template-areas: "header header" "nav content" ;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 50px auto ;
  background-color: #fff;

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
