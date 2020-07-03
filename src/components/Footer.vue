<template><footer><div >

  <div class="footerWrapper" >© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>

</div>
          </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>

footer{
  grid-area: footer;
  height: 50px;
}

.footerWrapper{
  display: flex;
  position:sticky;
  background-color: rgb(41, 38, 38);
  flex-direction: row;
  justify-content: center;
  list-style: none;
  
}

.footerWrapper  >a {
  color: gold;
}

.footerWrapper > li > a:hover {
  cursor: pointer;
  color:  red;
}



</style>

