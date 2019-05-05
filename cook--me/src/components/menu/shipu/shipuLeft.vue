<template>
    <div>
        <div class="main-l">
            <!--Tabs-->
            <el-tabs type="border-card">
                <el-tab-pane label="普通筛选">
                    <el-row class="tac">
                        <el-col :span="12">
                            <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose">
                                <el-submenu index="1">
                                    <template slot="title">
                                    <span>选择难度</span>
                                    </template>
                                    <el-menu-item index="1-1">新手尝试</el-menu-item>
                                    <el-menu-item index="1-2">初级入门</el-menu-item>
                                    <el-menu-item index="1-3">初中水平</el-menu-item>
                                    <el-menu-item index="1-4">中级掌厨</el-menu-item>
                                </el-submenu>

                                <el-submenu index="2">
                                    <template slot="title">
                                    <span>选择工艺</span>
                                    </template>
                                    <el-menu-item index="2-1">新手尝试</el-menu-item>
                                    <el-menu-item index="2-2">初级入门</el-menu-item>
                                    <el-menu-item index="2-3">初中水平</el-menu-item>
                                    <el-menu-item index="2-4">中级掌厨</el-menu-item>
                                </el-submenu>
                                <el-submenu index="3">
                                    <template slot="title">
                                    <span>选择口味</span>
                                    </template>
                                    <el-menu-item index="3-1">新手尝试</el-menu-item>
                                    <el-menu-item index="3-2">初级入门</el-menu-item>
                                    <el-menu-item index="3-3">初中水平</el-menu-item>
                                    <el-menu-item index="3-4">中级掌厨</el-menu-item>
                                </el-submenu>
                            
                            </el-menu>
                        </el-col>
                    </el-row>

                </el-tab-pane>

                    <el-tab-pane label="食材筛选">
                    <el-input v-model="input" placeholder="请输入你想查找的食材">
                            
                    </el-input>
                    <dl class="aslps">
                        <dt>按数量排序</dt>
                        <dd>
                            <a href="#">
                                <span>应季</span>
                                <b>苹果</b>
                                <em>30</em>
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>应季</span>
                                <b>苹果</b>
                                <em>30</em>
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>应季</span>
                                <b>苹果</b>
                                <em>30</em>
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>应季</span>
                                <b>苹果</b>
                                <em>30</em>
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>应季</span>
                                <b>苹果</b>
                                <em>30</em>
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>应季</span>
                                <b>苹果</b>
                                <em>30</em>
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>应季</span>
                                <b>苹果</b>
                                <em>30</em>
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>应季</span>
                                <b>苹果</b>
                                <em>30</em>
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>应季</span>
                                <b>苹果</b>
                                <em>30</em>
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>应季</span>
                                <b>苹果</b>
                                <em>30</em>
                            </a>
                        </dd>
                    </dl>
                    </el-tab-pane>
            </el-tabs>
            <!--清除浮动-->
            <div class="main-clear"></div>

            <div class="ad">
                <div class="block">
                    <el-carousel height="260px" width="225px">
                        <el-carousel-item v-for="(img,index) in imgList" :key="index">
                            <img v-bind:src="img.url" class="pic">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <!-- <div>
                {{data}}
            </div> -->
        </div>
        
    </div>
</template>

<script>
export default {
    name:'shipu-left',
    data(){
        return {
            input:'',
            imgList:[
                {url:require('../../../static/menu/pic6.jpg')},
                {url:require('../../../static/menu/pic4.jpg')},
                {url:require('../../../static/menu/pic5.jpg')},
                {url:require('../../../static/menu/pic3.jpg')}
            ],
            data:{},   
        }
    },
    methods:{
        handleOpen(key, keyPath) {
        },
        handleClose(key, keyPath) {
        },   
        detail(){
            var search = "鸡翅";
            var limit = 10;
            var offset = 0;
            this.$axios.post("/cookme/sys/book/fuzzySelectBookByMaterial/"+search,{limit,offset})
            .then(({data})=>{
                this.data = data;
                console.log(1111,data);   
            })
        }
    },
    mounted(){
        this.detail()
    }
    
}
</script>

