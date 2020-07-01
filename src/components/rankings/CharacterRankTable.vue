<template>
   <div class="characterTable__wrapper">
      <ul class="contentGrid__table">
        <li v-for="i in charachters" :key="i.id">
          <div>{{i.name}}</div>
          <div>{{i.winner}}</div>
          <div>{{i.value}}/10</div>
          <a href="">more...</a>
        </li>
        </ul>
        <div><button> Most Popular
          </button>
          <button> Sort by Ranking
            </button></div>
      </div>
</template>

<script>
export default {
name: "character-name-table",
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
}}
</script>

<style>


.contentGrid__table{
  display: flex;
  flex-direction: column;
  background-color:cadetblue;
}

.contentGrid__table > li {
  display: flex;
  flex-direction: row;
  align-content: space-around;
  flex-wrap: nowrap;
}

.contentGrid__table > li > *{
  width: 40%;
}
</style>