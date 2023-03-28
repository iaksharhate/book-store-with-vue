<template>
    <v-sheet
        :height="sheetHeight"
    >
        <div>
        <v-app-bar color="#A03037">
            <div class="d-flex align-center">
                <v-img
                alt="BookStore"
                class="shrink mr-2 ml-16"
                contain
                src="../../../public/assets/booklogo.png"
                transition="scale-transition"
                width="30"
                />
                <h2 class="font-weight-medium mt-1 white--text">
                Bookstore
                </h2>
            </div>
            <v-spacer></v-spacer>
            <v-text-field
                class="mt-8"
                label="Search..."
                placeholder="Search"
                solo
                outlined                
                required
            >
            </v-text-field>
            <v-spacer></v-spacer>
            <v-btn to="cart" color="white" text>Cart</v-btn>
            <v-img
                alt="Cart"
                class="shrink mr-16"
                contain
                src="../../../public/assets/cartlogo.png"
                transition="scale-transition"
                width="20"
                />
        </v-app-bar>
    </div>
    </v-sheet>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            
        }
    },
    computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '200px'
        case 'sm': return '300px'
        case 'md': return '300px'
        case 'lg': return '80px'
        case 'xl': return '350px'
      }
      return '300px'
    }
  }
}
</script>