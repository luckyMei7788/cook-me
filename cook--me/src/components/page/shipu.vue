<template>
    <div>
        <div>
             <div class="top">
                <ul>
                    <li>
                        <a href="#">我的美食属性</a>
                    </li>
                    <li>
                        <a href="#">家常菜谱</a>
                    </li>
                    <li>
                        <a href="#">中华菜系</a>
                    </li>
                    <li>
                        <a href="#">各地小吃</a>
                    </li>
                    <li>
                        <a href="#">外国菜谱</a>
                    </li>
                    <li>
                        <a href="#">烘焙</a>
                    </li>
                    <li>
                        <a href="#">厨房百科</a>
                    </li>
                    <li>
                        <a href="#">食材百科</a>
                    </li>
                </ul>
            </div>
            <div class="top-t">
                <dl>
                    <dt>家常菜谱</dt>
                    <dd>家常菜</dd>
                    <dd>私家菜</dd>
                    <dd>海鲜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                    <dd>私家菜</dd>
                    <dd>海鲜</dd>
                    <dd>家常菜</dd>
                    <dd>家常菜</dd>
                </dl>
                <dl>
                    <dt>每日三餐</dt>
                    <dd>家常菜</dd>
                    <dd>私家菜</dd>
                    <dd>海鲜</dd>
                    <dd>家常菜</dd>
                </dl>
                <dl>
                    <dt>人群</dt>
                    <dd>家常菜</dd>
                    <dd>私家菜</dd>
                    <dd>海鲜</dd>
                    <dd>家常菜</dd>
                </dl>
                <dl>
                    <dt>功效</dt>
                    <dd>家常菜</dd>
                    <dd>私家菜</dd>
                    <dd>海鲜</dd>
                    <dd>家常菜</dd>
                </dl>
                
            </div>

        </div>
        <div class="center">
            印象中的味道
            <div class="center-r">
                <span>最新</span>
                <span></span>
                <span>最热</span>
            </div>
            
        </div>

        <div class="main">
            <div class="main-l">
                文字
            </div>
            <div class="main-r">
                文字
            </div>
            

        </div>
        <div class="main-clear">

        </div>
       
       <div class="foot">

       </div>
        
    </div>
</template>

<script>
    export default {
        name: "shipu"
    }
</script>

<style scoped lang="less">
a{
    color:#333;
}
.top{
    height: 50px;
    width: 990px;
    background: rgba(255,255,255,0.5);
    margin:0 auto;
    margin-top:20px;
    ul{
        li{float:left;
            height: 50px;
            line-height: 50px;
            color: #333;
            font-size: 14px;
            font-weight: bold;
           
            a{
                color: #333;
                display: inline-block;
                vertical-align: top;
                height: 50px;
                padding: 0px 24px;
            }
             a:hover{background:#fff;color:red;}
        }
    }
}
/*二级标题*/
.top-t{
    width: 990px;
    margin:0 auto;
    background:#fff;
    overflow: hidden;
    dl{padding: 10px 16px 14px;
    display: inline-block;
        dt{
            display: Block;
            height: 42px;
            line-height: 42px;
            font-size: 24px;
            color: #333;
        }
        dd{ float: left;
            padding: 0px 8px;
            display: inline-block;
            vertical-align: top;
            height: 28px;
            line-height: 28px;
            color: #666;
            cursor: pointer;
        }
        dd:hover{background:red;color:#fff;}
    }
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
        span{
            font-size:14px; color:#FF3232;
            display:block;float:left;
        }
        span:nth-of-type(2){
        width:1px;height:14px;background:#333;
        margin:54px 8px;
        }
        
    }
}

.main{width: 990px;
    margin:0 auto;
   
    .main-l{
        width:200px;height:300px;float:left;background:darkkhaki;
    }
    .main-r{
        width:500px;float:right;background:darkcyan;
    }
    
}
.main-clear{float:clear;}
//底部
.foot{
    height:700px;background:dimgrey;
}
</style>