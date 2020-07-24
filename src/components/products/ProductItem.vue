<template>
    <li class = "product" v-on:click="editProduct($event, product.id)">
        <div class="product__content">
            <img v-bind:src="product.image" alt="" />
            {{product.label}}
        </div>
    </li>
</template>

<script>
export default {
    name: 'ProductItem',
    props: {
     product: {
      type: Object
    }
    },
    methods: {
        editProduct: function(event, id) {
            
            this.$router.push({
                name: "productDetails",
                params: { id: id }
      });

    },
    }
}
</script>

<style lang = "scss" scoped>
.product {
    background-color: greenyellow;
    &:hover {
        background-color:aqua;
    }
    .product__content {
        height: 400px;
        width: 400px;

        img {
            margin-top: 75px;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }

}




</style>