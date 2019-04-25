<template>
    <div>
        <componentGreensShopping></componentGreensShopping>
    </div>
</template>

<script>
    import componentGreensShopping from "@/components/shopping/component-greens-shopping.vue"
    import publica from "@/components/shopping/public.vue"
    export default {
        name: "greens-shopping",
        components:{
            componentGreensShopping,
            publica
        }
    }
</script>

<style scoped>

</style>