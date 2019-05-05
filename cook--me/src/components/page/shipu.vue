<template>
    <div>
        <shipu-top></shipu-top>       
        <div class="center">
            印象中的味道
            <div class="center-r">
                <span :class="{'active':zxr===0 }" @click="zxr=0">最新</span>
                <span></span>
                <b :class="{'active2':zxr===1 }" @click="zxr=1">最热</b>
            </div>
            
        </div>

        <div class="main">
            
            <shipu-left></shipu-left>
            <shipu-right :zxr="zxr"></shipu-right>
        </div>
        <div class="main-clear"></div>
        <!-- <div style="clear:both;"></div> -->
        <foot></foot>
    </div>
</template>

<script>
    import foot from "./home/foot.vue"
    import shipuTop from "../menu/shipu/shipuTop.vue"
    import shipuRight from "../menu/shipu/shipuRight.vue"
    import shipuLeft from "../menu/shipu/shipuLeft.vue"
    
    export default {
        name: "shipu",
        data(){
            return {
                zxr:0,
                isActive:1,
                yspdone:1,
                yspdtwo:2,
                
                data:{}
            }
        },
        methods: {
            shift(num,ys){
                this.zxr=num;
                this.isActive=ys;
            }
        },
        components:{
            foot,
            shipuTop,
            shipuRight,
            shipuLeft
        },
        mounted(){
            //this.detail()
        }
    }
</script>

<style lang="less">
a{
    color:#333;
}

.center{
    width: 990px;
    margin:0 auto;
    height: 120px;
    line-height: 120px;
    font-size: 24px;
    color: #222;
    text-align: center;
    display: block;
    .center-r{
        float:right;
       
        .active2{
            color:#999;
        }
        .active{
            color:#999;
        }
        span{
            font-size:14px; color:#FF3232;
            display:block;float:left;
            cursor:pointer;
        }
        span:nth-of-type(2){
        width:1px;height:14px;background:#333;
        margin:54px 8px;
        }
        b{
            font-size:14px; color:#FF3232;
            display:block;float:left;
            cursor:pointer;font-weight:normal;
        }
        
    }
}

.main{width: 990px;
    margin:0 auto;
   
    .main-l{
        width:232px;float:left;
        // Tabs
        .el-tabs__nav-scroll{
            width:232px;
            .el-tabs__nav{
                width:232px;
            }
            .el-tabs__item{
                width:118px;
                text-align:center;
                .is-top{
                    .is-active{
                        color:red;
                    }
                }

            }
            .el-tabs__item:not(.is-disabled):hover{
                color: deeppink;
            }
            .el-tabs__item.is-active {
                color: deeppink;
            }
        }
        .el-tabs__content{
            padding:0;
        }
        //导航菜单
        .el-menu{
            border:0;
        }
        .el-submenu__title{
            width:232px;
            border-bottom:solid 1px #e6e6e6;
            
        }
        .el-menu--inline{
            width:232px;
            padding:5px;
        }
        .el-menu-item{
            float: left;
            margin: 5px;
            padding:0 !important;
            display: block;
            height: 30px;
            border: 1px solid #eee;
            background: #fff;
            color: #333;
            line-height: 30px;
            font-size: 12px;
            text-align: center;
            overflow: hidden;
            width: 100px;
            //
            min-width:0px;
            
        }
       .is-active{
            color:#ff3232;
        }
       

        .main-l-m{
            height: 50px;
            background: #f5f5f5;
            .main-l-mm{
                float: left;
                width: 116px;
                position: relative;
                a{
                    display: block;
                    color: #333;
                    font-weight: bold;
                    text-align: center;
                    font-size: 14px;
                    line-height: 50px;
                }
            }
            .main-l-mm:hover{background:#fff;}
            .main-l-mm:hover a{color:red;}
        }
        //输入框
        .el-input__inner{
                height: 30px;
                padding: 4px;
                line-height: 20px;
                width:200px;
                //background: none;
                color: #999;
                margin-left:15px;
                margin-top:10px;
            }
       
        .aslps{
            dt{
                    display: block;
                    height: 50px;
                    line-height: 50px;
                    color: #333;
                    text-indent: 14px;
                    font-size: 14px;
                    background:#fff;
                    border-bottom: 1px solid #ddd;
                    float: left;
                    width: 232px;
            }
            dd{
                padding: 14px 0px 6px 14px;
                width: 232px;
                background: #fafafa;
                border-bottom: 1px solid #ddd;
                float: left;
                a{
                    float: left;
                    margin: 0px 8px 8px 0px;
                    display: block;
                    height: 30px;
                    width: 202px;
                    border: 1px solid #eee;
                    background: #fff;
                    color: #333;
                    line-height: 30px;
                    font-size: 12px;
                    text-align: center;
                    overflow: hidden;
                    position: relative;
                    span{
                        position: absolute;
                        height: 20px;
                        background: #60a531;
                        color: #e90808;
                        line-height: 20px;
                        color: #fff;
                        padding: 0px 5px;
                        display: inline-block;
                        vertical-align: top;
                        left: 5px;
                        top: 5px;
                    }
                    b{
                        font-weight: bold;
                        display: inline-block;
                        vertical-align: top;
                        float: left;
                        padding-left: 60px;
                    }
                    em{
                        font-style:normal;
                        display: inline-block;
                        vertical-align: top;
                        float: right;
                        padding-right: 20px;
                        color: #999;
                    }
                }
            }
        }
        .ad{
            margin-top:30px;
        }
        .el-carousel__button{
            width:10px;height:10px;border-radius:50%;
        }
        .pic{width:232px;height:100%;}
       
    }
    
    
}
.main-clear{clear:both;}

</style>