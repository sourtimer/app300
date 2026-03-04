<template>
	<view class="container">
		<view class="header">
			<view class="header-left" @click="returnIndex">
				<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
					<rect id="矩形" width="22" height="22" fill="none" />
					<path id="路径"
						d="M0,9.927a.95.95,0,0,1,.279-.619.962.962,0,0,1,.161-.13L9.366.28A.956.956,0,0,1,10.8,1.54l-.08.09L2.325,10l8.395,8.371a.952.952,0,0,1,.08,1.26l-.08.09a.959.959,0,0,1-1.264.079l-.09-.079-8.928-8.9a.962.962,0,0,1-.159-.128A.95.95,0,0,1,0,10.073Z"
						transform="translate(0 1)" fill="#6c7172" />
				</svg>


			</view>
			<view class="header-center">
				<image class="logo" src="/static/logo.png" mode="aspectFit"></image>
			</view>
			<view class="header-right">
				<image class="user-image" src="/static/user.png" mode="aspectFit"></image>
			</view>
		</view>

		<view class="text-box">
			<text class="title">睡眠监测</text>
			<text class="subtitle">2022.11.08-11.14
				<svg id="箭头" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
					<rect id="矩形" width="20" height="20" fill="none" />
					<path id="路径"
						d="M4,5a.607.607,0,0,1-.447-.2L.185,1.164A.721.721,0,0,1,.185.2a.6.6,0,0,1,.893,0L4,3.354,6.922.2a.6.6,0,0,1,.893,0,.721.721,0,0,1,0,.964L4.447,4.8A.607.607,0,0,1,4,5Z"
						transform="translate(7 7.5)" fill="#a1a4a5" />
				</svg>
			</text>
		</view>
		<view class="sleep-stats">
			<view class="stat-item">
				<view>
					<image class="icon" src="/static/moon.png"></image>
				</view>
				<text class="time">5h 30m</text>
				<text class="label">睡眠时长</text>
			</view>
			<view class="stat-item" style="background-color: #61B15A;">
				<view>
					<image class="icon" src="/static/z.png"></image>
				</view>
				<text class="time">1h 10m</text>
				<text class="label">浅睡</text>
			</view>
			<view class="stat-item">
				<view>

					<image class="icon" src="/static/star.png"></image>
				</view>
				<text class="time">4h 20m</text>
				<text class="label">深睡</text>
			</view>
		</view>

		<view class="text-box">
			<text class="sleep-title">入睡时间</text>
		</view>
		<image class="bar-chart" src="/static/sleep-time.png"></image>
	</view>
</template>

<script>
	import {
		returnIndex
	} from '@/utils/app';
	export default {
		name: 'SleepReportPage',
		methods: {
			returnIndex
		}
	};
</script>

<style scoped>
	.container {
		padding: 20px;
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

	.text-box {

		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.title {
		font-size: 24px;
		color: #42484A;

	}

	.sleep-title {
		font-size: 24px;
		color: #42484A;
		margin-top: 39px;
	}

	.subtitle {
		color: #61B15A;
	}

	.sleep-stats {
		margin-top: 22px;
		display: flex;
		justify-content: space-between;
	}

	.stat-item {
		display: flex;
		width: 100px;
		height: 163px;
		background-color: #ADCE74;
		border-radius: 10px;
		text-align: center;
		color: white;
		align-items: center;
		flex-direction: column;
		align-content: center;
	}

	.icon {
		width: 20px;
		height: 20px;
		font-size: 24px;
		margin-top: 40px;
		margin-bottom: 5px;
	}

	.time {
		width: 100px;
		font-size: 18px;
		margin-bottom: 5px;
	}

	.label {
		width: 100px;
		font-size: 12px;
	}

	.bar-chart {
		width: 325px;
		height: 186px;
		margin-top: 22px;
	}
</style>