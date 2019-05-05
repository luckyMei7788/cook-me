<template>
	<div class="upPic">
		<el-form class="formdata">
			<el-upload
				class="avatar-uploader"
				action="/cookme/sys/user/updateHead"
				ref="upload"
			
				:auto-upload="false"
				:show-file-list="false"
				:on-change="onchange"
				:on-success="handleAvatarSuccess"
				:before-upload="beforeAvatarUpload"
				accept="image/png,image/gif,image/jpg,image/jpg">
				<img v-if="imageUrl" :src="imageUrl" class="avatar" ref="file">
				<i v-else class="el-icon-plus avatar-uploader-icon" >点击上传</i>
			</el-upload>
			<p>提示：图片格式为.png、.gif、.jpg、.jpg 且图片大小不能超过 2MB!</p>
			<input type="button" value="更新" @click="update">
			<span>一张精致的照片，将会是CookMe独特的风景</span>
		</el-form>
		
		
		
		
		<!-- <el-upload
			class="avatar-uploader"
			action="https://jsonplaceholder.typicode.com/posts/"
			:show-file-list="false"
			:on-success="handleAvatarSuccess"
			:before-upload="beforeAvatarUpload">
			<img v-if="imageUrl" :src="imageUrl" class="avatar" ref="file">
			<i v-else class="el-icon-plus avatar-uploader-icon" @click=submitUpload>点击上传</i>
		</el-upload>
		<p>一张精致的照片，将会是CookMe独特的风景</p>
		<input type="button" value="更新" @click="update">
		<span>提示：7天内只能修改一次头像</span> -->
	</div>
	
</template>

<script>
export default {
	name : "head-portrait",
	data() {
		return {
			imageUrl: '',
			url : "http://39.106.68.255:8080",
			user :""
		}
    },
    methods: {
		handleAvatarSuccess(res, file) {
			this.imageUrl = URL.createObjectURL(file.raw);
			console.log(res);
			if(res.code === 0){
				alert("图片上传成功")
			}else{
				alert(res.msg);
			}
		},
		beforeAvatarUpload(file){
			// const isJPG = file.type === 'image/jpeg';
			const isLt2M = file.size / 1024 / 1024 < 2;
			/*if (!isJPG) {
				this.$message.error('上传头像图片只能是 JPG 格式!');
			}*/
			if (!isLt2M) {
				this.$message.error('上传头像图片大小不能超过 2MB!');
			}
			return isLt2M; 
		},
		//更新图片
		update(){
			//点击时提交图片信息
			this.$refs.upload.submit();
		},
		//当上传图片后，调用onchange方法，获取图片本地路径-实现本地预览功能
		onchange(file,fileList){
			console.log(file, fileList);
			var _this = this;
			var event = event || window.event;
			var file = document.querySelector("input[name='file']").files[0];
			if(file){//有图片的情况下本地预览
				var reader = new FileReader(); 
				//转base64
				reader.onload = function(e) {
				  _this.imageUrl = e.target.result //将图片路径赋值给src
				}
				console.log(file)
				reader.readAsDataURL(file);
			}
		
		}
    },
	mounted() {
		//页面加载-获取个人信息
		this.$axios.get("/cookme/sys/user/selectById").then(({data})=>{
			this.user = data.user;
			console.log(data.user);
		})
	}
}
</script>

<style lang="less">
body{
	width : 100%;
	height: 100%;
	background : url("../../static/login/img/background.png") no-repeat;
	background-size : 100% 100%;
}
.upPic{
	.formdata{
		.avatar-uploader{
			text-align: center;
			.el-upload {
			    border: 1px dashed #000000;
			    border-radius: 50%;
			    cursor: pointer;
			    position: relative;
			    overflow: hidden;
				width: 300px;
				height: 300px;
				line-height: 300px;
				text-align: center;
				margin: 30px auto;
			}
			.el-upload:hover {
			    border-color: #409EFF;
			}
			.avatar-uploader-icon {
			    font-size: 28px;
			    color: #000000;
			    width: 200px;
			    height: 200px;
			}
			.avatar {
			    width: 100%;
			    height: 100%;
			    display: block;
			}
		}
		p{
			font-size : 30px;
			text-align: center;
			margin-top : 30px;
			margin-bottom : 80px;
		}
		input{
			display: block;
			width: 200px;
			height: 60px;
			outline: none;
			border: none;
			border-radius: 10px;
			margin-bottom: 30px;
			text-align : center;
			background: deeppink;
			border-radius: 10px;
			color: #FFFFFF;
			font-size: 30px;
			margin : 0px auto 50px;
		}
		span{
			display: block;
			font-size: 30px;
			margin-bottom : 150px;
			text-align: center;
		}
	}
	
}

  
</style>
