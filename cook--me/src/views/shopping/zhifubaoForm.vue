<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "zhifubaoForm",
        data(){
            return{
                zhifubaoForm:this.$route.query.Form,
            }
        },
        mounted(){
            const div = document.createElement('div');
            div.innerHTML = this.zhifubaoForm;
            document.body.appendChild(div);
            document.forms[0].submit();;
        }
    }
</script>

<style scoped>

</style>