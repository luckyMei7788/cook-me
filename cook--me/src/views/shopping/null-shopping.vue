<template>
    <div>
        <componentNullShopping></componentNullShopping>
    </div>
</template>

<script>
    import componentNullShopping from "@/components/shopping/component-null-shopping.vue"
    import publica from "@/components/shopping/logo.vue"
    export default {
        name: "null-shopping",
        components:{
            componentNullShopping,
            publica
        }
    }
</script>

<style scoped>

</style>