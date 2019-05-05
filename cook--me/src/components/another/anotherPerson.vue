<template>
	<div class="another">
		<div class="another-nav">
			<div class="nav-left">
			    <div class="tou">
			        <img src="../../static/syImg/04/tx10.jpg" alt="">
			    </div>
			    <div class="tou_right">
			        <p>他人主页</p>
			        <p>
			            <span>性别</span>
			            <span>地区</span>
			        </p>
			        <p>暂时没有个人签名哦！</p>
			    </div>
			</div>
			<div class="nav-right">
				<div><p @click="$router.push('/anotherFans')">粉丝</p><i>|</i><p @click="$router.push('/anotherAttention')">关注</p></div>
				<button @click="$router.push('/fensi')">返回</button>
			</div>
		</div>
		<router-view ></router-view>
	</div>
</template>

<script>
	export default {
		name:"another-person",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.another{
	width : 100%;
	height: 100%;
	background: url("../../static/login/img/bj.jpg") no-repeat;
	background-size : 100% 100%;
	overflow: hidden;
	.another-nav{
		width: 1110px;
		margin: 30px auto;
		overflow: hidden;
		position: relative;
		//border: 1px solid #000;
		.nav-left{
		    width:554px;
		    float:left;
		    margin-top:10px;
		    .tou{
		      float:left;
		       img{
		           border-radius:50%;
		           box-shadow:2px 2px 10px pink;
		           width:100px;
				   margin-left : 20px;
		       }
		    }
		    .tou_right{
		        float:left;
		        padding-left:30px;
		        p{
		            padding-bottom:20px;
		        }
		        :nth-child(1){
		            font-size:30px;
		        }
		        :nth-child(2){
		            span{
		                font-size:16px;
		                padding-right:20px;
		            }
		
		        }
		        :nth-child(3){
		            font-size:16px;
		        }
		    }
		}
		.nav-right{
			float:right;
			div{
			    margin-top:48px;
			    padding:16px 22px;
			    font-size:20px;
			    text-align:center;
			    border-radius:10px;
			    float:left;
			    color:white;
			    cursor:pointer;
			    background:pink;
			    p{
			        float:left;
			        letter-spacing:2px;
			    }
			    i{
			        float:left;
			        color:hotpink;
			        margin:0 4px;
			    }
			}
			div:hover{box-shadow:2px 2px 10px yellowgreen;}
			p:hover{color:deeppink;}
			button{
				width: 100px;
				height: 58px;
				font-size:20px;
				text-align:center;
				border-radius:10px;
				background: lightskyblue;
				outline: none;
				border: none;
				color:white;
				cursor:pointer;
				margin: 50px 40px 0;
			}
			button:hover{
				box-shadow:2px 2px 10px yellowgreen;
				color:deeppink;
			}
		}
	}
}
</style>
