<template>
    <v-card 
        outlined 
        min-width="100%"
        class="mb-5 pa-4"
    >
        <div class="d-flex">
            <div>
                <v-img
                    :src="product.book.bookImg"
                    width="110px"
                    height="150px"
                />
            </div>
            <div class="d-flex flex-column justify-center">
                <v-card-title class="pt-0">
                    {{product.book.bookName}}
                </v-card-title>
                <v-card-subtitle class="pt-4">
                    <div>
                        <p>
                            <v-btn class="mr-4" :disabled="product.quantity <= 1" color="#A03037"
                                    small @click="decrement(product.cart_ID, product.quantity)">
                                <v-icon color="white" small>mdi-minus</v-icon>
                            </v-btn>                          
                            {{   product.quantity   }}
                            <v-btn class="ml-4" color="#A03037" small @click="increment(product.cart_ID, product.quantity)">
                                <v-icon color="white" small>mdi-plus</v-icon>
                            </v-btn>
                        </p>
                    </div>
                </v-card-subtitle>
                <v-card-text>
                    Total Price : {{product.totalPrice}}
                </v-card-text>
                <v-btn 
                    color="error"
                    class="ml-4"
                    outlined
                    small
                    @click="removeItem(product.cart_ID)"
                >
                    <v-icon left>mdi-minus</v-icon>
                    Remove from Cart
                </v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>
import CartService from '@/service/CartService';

    export default{
        props: {
            product: Object,
            updateCart: Function,
            btnAction: String
        },
        data() {
            return {
                cartData: []
            }
        },
        methods: {
            displayMessage() {
                console.log("Cart is here");
            },
            removeItem(cartID){
                console.log(cartID);
                var ans = window.confirm('Item will be removed from cart!!');
                if (ans) {
                    CartService.deleteCartItem(cartID).then((data) => {
                        alert('Cart item removed successfully!!');
                        window.location.reload()
                    })
                    .catch((error) => {
                        console.log(error);
                        alert('Something went wrong!!');
                    });
                } else {
                    alert('Item does not removed!!');
                }
            },
            increment(cart_id, book_quantity){
                console.log(cart_id);
                this.counter = book_quantity;
                this.counter++;
                console.log(this.counter);
                let cartDTO = {
                    quantity: this.counter
                }
                CartService.updateBookQty(cart_id, cartDTO).then((response) => {
                    console.log(response.data.data);
                    this.CartItems = response.data.data
                    window,location.reload();
                    console.log(this.CartItems);
                    console.log('Quantity updated for the book!');
                })
                .catch((error) => {
                    console.log(error);
                    alert("WARNING!!! Error while updating quantity!");
                });
            },
            decrement(cart_id, book_quantity){
                console.log(cart_id);
                this.counter = book_quantity;
                this.counter--;
                console.log(this.counter);
                let cartDTO = {
                    quantity: this.counter
                }
                CartService.updateBookQty(cart_id, cartDTO).then((response) => {
                    console.log(response.data.data);
                    this.CartItems = response.data.data
                    window,location.reload();
                    console.log(this.CartItems);
                    console.log('Quantity updated for the book!');
                })
                .catch((error) => {
                    console.log(error);
                    alert("WARNING!!! Error while updating quantity!");
                });
            }
        },
        created(){
            this.displayMessage();
        }
    }
</script>