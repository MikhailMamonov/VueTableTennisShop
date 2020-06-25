<template>
<div id ="app">
     <div class ="parallax">
  <div class="parallax__group">
    <div class="parallax__layer classes.parallax__layer__back" >
      <div class = "parallax__background"/>
    </div>
    <div class="parallax__layer parallax__layer__base">
    <div class="container">
  <header>
  <Header/>
  </header>

  <nav class = "main__nav">
  <Navbar/>
  </nav>

  <main>
     <router-view></router-view>
  </main>

  <aside>
  </aside>
  <Footer/>
</div>
    </div>
  </div>
  <div class="parallax__group">
    ...
  </div>
</div>
</div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'



export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Navbar
  }
}
</script>

<style>
.container {
    display: grid;
    height: 100%;
    grid-template-areas: "header header header" "nav content side" "footer footer footer";
    grid-template-columns: 250px 1fr 240px;
    grid-template-rows: auto 1fr auto;
}

header {
    grid-area: header;
    justify-content: center;
    position: sticky;
    display: inline-block;
    top: 0;
}

.main__nav {
    background: #000;
    grid-area: nav;
    display: grid;
    position: sticky;

}

main {
    grid-area: content;
    background-color: #FDF4E3;
}

aside {
    grid-area: side;
    margin-right: 0.5rem;
}

.parallax {
    perspective: 1px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    /* background-color: #1FE37D; */
    background: url(https://i.pinimg.com/originals/e3/1d/19/e31d19366d2c400560de49f26e7e7438.jpg) 100% 100% no-repeat;
    /* Добавляем фон */
    /* Full height */
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.parallax__layer {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
}

.parallax__layer__base {
    transform: translateZ(0);
}

.parallax__layer__back {
    transform: translateZ(-1px);
}
</style>
