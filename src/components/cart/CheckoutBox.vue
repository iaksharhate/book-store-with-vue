<template>
    <div class="mt-16">
        <v-card outlined>
            <v-card-title>Proceed to buy items!!</v-card-title>
            <v-card-text>
                <v-btn class="white--text" color="#A03037" to="checkoutForm">
                    Checkout
                </v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

    export default{

        data() {
            return {
                
            }
        },
        methods:{
            goToCheckout(){
                console.log('Checkout Successful!!!!');
            }
        }

    }
</script>