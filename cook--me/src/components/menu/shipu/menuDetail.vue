<template>
    <div class="lsm">
        <div class="cen">
            <div class="c-top">
                <h1>{{bookName}}</h1>
                <!-- {{bookId}} -->
                
                <div class="c-top-o">
                    创建时间:{{bookTime | date}}
                    <!-- <input type="button" @click="upNum()" value="切换"> -->
                    <!-- <b @click="upNum()">切换</b> -->
                </div>
                <p class="c-top-t">温馨小提示:{{bookDetails}}</p>
                <p>
                    <img :src="imgUrl+bookImage">
                </p>
            </div> 
            <div class="c-scmx">
                <!-- <p>食材明细:{{materials}}</p> -->
                <h2>
                    <i class="el-icon-burger"></i>
                    食材明细
                </h2>
                <div class="c-scmx-x">
                    <div v-for="(item,value) in materials" :key="value">
                        <div class="c-scmx-o">
                            <div>{{item.matName}}</div>
                            <div>{{item.matDosage}}</div>
                        </div>
                    </div>
                </div> 
            </div>
            <!-- <div style="clear:both;"></div> -->
            <div class="c-zfbz">   
                <h2>
                    <i class="el-icon-burger"></i>
                    {{bookName}}的做法步骤
                </h2>
                <div v-for="(item,value) in stepList" :key="value">
                    <b>{{value+1}}</b>
                    <p>&nbsp;&nbsp;{{item.stepValue}}</p>
                    <p>{{item.matDosage}}
                        <img :src="imgUrl+item.stepImage">
                    </p>
                </div>
            </div>
            <!--用户信息-->
            <!-- <hr>
            <div>
                {{user}}
            </div> -->
        </div>
    </div>
    
    
</template>

<script>
export default {
    name:'menu-detail',
    data(){
        return{
            data:{},
            bookId:this.$route.query.bookId,
            imgUrl:"http://39.106.68.255/",
            bookName:"",
            bookTime:"",
            bookDetails:"",
            bookImage:"",
            materials:[],
            stepList:'',
            user:""
        }
    },
    methods:{
        detail(){
            var bookId = this.bookId;
            this.$axios.get("/cookme/sys/book/selectById/"+bookId)
            .then(({data})=>{
                this.data = data;
                console.log(data);
                this.bookName=data.cookbook.bookName;
                this.bookDetails=data.cookbook.bookDetails;
                this.bookTime=data.cookbook.bookTime;
                this.bookImage=data.cookbook.bookImage;

                this.materials=data.materials;
                this.stepList=data.stepList;
                this.user=data.user;     
            })
    
        },
        upNum(){
            this.bookId ++;
            if(this.bookId === 8){
                this.bookId =1;
            }
            console.log(this.bookId);
            this.detail()
        }
    },
    mounted(){
        this.detail()
    }
}
</script>

<style lang="less">
.lsm{
    background: #fae8c8;
    .cen{
        background:#fae8c8;
        width: 990px;
        margin:0 auto;
        .c-top{
            h1{
                margin:0;
                padding:20px 0 20px 0;
            }
            .c-top-o{
                color:#666;
                height:44px;
                b{
                    margin-right:300px;
                    border-radius:50%;
                    display:block;
                    width:44px;
                    height:44px;
                    text-align:center;
                    line-height:44px;
                    font-size:12px;
                    background:pink;
                    float:right;
                    color:white;
                    cursor:pointer;
                }
            }
            .c-top-t{
                padding-bottom:8px;
                padding-top:6px;
            }
            p{
                img{width:500px;}
            }
        }
        .c-scmx{
            h2{
                color: #ff6767;
                padding-top:8px;
                padding-bottom:14px;
            }
            .c-scmx-x{
                border-radius: 10px;
                border: 1px solid #ddd;
                overflow:hidden;
                width:590px;
                margin-bottom:20px;
                .c-scmx-o{
                    float:left;
                    padding:8px 16px 8px 16px;
                    text-align:center;
                    
                }
            }    
        }
        .c-zfbz{
            h2{
                color: #ff6767;
                padding-top:8px;
                padding-bottom:14px;
            }
            b{
                width:28px;
                height:28px;
                border-radius:50%;
                text-align:center;
                line-height:28px;
                margin-top:10px;
                margin-bottom:4px;
                display:block;
                background:coral;
                font-weight:normal;
            }
        }
    }
}

</style>

