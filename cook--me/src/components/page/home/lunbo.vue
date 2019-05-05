<template>
    <div class="lunbo">
        <div class="demo-text"  v-if="active1 === type_id">
            <div class="big-s">
                <div v-for="(items,index) in picUrl">
                    <router-link :to="{path:'/menuDetail',query:{bookId:items.bookId}}">
                        <img :src="JavaUrl+items.bookImage" alt="">
                    </router-link>
                </div>
            </div>
        </div>
        <div class="kuang">
            <!--<div class="left">-->

            <!--</div>-->
                <!--<div class="right">-->

            <!--</div>-->
        </div>
        <div class="timeC">
            <div class="timed">
                <mu-container>
                    <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
                        <mu-tab @click="lunbo(0)">早餐时间</mu-tab>
                        <mu-tab @click="lunbo(1)">午餐时间</mu-tab>
                        <mu-tab @click="lunbo(2)">晚餐时间</mu-tab>
                    </mu-tabs>
                </mu-container>
            </div>
            <div class="du">
                <ul>
                    <li>8:00</li>
                    <li>10:00</li>
                    <li>12:00</li>
                    <li>14:00</li>
                    <li>16:00</li>
                    <li>18:00</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lunbo",
        data () {
            return {
                picUrl:[],
                active1:0,
                type_id:0,
                bookId:1,
                JavaUrl:"http://39.106.68.255/"
            };
        },
        methods: {
            lunbo(type_id){
                this.type_id= type_id;
                //console.log(this.type_id);
                this.$axios.get("/cookme/sys/book/selectByTimeType?typeId="+this.type_id).then(({data})=>{
                    this.picUrl= data.timeType;
                    this.bookId= data.timeType.bookId;
                    console.log(data);
                })
            }
        },
        mounted(){
            this.lunbo(0)
        }
    }
</script>

<style lang="less">


    .lunbo{
        width:100%;
        margin:0 auto;
        height:400px;
        position:relative;
        .demo-text{
            width:100%;
            margin:0 auto;
            .big-s{
                height:250px;
                margin:0 auto;
                div{
                    width:20%;
                    height:100%;
                    float:left;
                    overflow: hidden;
                    img{
                        width:100%;
                        height:100%;
                        display: inline-block;
                    }
                }

            }
        }
        .kuang{
            width:100%;
            overflow: hidden;
            /*.left{*/
                /*width:20%;*/
                /*height:100%;*/
                /*position:absolute;*/
                /*background:rgba(255,255,255,.5);*/
                /*top:0;*/
                /*left:0;*/
            /*}*/
            /*.right{*/
                /*width:20%;*/
                /*height:100%;*/
                /*position:absolute;*/
                /*background:rgba(255,255,255,.5);*/
                /*top:0;*/
                /*left:80%;*/
            /*}*/


        }
        .timeC{
            width:100%;
            margin:0 auto;
            height:30px;
            position:relative;
            background: url(../../../static/syImg/01/chi_03.jpg);
            .timed{
                .mu-tabs{
                    background:none;
                    .mu-tab-link-highlight{
                        height:5px;
                        position: absolute;
                        left:0;
                        top:0;
                    }
                    .mu-tab{
                        min-width:264px;
                        margin-top:48px;
                        font-size:20px;
                    }
                }
            }
            .du{
                position:absolute;
                top:26px;
                left:20px;
                ul{
                    li{
                        color:darkgrey;
                        float:left;
                        padding:0 86px;
                    }
                }
            }
        }
    }
</style>