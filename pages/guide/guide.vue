<template>
	<view class="container">
		<!-- 背景图 -->
		<image class="background-image" src="/static/background.jpg" mode="aspectFill"></image>

		<!-- Logo -->
		<view class="logo-container">
			<image class="logo" src="/static/logo.png" mode="aspectFit"></image>
		</view>

		<!-- 标题 -->
		<text class="title">SOURCE MEAL</text>
		<text class="subtitle">餐食来源 定制配方</text>

		<!-- 登录按钮 -->
		<button class="login-button" @click="login">立即登录</button>

		<!-- 注册链接 -->
		<navigator class="register-link" url="/pages/register/register">还没有账号？去注册</navigator>
	</view>
</template>

<script>
	export default {
		name: 'GuidePage',
		methods: {
			login() {
				// 登录逻辑
				uni.redirectTo({
					url: '/pages/login/login'
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

	}

	.background-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.logo-container {
		margin-top: 80px;
	}

	.logo {
		width: 193px;
		height: 193px;
		mix-blend-mode: darken;
	}

	.title {
		font-size: 30px;
		color: #ffffff;
		margin-top: -10px;
		margin-bottom: 5px;
	}

	.subtitle {
		font-size: 16px;
		color: #ffffff;
		margin-bottom: 40px;
		opacity: 0.7;
	}

	.login-button {
		width: 321px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		background-color: #ffffff;
		color: #333333;
		border-radius: 10px;
		font-size: 16px;
		margin-top: 150px;
		margin-bottom: 20px;
	}

	.register-link {
		font-size: 16px;
		color: #ffffff;

	}
</style>