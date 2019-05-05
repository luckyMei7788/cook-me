<template>
    <div class="top">
        <div class="head">
            <div class="head-i">
                <router-link to="/green">💗</router-link>
                <i class="el-icon-star-on"></i><i class="el-icon-star-on"></i><i class="el-icon-star-on"></i>
            </div>
            <div id="tt" class="tt">
				<div class="exit" @click="logOut">
					<i class="iconfont">&#xe84c</i>
					退出
				</div>
                <router-link  to="/reg">
                    <span>注册</span>
                </router-link>
                <router-link to="/passwordLogin">
                    <span class="shu">|</span><span>登录</span>
                </router-link>
                <router-link to="/people" @click.native="decide">
                    <span>个人中心</span>
                </router-link>
                <router-link to="/cai">
                    <span>菜市场</span>
                </router-link>
                <router-link to="/shipu">
                    <span>食谱</span>
                </router-link>
                <router-link to="/" exact >
                    <span>首页</span>
                </router-link>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "tab",
        methods:{
            decide(){
                if(localStorage.usMobile){
                    this.$router.push({name:'people'})
                }
                else{
                    alert("您还没有登陆，请先登录！");
                    this.$router.push({name:'passwordLogin'})
                }
            },
			//退出登录
			logOut(){
				if(localStorage.usMobile){
					localStorage.usMobile = "";
					//退出登录让其跳转到登录界面
					this.$router.push({"name" : "passwordLogin"});
				}else{
					alert("您还没有登录");
				}
			}
        }
    }
</script>

<style scoped lang="less">
    
    .top{
        width:100%;
        overflow: hidden;
        margin:0 auto;
        background:url(../../static/syImg/01/banner0.1.png) center top no-repeat;
        .head{
            background:rgba(178,170,152,0.1);
            width:100%;
            margin:0 auto;
            overflow: hidden;
            .head-i{
                float:left;
                padding:27px 30px;
                i{
                    font-size:30px;
                    color:hotpink;
                }
            }
            .tt{
                width:1200px;
                margin:0 auto;
                span{
                    padding:27px 20px;
                    float:right;
                    color:#999898;
                    font-size:24px;
                }
                .shu{
                    padding:27px 0;
                }
                .router-link-active{
                    span{
                        color:#fda102;
                    }
                    .shu{
                        color:#999898;
                    }
                }
				.exit{
					float: right;
					color:#999898;
					font-size:24px;
					padding:27px 20px;
					cursor: pointer;
					.iconfont{
						font-size: 24px;
						
					}
				}
				.exit:active{
					color:#fda102;
				}
            }
        }
    }


</style>