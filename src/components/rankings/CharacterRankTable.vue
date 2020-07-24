<template>
   <div class="characterTable__wrapper">
      <ul class="contentGrid__table">
        <li v-for="i in charachtersByProducts" :key="i.id">
          <div>{{i.name}}</div>
          <div>{{i.winner}}</div>
          <div>{{i.value}}/10</div>
          <router-link class="nav-link" :to="{ name: 'rankingByStatsWithCharacter', params: { categoryId:category.id, charachterId:i.id }}" >
            More..
          </router-link>
           
        </li>
        </ul>
        <div><button> Most Popular
          </button>
          <button @click="gotoStats($event, category.id)"> Sort by Ranking
            </button></div>
      </div>
</template>



<script>
export default {
name: "character-rank-table",
props: ["category"],
data(){
      return {
      charachters:[
        { id: 1, name: "Fastest", winner:"Andro Blowfish", value: 9.5  },
        { id: 2, name: "Most Spin", winner:"Andro Blowfish", value: 9.5  },
        { id: 3, name: "Most Control", winner:"Andro Blowfish" , value: 9.5 },
        { id: 4, name: "Most Deceptive", winner:"Andro Blowfish" , value: 9.5 },
        { id: 5, name: "Most Spin Reversal	", winner:"Andro Blowfish" , value: 9.5 },
        { id: 6, name: "Lightest Weight",  winner:"Andro Blowfish", value: 9.5  },
        { id: 7, name: "Hardest Sponge	", winner:"Andro Blowfish", value: 9.5  },
        { id: 8, name: "Softest Sponge", winner:"Andro Blowfish", value: 9.5  }
      ]}
},
computed:{

  productsByCategory(){     
        return this.$store.getters.getProductsByCategoryId(this.category.id); 
  },

charachtersByProducts() { 
  var newChars = this.charachters;
  console.log('1',this.productsByCategory[1])
  console.log('length',this.productsByCategory.length)
  console.log('all', this.productsByCategory)

  if ( this.productsByCategory.length<8)
  {
    console.log("less then 8")
    newChars=newChars.slice(0,this.productsByCategory.length)
  }

console.log("current", newChars.length)
  newChars.forEach( char => 
  char.winner = this.productsByCategory[char.id-1].label);

console.log('result',newChars)
return newChars;
}
},
methods:{
  gotoStats: function(event, categoryId){
  this.$router.push({ name: 'rankingByStats', params: { categoryId: categoryId}})
  }
}}
</script>

<style lang="scss">


$green: green;
$margin: 16px;

.contentGrid__table{
  display: flex;
  flex-direction: column;
  background-color:$green;

   li {
    display: flex;
    flex-direction: row;
    align-content: space-around;
    flex-wrap: nowrap;

    * {
      width: 100%;
    }
  }
}



</style>