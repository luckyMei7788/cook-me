<template>
    <div class="lunbo">
        <div class="demo-text"  v-if="active1 === type_id">
            <div class="big-s">

               <!-- <div v-for="(items,index) in picUrl"><img :src="JavaUrl+items.bookImage" alt=""></div>-->
                    <div v-for="items in 5"><img src="../../../static/syImg/02/02-zaocan-meilingzhou.jpg" alt=""></div>
            </div>
        </div>
        <div class="kuang">
            <div class="left">

            </div>
                <div class="right">

            </div>
        </div>
        <div class="timeC">
            <div class="timed">
                <mu-container>
                    <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
                        <mu-tab @click="lunbo(2)">早餐时间</mu-tab>
                        <mu-tab @click="lunbo(3)">午餐时间</mu-tab>
                        <mu-tab @click="lunbo(4)">晚餐时间</mu-tab>
                    </mu-tabs>

                    <!--<div class="demo-text" v-if="active1 === 1">-->

                    <!--</div>-->
                    <!--<div class="demo-text" v-if="active1 === 2">-->

                    <!--</div>-->
                </mu-container>
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
                //pic:require(this.bookImage),
                active1: 2,
                type_id:2,
                JavaUrl:"http://39.106.68.255:8080"
            };
        },
        methods: {
            lunbo(type_id){
                this.type_id= type_id;
                //console.log(this.type_id);
                this.$axios.get("/cookme/sys/book/selectByTimeType?typeId="+this.type_id).then(({data})=>{
                    this.bookImage=data.bookImage;
                    this.picUrl= data.timeType;
                    console.log(data);
                })
            }
        },
        mounted(){
            this.lunbo(2)
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
                margin:0 auto;
                div{
                    width:20%;
                    height:100%;
                    float:left;
                    img{
                        width:100%;
                        height:100%;
                    }
                }

            }
        }
        .kuang{
            width:100%;
            overflow: hidden;
            .left{
                width:20%;
                height:100%;
                position:absolute;
                background:rgba(255,255,255,.5);
                top:0;
                left:0;
            }
            .right{
                width:20%;
                height:100%;
                position:absolute;
                background:rgba(255,255,255,.5);
                top:0;
                left:80%;
            }


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
                        min-width: 253px;
                        margin-top:32px;
                        font-size:20px;
                    }
                }

                /*.demo-text {
                    padding: 16px;
                    background: #fff;
                    p {
                        margin: 8px 0;
                    }
                }*/
            }

        }
    }
</style>