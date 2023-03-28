<template>
    <div>
        <Header />
        <v-container>            
            <v-row>
                <v-col lg="4" offset-lg="3">
                    <ProductList />
                </v-col>
                <v-col >
                    <CheckoutBox />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import Header from '../components/home/Header'
    import CheckoutBox from '../components/cart/CheckoutBox'
    import ProductList from '../components/cart/ProductList'

    export default{

        name:'Cart',
        components:{
            ProductList,
            CheckoutBox,
            Header
        }

    }
</script>