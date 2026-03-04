<template>
	<view class="container">
		<view class="header">
			<view class="header-left" @click="router('tools/tools')">
				<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
					<rect id="矩形" width="22" height="22" fill="none" />
					<path id="路径" d="M13.56,2c.24,0,.44-.45.44-1s-.2-1-.44-1H.44C.2,0,0,.45,0,1S.2,2,.44,2Z"
						transform="translate(0 2)" fill="#6c7172" />
					<path id="路径-2" data-name="路径"
						d="M14.53,2c.26,0,.47-.45.47-1s-.21-1-.47-1H.47C.21,0,0,.45,0,1S.21,2,.47,2Z"
						transform="translate(7 18)" fill="#6c7172" />
					<path id="路径-3" data-name="路径"
						d="M21.31,2c.38,0,.69-.45.69-1s-.31-1-.69-1H.69C.31,0,0,.45,0,1S.31,2,.69,2Z"
						transform="translate(0 10)" fill="#6c7172" />
				</svg>

			</view>
			<view class="header-center">
				<image class="logo" src="/static/logo.png" mode="aspectFit"></image>
			</view>
			<view class="header-right">
				<image class="user-image" src="/static/user.png" mode="aspectFit"></image>
			</view>
		</view>

		<view class="greeting">
			<text class="welcome">欢迎回来，Lili</text>
			<text class="question">你今天感觉怎么样 ？</text>
		</view>

		<view class="mood-section">
			<view class="mood-icon" v-for="(item, index) in moods" :key="index">
				<image :src="item" mode="aspectFit"></image>
				<text>{{ moodLabels[index] }}</text>
			</view>
		</view>


		<view class="suggestion-item">
			<view class="suggestion-left">
				<text class="suggestion-title">健康生活</text>
				<text class="suggestion-description">辅助信息示例文本技术，定制健康生活方式</text>
				<button class="start-button">立即开始</button>
			</view>
			<view class="suggestion-right">
				<image class="suggestion-image" src="/static/healthy-life.png" mode="aspectFit"
					style="width: 148.05px;height: 99px;"></image>
				<view class="color-rect"></view>
			</view>
		</view>

		<view class="suggestion-item">
			<view class="suggestion-left">
				<text class="suggestion-title">有氧运动</text>
				<text class="suggestion-description">初学者或有经验的专业人士的运动方案定制</text>
				<button class="start-button">立即开始</button>
			</view>
			<view class="suggestion-right">
				<image class="suggestion-image" src="/static/aerobic.png" mode="aspectFit"
					style="width: 129px;height: 129px;"></image>
				<view class="color-rect"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		router
	} from '@/utils/app';
	export default {
		name: 'IndexPage',
		data() {
			return {
				moods: [
					'/static/happy.png',
					'/static/relaxed.png',
					'/static/neutral.png',
					'/static/sad.png'
				],
				moodLabels: ['兴奋', '放松', '一般', '焦虑']
			};
		},
		methods: {
			router
		}
	};
</script>

<style scoped>
	.container {
		padding: 18px;
		background-color: #ffffff;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.header-left,
	.header-right {
		width: 20px;
	}

	.header-center {
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}

	.logo {
		width: 59px;
		height: 59px;
	}

	.user-image {
		width: 36px;
		height: 36px;
		border-radius: 50%;
	}

	.greeting {
		display: flex;
		flex-wrap: wrap;
		margin-top: 50px;
		margin-bottom: 20px;

	}

	.welcome {
		width: 100%;
		color: #040505;
		font-size: 24px;
		margin-bottom: 5px;
	}

	.question {
		color: #42484A;
		font-size: 18px;
	}

	.mood-section {
		display: flex;
		justify-content: space-around;
		margin-top: 26px;
		margin-bottom: 20px;
	}

	.mood-icon {
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.mood-icon image {
		width: 62px;
		height: 65px;
		margin-bottom: 5px;
	}

	.mood-icon text {
		width: 100%;
		font-size: 12px;
		color: #818586;
	}

	.suggestion-item {
		display: flex;
		align-items: center;
		background-color: #F4F8EC;
		border-radius: 20px;
		padding: 15px;
		margin-bottom: 20px;
	}

	.suggestion-left {
		display: flex;
		flex-direction: column;
		margin-left: 15px;
		margin-right: 4px;
	}

	.suggestion-title {
		font-size: 21px;
		margin-top: 10px;
		margin-bottom: 5px;
		color: #4B9145;
	}

	.suggestion-description {
		width: 145px;
		font-size: 13px;
		color: #818586;
		margin-bottom: 10px;
	}

	.start-button {
		width: 129px;
		height: 38px;
		line-height: 38px;
		background-color: #61B15A;
		color: #ffffff;
		border: none;
		font-size: 14px;
		margin-left: -2px;
		border-radius: 10px;
		margin-bottom: 10px;
	}

	.suggestion-right {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.suggestion-image {
		width: 80px;
		height: 80px;
		mix-blend-mode: multiply;
		/* 	  正片叠底 */
	}

	.color-rect {
		width: 56px;
		height: 12px;
		background-color: #DEEBC6;
		margin-top: 5px;
	}
</style>