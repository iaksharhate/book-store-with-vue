<template>
    <v-card outlined>
        <v-img :src = "product.bookImg"
            width="250"
            height="200px"
            contain
        />
        <v-card-title>{{ product.bookName }}</v-card-title>
        <v-card-subtitle>By:{{ product.authorName }}</v-card-subtitle>
        <v-card-subtitle>₹{{ product.price }}</v-card-subtitle>
        <v-card-actions>
            <v-btn color="#A03037" outlined @click="addToCart(product.bookId)">
                <v-icon left>mdi-plus</v-icon>
                Add to Cart
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import CartService from '../../service/CartService'


    export default{
        props: {
            product: Object
        },
        data() {
            return {
                bookData: [],
                bookQuantity: 1
            }
        },
        methods: {
            addToCart(bookId){
                console.log(bookId);
                let cartDTO = {
                    bookId: bookId,
                    quantity: this.bookQuantity
                }
                console.log(cartDTO);
                CartService.addToCart(cartDTO).then((response) => {
                    console.log(response);
                    console.log(response.data.data);
                    this.CartItems = response.data.data
                    console.log(this.CartItems);
                })
                .catch((error) => {
                    console.log(error);
                    alert("WARNING!! Error while adding the Cart!");
                })
            }
        },
    }
</script>