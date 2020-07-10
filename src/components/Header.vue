<template>
 <header>
      <div class="navbarHeader">
          <ul class="navbarHeader__ul">
                  <li class="navbarHeader__ul__li ">
                    <router-link to="/products" class="nav-link"
                      >Товары</router-link
                    >
                  </li>
                  <li class="navbarHeader__ul__li navDropdown ">
                                            <router-link class="nav-link" to="/rankings" >
                      Рейтинг инвентаря
                      </router-link>
                    <ul class ="dropdown-content">
                      <li>          
                        <router-link class="nav-link" to="/rankings" >
                        Основания
                      </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to="/rankings" >
                      Накладки
                      </router-link>
                      </li>
                      <li>
                         <router-link class="nav-link" to="/rankings" >
                      Обувь
                      </router-link>
                      </li>
                      <li>
                         <router-link class="nav-link" to="/rankings" >
                      Столы
                      </router-link>
                      </li>
                    </ul>
                    
                  </li>
                  <li class="navbarHeader__ul__li">
                    <router-link class="nav-link" to="/"> Домой</router-link>
                  </li>
                  <li class="navbarHeader__ul__li">
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


header {
  width: 100%;
  height: 50px;
  position: fixed
}


.navbarHeader__ul{
  display: flex;
  position:sticky;
   flex-direction: row;
  padding: 5px;
  justify-content: center;
  list-style: none;
  margin: 0;
  height: 80px;
  width: 100%;
  margin: auto;
  
}

.navbarHeader__ul,
.dropdown-content
{
 background: linear-gradient(to bottom,
   rgba(76,76,76,1) 0%,rgba(89,89,89,1)
    12%,rgba(102,102,102,1) 25%,rgba(71,71,71,1)
     39%,rgba(44,44,44,1) 50%,rgba(0,0,0,1)
      51%,rgba(17,17,17,1) 60%,rgba(43,43,43,1) 
      76%,rgba(28,28,28,1) 91%,rgba(19,19,19,1)
       100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313',GradientType=0 ); /* IE6-9 */
}

.navbarHeader__ul__li{
float: left;

}



.navbarHeader__ul__li >a {
background-repeat: no-repeat;
background-position: right;
padding-right: 32px;
padding-left: 32px;
display: block;
line-height: 80px;
text-decoration: none;
font-family: Georgia, "Times New Roman", Times, serif;
font-size: 21px;
color: yellow;
}

.dropdown-content>li>a{
  background-repeat: no-repeat;
background-position: right;
padding-right: 10px;
padding-left: 10px;
display: block;
line-height: 80px;
text-decoration: none;
font-family: Georgia, "Times New Roman", Times, serif;
font-size: 20px;
color: yellow;
}

.dropdown-content>li>a:hover,
.navbarHeader__ul__li > a:hover {
  cursor: pointer;
  color:  white;
}


.navDropdown{
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.navDropdown:hover .dropdown-content {
  display: block;
}

</style>

