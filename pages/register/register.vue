<template>
	<view class="container">
		<view class="header">
			<image class="logo" src="/static/logo.png" mode="aspectFit"></image>
		</view>
		<view class="text-box">
			<view class="title">立即注册</view>
			<view class="description">现在免费注册，快来探索我们的美好。</view>
		</view>
		<view class="input-container">
			<input class="input" type="text" placeholder="输入用户名" />
		</view>
		<view class="input-container">
			<input class="input" type="text" placeholder="输入Email" />
		</view>
		<view class="input-container" style="  margin-bottom: 40px;">
			<input class="input" type="password" placeholder="输入密码" />
			 
		</view>
		
		<button class="register-button" @click="register">立即注册</button>
		<view class="register-container">
			<text class="register-text">已经有账号？</text>
			<navigator class="register-link" url="/pages/login/login">去登录</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'RegisterPage',
		methods: {
			register() {
				// 登录逻辑
				uni.switchTab({
					url: '/pages/index/index'
				});
			}
		}
	};
</script>

<style scoped>
	.container {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #ffffff;
	}

	.header {
		display: flex;
		margin-bottom: 20px;
		width: 100%;
		margin-left: 40px;
	}

	.logo {
		width: 85px;
		height: 85px;
	}

	.text-box {
		width: 100%;
		
	}


	.title {
		display: flex;
		width: 100%;
		font-size: 24px;
		color: #333333;
		margin-left: 40px;
		margin-bottom: 10px;
	}

	.description {
		width: 80%;
		font-size: 17px;
		color: #666666;
		margin-left: 40px;
		margin-bottom: 30px;
	}
	
	.forgot-password {
	  font-size: 12px;
	  color: #999999;
	  margin-right: 30px;
	  /* text-decoration: underline; */
	  float: right; /* 使忘记密码链接靠右 */
	
	}


	.input-container {
		width: 80%;
		padding-top: 20px;
		margin-bottom: 10px;
	}

	.input {
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #cccccc;

	}

	.register-button {
		width: 80%;
		height: 60px;
		line-height: 60px;
		text-align: center;
		background-color: #61B15A;
		color: #ffffff;
		border-radius: 10px;
		font-size: 16px;
	}

	.register-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}

	.register-text {
		font-size: 14px;
		color: #666666;
		margin-right: 10px;
	}

	.register-link {
		font-size: 14px;
		color: #4CAF50;
		text-decoration: underline;
	}
</style>