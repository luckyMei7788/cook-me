<template>
	<div class="upPic">
		<el-upload
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
		<span>提示：7天内只能修改一次头像</span>
	</div>

</template>

<script>
	export default {
		name : "head-portrait",
		data() {
			return {
				imageUrl: ''
			}
		},
		methods: {
			submitUpload() {
				console.log(this.$refs.upload);
// 			this.$axios.post("/cookme/sys/user/updatehead",{
// 				usId:"11",
//
// 			});this.$refs.upload.submit();
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
				console.log(this.imageUrl);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;
				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			//更新图片
			update(){
				//const file = this.$refs.file;
				//this.$axios.post("/sys/user/updatehead", {})
				console.log(this.imageUrl);
			}
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
		.avatar-uploader{
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
				margin-left: 450px;
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
			border: 1px solid #000000;
			border-radius: 10px;
			margin-bottom: 30px;
			text-align : center;
			background: none;
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

</style>