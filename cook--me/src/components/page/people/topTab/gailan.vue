<template>
    <div class="gailan">
        <div class="addCai">
            <input type="text" placeholder="添加菜谱名称" v-model="bookName">
        </div>
        <div class="middleCai">
            <div class="left">
                <h4>添加菜谱封面图</h4>
                <div class="fm">
                    <el-upload
                            action="/cookme/sys/user/book/addBook"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :auto-upload="false"
                            :on-remove="handleRemove"
                            ref="bookImagefile">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible" size="tiny">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>
            </div>
            <div class="right">
                菜谱类型：
                <select>
                    <option value ="volvo">家常菜</option>
                    <option value ="saab">私家菜</option>
                    <option value="opel">海鲜</option>
                </select>
            </div>
        </div>
        <div class="xinxi">
            <i class="iconfont">&#xe78a;</i><input type="text" placeholder="点击添加菜品描述" v-model="bookDetails">
            <p>用料</p>
            <div class="tableC">
                <ul>
                    <li v-for="item in 4">
                        <div>
                            <input type="text" placeholder="比如：面粉" ref="matName"><input type="text" placeholder="比如：200g" ref="matDosage">
                            <i @click="del" class="iconfont">&#xe847;</i>
                        </div>
                    </li>
                </ul>


            </div>
            <div class="aadd">
                <button @click="addY"><i class="iconfont">&#xe84a;</i> 追加一行用料</button>
            </div>
            <div class="buzhou">
                <!--<p>批量上传步骤图，按住Ctrl批量上传文件</p>-->
                <p>点击添加菜谱步骤</p>
                <div>
                    <div class="b1">
                        <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :auto-upload="false"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove"
                                v-model="stepImageFile">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible" size="tiny">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </div>

                </div>
            </div>
        </div>
        <button class="btn" @click="addAll">发布菜谱</button>
    </div>
</template>

<script>
    export default {
        name: "gailan",
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            addY(){

            },
            del(){
               // this.group.splice(index, 1)
            },
            addAll(){
                alert("发布成功")
                /*this.$refs.bookImagefile.submit();
                this.$axios.post("/cookme/sys/user/book/addBook",{
                    bookName:this.bookName,
                    bookImagefile:this.bookImagefile,
                    bookDetails:this.bookDetails,
                    material:[{
                        matName:this.$refs.matName.value,
                        matDosage:this.$refs.matDosage.value,
                    }],
                    stepDTOS:[{
                        stepImageFile:this.stepImageFile,
                    }],
                    types:[{
                        typeId:this.typeId
                    }]

                }).then(({data})=>{

                })*/
            }
        },
        data() {
            return {
                imageUrl: '',
                group:[],
                dialogImageUrl: '',
                dialogVisible: false,
                JavaUrl:"http://39.106.68.255/",
                //上传参数
                bookName:"",
                bookImagefile:"",
                bookDetails:"",
                stepImageFile:"",
                matName:"",
                matDosage:"",
                material:[],
                typeId:"",
                stepDTOS:[],
                types:[]

            }
        }
    }
</script>

<style scoped lang="less">
    .gailan{
        width:1090px;
        overflow: hidden;
        margin:0 auto;
        background: lightgrey;
        .btn{
            margin-left:500px;
            margin-bottom:20px;
            background: yellowgreen;
            color:white;
            font-size:18px;
            padding:10px 20px;
            border-radius: 4px;
            cursor: pointer;
            border:none;
        }
        .addCai{
            input{
                border:none;
                margin:40px 40px;
                padding:10px 6px;
            }
        }
        .middleCai{
            .left{
                float:left;
                margin:0 40px;

                h4{
                    font-weight: normal;
                    margin:10px 0;
                }
                .fm{
                   margin-bottom: 40px;
                }
            }
            .right{
                float: right;
                margin-right:40px;
                margin-top:40px;
                select{
                    width:100px;
                    padding:4px;
                    border:none;
                 }
            }
        }
        .xinxi{
            clear: both;
            margin:40px 40px;
            p{
                margin-bottom: 20px;
            }
            input{
                border:none;
                padding:4px;
                margin-bottom:20px;
            }
            .tableC{
                ul{
                    li{
                        clear:both;
                        div{
                            float: left;
                            input{
                                margin-right:20px;
                            }
                        }
                    }
                }
            }
            .aadd{
                clear:both;
                margin:40px 0;
                button{
                    border:none;
                    color:white;
                    font-size:16px;
                    background:yellowgreen;
                    padding:6px;
                    border-radius:4px;
                }
            }
            .buzhou{
                margin:40px 0;
                div{
                    p{
                        background: white;
                        padding:50px;
                        margin:10px 0;
                    }
                }
            }
        }
    }


</style>