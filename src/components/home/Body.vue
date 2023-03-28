<template>
    <v-container mb-12>
        <v-row>
            <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
                <h2>Books <v-btn to="store" color="primary" small text>View All</v-btn></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
                <v-row>
                    <v-col
                        sm="6"
                        md="4"
                        v-for="product in bookData"
                        :key="product.name"
                    >
                        <VerticalProduct :product ="product" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import VerticalProduct from "../card/VerticalProduct.vue";
    import BookService from "../../service/BookService";

    export default {
        name: "Body",    
        components: {
            VerticalProduct
        },
        data() {
            return {
                bookData: []
            };
        },
        methods:{
            getAllBooks(){
                BookService.getAllBooks().then((response) => {
                    this.bookData = response.data.data
                });
            },
            
        },
        created() {
            this.getAllBooks();
        },
    }
</script>