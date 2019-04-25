<template>
    <div>
        <componentShopping></componentShopping>
    </div>
</template>

<script>
    import componentShopping from "@/components/shopping/component-shopping.vue"
    import publica from "@/components/shopping/public.vue"
    export default {
        name: "shopping",
        components:{
            componentShopping,
            publica
        }
    }
</script>

<style scoped>

</style>