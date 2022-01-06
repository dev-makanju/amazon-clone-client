<template>
    <div>
        <Nuxt/>
    </div>
</template>

<script>
   import Navbar from "../components/Navbar.vue"
   import Footer from "../components/Footer.vue"
    export default {
        name:"PageLayouts",
        component:{
            Navbar , Footer
        }
    }
</script>