<template>
<div class="dbcat max-xxs no-radius-xxs no-side-border-xxs">

    <div class="btn-toggle" @click="toggleItem"> {{brand.name}}
        <span class="glyphicon glyphicon-chevron-down"></span></div>

    <div class="toggle-item" v-show="toggled">
        <ul>
            <li @click="goToProduct($event,i.id)" v-for="i in productsByBrand" :key="i.id">
                {{i.label}}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: "brand-list",
    props: ['brand'],
    data() {
        return {
            toggled: false
        }
    },
    computed:{
        productsByBrand:function(){
            return this.$store.state.products.filter(i => i.brand === this.brand.id);}
    },
    methods: {
        toggleItem: function () {
            this.toggled = !this.toggled
        },
        goToProduct: function (event, id) {
            
            this.$router.push({
                name: "productDetails",
                params: {
                    id: id
                }
            });

        },
    }
}
</script>

<style lang= "scss">
.toggle-item {
    background-color: brown;

    ul {
        list-style: none;
        background-color: #BFD3DE;
        li{
            &:hover {
                cursor: pointer;
                color: red;
            }
        }
    }
}



.btn-toggle:hover {
    cursor: pointer;
    color: red;
}
</style>
