<template>
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
</template>

<script>

    import Header from '../components/home/Header'
    import Body from '../components/home/Body'
    import Footer from '../components/home/Footer'

    export default {
        name: 'Home',

        components: {
            Header,
            Body,
            Footer
        },
    }
</script>