<template>
	<view class="profile-container">
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
				<text style="color: #61B15A; font-size: 15px;">热量报告</text>
			</view>
		</view>

		<view class="avatar-box">
			<image class="avatar" src="/static/avatar.png"></image>
			<view class="user-info">
				<text class="username">Lili</text>
				<text class="location">河南 郑州</text>
			</view>
		</view>
		<view class="tabs">
			<text class="tab active">数据统计</text>
			<text class="tab">个人成就</text>
		</view>
		<view class="chart">
			<view class="chart-text">
				<text class="title">本周数据</text>
				<text class="subtitle">2022.11.08-11.14 <svg id="箭头" xmlns="http://www.w3.org/2000/svg" width="20"
						height="20" viewBox="0 0 20 20">
						<rect id="矩形" width="20" height="20" fill="none" />
						<path id="路径"
							d="M4,5a.607.607,0,0,1-.447-.2L.185,1.164A.721.721,0,0,1,.185.2a.6.6,0,0,1,.893,0L4,3.354,6.922.2a.6.6,0,0,1,.893,0,.721.721,0,0,1,0,.964L4.447,4.8A.607.607,0,0,1,4,5Z"
							transform="translate(7 7.5)" fill="#a1a4a5" />
					</svg>
				</text>
			</view>

			<image class="bar-chart" src="/static/bar-chart.png"></image>
		</view>
	</view>


</template>

<script>
	import { router } from '@/utils/app';
	export default {
		name: 'ProfilePage',
		data() {
			return {
				activeTab: 'data'
			};
		},
		methods: {
			setActiveTab(tab) {
				this.activeTab = tab;
			},
			router
		}
	};
</script>

<style scoped>
	.profile-container {
		padding: 18px;
		background-color: #ffffff;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.header-left {
		width: 20px;
	}

	.header-right {

		width: 60px;
	}

	.header-center {
		margin-left: 40px;
		display: flex;
		justify-content: center;
	}

	.logo {
		width: 59px;
		height: 59px;
	}

	.avatar-box {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	.avatar {
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}

	.user-info {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.username {
		margin-top: 14px;
		font-size: 24px;
	}

	.location {
		margin-top: 7px;
		font-size: 14px;
		color: #888;
	}

	.tabs {
		display: flex;
		margin-top: 30px;
	}

	.tab {
		width: 50%;
		font-size: 16px;
		text-align: center;
		color: #333;
	}

	.active {
		color: #61B15A;
		padding-bottom: 10px;
		border-bottom: 1px solid #61B15A;
	}

	.chart-text {
		display: flex;
		margin-top: 22px;
		justify-content: space-between;
	}

	.title {
		font-size: 18px;
		color: #42484A;
	}

	.subtitle {
		font-size: 14px;
		color: #61B15A;
	}
	
	.bar-chart{
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: 14px;
	}
	.bar-chart image{
		width: 315px;
		height: 206px;
	}
</style>