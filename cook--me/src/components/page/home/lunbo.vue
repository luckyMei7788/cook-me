<template>
    <div class="lunbo">
        <div class="big-k">
            <img src="../../static/syImg/02/02-zaocan-meilingzhou.jpg" alt="">
            <img src="../../static/syImg/02/02-zaocan-meilingzhou.jpg" alt="">
            <img src="../../static/syImg/02/02-zaocan-meilingzhou.jpg" alt="">
            <img src="../../static/syImg/02/02-zaocan-meilingzhou.jpg" alt="">
            <img src="../../static/syImg/02/02-zaocan-meilingzhou.jpg" alt="">
        </div>
        <div class="kuang">

        </div>
        <div class="timeC">
            <div class="tiao">
                <ul>
                    <li>7:00</li>
                    <li>10:00</li>
                    <li>14:00</li>
                    <li>18:00</li>
                    <li>20:00</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lunbo"
    }
</script>

<style scoped lang="less">
    .lunbo{
        width:100%;
        margin:0 auto;
        height:400px;
        .big-k{
            background:rgba(255,255,255,.5);
        }
        .kuang{
            width:990px;
            margin:0 auto;
            background:red;

        }
        .timeC{
            width:100%;
            margin:0 auto;
            height:30px;
            background: url(../../../static/syImg/01/chi_03.jpg);
            .tiao{
                width:202px;
                height:7px;
                background:red;
            }
        }
    }
</style>