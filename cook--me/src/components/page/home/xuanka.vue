<template>
    <mu-container>
        <mu-tabs :value.sync="active2" color="pink" indicator-color="deeppink" full-width inverse>
            <mu-tab @click="cai(0)">蔬菜水果</mu-tab>
            <mu-tab @click="cai(1)">家禽肉类</mu-tab>
            <mu-tab @click="cai(2)">水产冻品</mu-tab>
            <mu-tab @click="cai(3)">豆腐禽蛋</mu-tab>
            <mu-tab @click="cai(4)">干货粮油</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="active2 === sort">
            <ul>
                <li v-for="item in picIma" >
                    <img :src="JavaUrl+item.productImages" alt="">
                </li>
            </ul>
        </div>
    </mu-container>
</template>

<script>
    export default {
        data () {
            return {
                active2:0,
                sort:0,
                picIma:[],
                JavaUrl:"http://39.106.68.255/"
            }
        },
        methods:{
            cai(sort){
                this.sort=sort;
                this.$axios.post("/cookme/sys/shop/selectByType/"+this.sort,{}).then(({data})=>{
                    this.picIma=data.bestProduct;
                    console.log(data);
                })
            }
        },
        mounted(){
            this.cai(0);
        }
    };
</script>

<style scoped lang="less">
        .mu-tab{
            font-size:18px;
        }
        .mu-tabs{
            color:brown;
            box-shadow:2px 2px 20px #999;
        }
        .demo-text {
            padding: 16px;
            margin:0 auto;
            background: #fff;
            box-shadow:2px 2px 20px #999;
            position:relative;
            overflow: hidden;
            p {
                margin: 8px 0;
            }
            ul{

                li{
                    margin-left:4px;
                    float:left;
                    cursor:pointer;
                    img{
                        width:178px;
                        height:178px;
                        cursor:pointer;
                    }
                }
            }
        }


</style>