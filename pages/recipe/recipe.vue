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

		<view class="content">
			<view class="card">
				<view class="card-text">
					<text class="card-title">健康饮食</text>
					<text class="card-subtitle">为你的健康生活保驾护航</text>
					<button class="start-button">立即开始</button>
				</view>
			</view>
			<view class="menu-list">
				<view class="menu-item" v-for="item in menuItems" :key="item.id">
					<image class="menu-icon" :src="item.icon" mode="aspectFit"></image>
					<text class="menu-title">{{ item.title }}</text>
					<text class="menu-count">{{ item.count }}</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import { router } from '@/utils/app';
	export default {
		name: 'RecipePage',
		data() {
			return {
				menuItems: [{
						id: 1,
						icon: '/static/vitamin.png',
						title: '维他命',
						count: 20
					},
					{
						id: 2,
						icon: '/static/lung.png',
						title: '润肺',
						count: 15
					},
					{
						id: 3,
						icon: '/static/heart.png',
						title: '滋养心脏',
						count: 39
					},
					{
						id: 4,
						icon: '/static/kidney.png',
						title: '滋养护肾',
						count: 50
					}
				]
			};
		},
		methods:{
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


	.content {
		flex: 1;
		margin-top: 40px;
	}

	.card {
	    width: 339px;
	    height: 195px;
	    background-image: url('/static/recipe-image.png');
	    background-size: cover;
	    background-position: center;
	    border-radius: 20px;
	    overflow: hidden;
	    position: relative; /* 使绝对定位的子元素相对于此元素定位 */
	  }
	  .card-text {
		margin-top: 29px;
		margin-left: 37px;
	    color: white;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		    align-content: flex-start;
	  }
	  .card-title {
	    font-size: 24px;
	    margin-bottom: 10px;
	  }
	  .card-subtitle {
	    font-size: 15px;
	    margin-bottom: 20px;
	  }
	  .start-button {
		width: 126px;
		height: 39px;
	    background-color: white;
	    color: #333;
	    border: none;
	    border-radius: 10px;
		margin-left: -4px;
	    cursor: pointer;
	    font-size: 14px;
	  }

	.menu-list {
		display: flex;
		flex-direction: column;
		margin-top: 40px;
	}

	.menu-item {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.menu-icon {
		width: 65px;
		height: 65px;
		margin-right: 10px;
		font-size: 24px;
		color: #6c7172;
		margin-left: 20px;
	}

	.menu-title {
		width: 72px;
		font-size: 18px;
		margin-left: 19px;
		margin-right: 108px;
	}

	.menu-count {
		font-size: 14px;
		color: #999999;
	}
</style>