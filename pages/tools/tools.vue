<template>
	<view class="container">
		<view class="header">
			<view class="header-left" @click="returnIndex()">
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
		<view class="tool-title">工具</view>
		<view class="tools-list">
			<view class="tool-item" v-for="(item, index) in tools" :key="index" @click="menuRouter(index)">

				<image :src="item.icon" mode="aspectFit"></image>

			</view>
		</view>
	</view>
</template>

<script>
	import {
		returnIndex,
		router
	} from '@/utils/app';
	export default {
		name: 'ToolsPage',
		data() {

			return {
				tools: [{
						title: '情绪日记',
						icon: '/static/mood.png'
					},
					{
						title: '健康生活',
						icon: '/static/health.png'
					},
					{
						title: '有氧运动',
						icon: '/static/exercise.png'
					},
					{
						title: '睡眠监测',
						icon: '/static/sleep.png',
					},
					{
						title: '目标制定',
						icon: '/static/goal.png'
					}
				]
			};
		},
		methods: {
			returnIndex,
			menuRouter(i) {
				if (i == 3) {
					router('sleep-report/sleep-report')
					// console.log(1)
				}
			}
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

	.title {
		font-size: 18px;
		color: #333333;
	}

	.tools-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.tool-item {
		margin-bottom: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;

	}

	.tool-item image {
		width: 153px;
		height: 115px;
	}

	.tool-item:last-child {
		margin-left: 2%;
		margin-right: auto;
		/* 移除最后一个元素的右边距 */
	}

	.tool-title {
		font-size: 24px;
		color: #42484A;
		margin-top: 18px;
		margin-bottom: 20px;
	}
</style>