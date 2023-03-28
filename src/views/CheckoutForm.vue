<template>
    <div>
        <Header />
        <Form />
    </div>
</template>

<script>

    import Header from '../components/home/Header'
    import Form from '../components/checkout/Form'

    export default {

        name:'CheckoutForm',

        components:{
            Header,
            Form
        }
    }
</script>