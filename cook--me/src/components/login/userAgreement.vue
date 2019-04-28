<template>
	<div class="user">
		<div class="content-me">
			<h1>《COOKME》用户协议</h1>
			<p>
				一、总则<br>
				1、COOKME网站,以下简称COOKME。<br>
				2、用户在使用COOKME的服务之前，应当仔细阅读本协议，并同意遵守本协议后方可成为COOKME用户，一旦用户注册成功，则用户与COOKME之间自动形成协议关系，用户应当受本协议及COOKME所有规则的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。。<br>
				3、本协议自发布之日起实施，COOKME管理团队保留对规则的解释权、修改权。<br>
				二、服务内容<br>
				1、COOKME目前向用户提供如下服务：发布并分享菜谱；收藏菜谱；发布小视频、发布话题、上传图片；发布厨房故事；上厨艺课程；发布线下体验课等；除非本使用协议另有其它明示规定，增加或强化目前本服务的任何新功能，包括所推出的新产品，均受到本使用协议之规范。你了解并同意，本服务仅依其当前所呈现的状况提供，对于任何用户信息或个人化设定之时效、删除、传递错误、未予储存或其它任何问题，网COOKME均不承担任何责任。网上厨房保留不经事先通知为维修保养、升级或其它目的暂停本服务任何部分的权利。<br>
				2、COOKME提供的部分网络服务为收费的网络服务，用户使用收费网络服务需要支付一定的费用。对于收费的网络服务，COOKME会在用户使用之前给予用户明确的提示，只有用户根据提示确认其愿意支付相关费用，用户才能使用该等收费网络服务。如用户拒绝支付相关费用，COOKME有权不向用户提供该等收费网络服务。<br>
				3、COOKME提供相关的网络服务，除此之外与相关网络服务有关的设备(如个人电脑、手机、及其他与接入互联网或移动网有关的装置)及所需的费用(如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费)均应由用户自行负担。<br>
				三、用户帐号<br>
				1、用户可通过以下方式注册成为COOKME的正式用户：<br>
				(1) 经COOKME系统完成注册程序的用户；<br>
				(2) 经COOKME批准的第三方合作平台登录的的用户；<br>
				2、用户帐号注册<br>
				使用系统注册的用户，昵称唯一，且只能使用汉字、英文字母、数字、下划线及它们的组合，禁止使用空格、各种符号和特殊字符，且最多不超过14个字符(7个汉字)注册，否则将不予注册。<br>
				3、如发现用户帐号中含有不雅文字或不恰当名称的，COOKME保留取消其用户资格的权利。<br>
				(1) 请勿以党和国家领导人或其他社会名人的真实姓名、字号、艺名、笔名注册；<br>
				(2) 请勿以国家机构或其他机构的名称注册；<br>
				(3) 请勿注册不文明、不健康名字，或包含歧视、侮辱、猥亵类词语的帐号；<br>
				(4) 请勿注册易产生歧义、引起他人误解或其它不符合法律规定的帐号。<br>
				4、用户账号注销删除。<br>
				用户可通过联系客服证明账号归属后，删除注销账号，COOKME也会在符合法律规定前提下及时删除用户数据。<br>
				5、用户有义务保证密码和帐号的安全，用户利用该密码和帐号所进行的一切活动引起的任何损失或损害，由用户自行承担全部责任，COOKME不承担任何责任。如用户发
				现帐号遭到未授权的使用或发生其他任何安全问题，应立即修改帐号密码并妥善保管，如有必要，请通知。因黑客行为或用户的保管疏忽导致帐号非法使用，COOKME不承担任何责任。 用户帐号的所有权归COOKME，用户仅享有使用权。<br>
			</p>
			<input type="button" value="返回" @click="$router.push('/reg')">
		</div>
	</div>
</template>

<script>
	export default {
		name : "user-agreement",
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	/* 用户协议 */
	*{
		margin : 0;
		padding : 0;
		box-sizing: border-box;
	}
	a{
		text-decoration: none ;
	}
	li{
		list-style: none;
	}
	/* 内容 */
	.user{
		background : url("../../static/login/img/background.png") no-repeat;
		background-size : 100% 100%;
		.content-me{
			width: 1124px;
			min-height: 1550px;
			//background: pink;
			margin : 0 auto;
			text-align: center;
			overflow: hidden;
			h1{
				font-size: 40px;
				font-weight: normal;
				margin-top: 50px;
			}
			p{
				font-size: 20px;
				text-align: left;
				line-height: 36px;
			}
			input{
				width : 100px;
				height: 36px;
				border: none;
				outline: none;
				background: #fbc201;
				color: #FFFFFF;
				border-radius: 10px;
				font-size: 20px;
				margin-top : 40px;
			}
		}
	}
	</style>