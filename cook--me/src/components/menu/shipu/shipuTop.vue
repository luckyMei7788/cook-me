<template>
    <div>
        <div class="toplsm">
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
</template>

<script>
export default {
    name:'shipu-top'
}
</script>

<style lang="less">
.toplsm{
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
</style>


