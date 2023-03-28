<template>
    <div>
        <h2 class="mt-5 mb-5">Cart Items</h2>
        <v-row
            v-for="product in cartData"
            :key="product.name"
        >
            <HorizontalProduct 
                :product="product"
                btnAction="removeFromCart"
            />
        </v-row>
        <v-row>
            <v-btn color="error" >
                REMOVE ALL
            </v-btn>
        </v-row>
    </div>
</template>

<script>
import HorizontalProduct from '../card/HorizontalProduct'
import CartService from '@/service/CartService';

    export default{
        props: {
            product: Object
        },
        components: { 
            HorizontalProduct 
        },
        data() {
            return {
                cartData: [],
                
            };
        },
        methods: {

            getCartData(){
                CartService.getCart().then((response) => {
                console.log(response.data.data);
                this.cartData = response.data.data
                });
            },
        },
        created(){
            this.getCartData();
        }
    }
</script>