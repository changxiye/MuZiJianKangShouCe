<template>
	<view>
		<view class="top_box">
			<view>
				<view class="take_price">
					20.00
				</view>
				<view class="take_text">
					我的收益
				</view>
				<view class="take_btn" @click="goTake">
					提现
				</view>
			</view>
		</view>
		<view class="middle_box">
			<view class="title_box border-b">
				收益详情
			</view>
			<view class="middle_one">
				<view class="item_box" v-for="(item,index) in 5" :key="index">
					<view class="item_left">
						<view>下线</view>
						<view class="blue">三个月孕期的妈妈</view>
						<view>购买儿童玩具商品</view>
					</view>
					<view class="item_right">
						+10.00
					</view>
				</view>
			</view>
		</view>
		<view class="middle_box">
			<view class="title_box border-b">
				我的下线
			</view>
			<view class="middle_two">
				<view class="item_box" v-for="(item,index) in 9" :key="index">
					<view class="user_pic">

					</view>
					<view class="user_name">奔波霸</view>
				</view>
			</view>
			<view class="load_more">加载更多</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goTake() {
                uni.navigateTo({
                	url: 'Take',
                });
			}
		}
	}
</script>

<style lang="scss">
	.top_box {
		height: 325rpx;
		background-color: $uni-bg-pink;

		>view {
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			color: #FFFFFF;

			.take_price {
				font-size: 72rpx;
				margin-bottom: 10rpx;
			}

			.take_text {
				font-size: 35rpx;
				margin-bottom: 35rpx;
			}

			.take_btn {
				width: 145rpx;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				border-radius: 25rpx;
				border: 1px solid #FFFFFF;
				font-size: 24rpx;
			}
		}
	}

	.middle_box {
		margin: 27rpx 24rpx;
		border-radius: 16rpx;
		background-color: #FFFFFF;
		box-shadow: #CCCCCC;

		.title_box {
			height: 90rpx;
			line-height: 90rpx;
			font-size: 30rpx;
			font-weight: bold;
			padding: 0 24rpx;
		}

		.middle_one {
			padding: 0 30rpx;
			height: 334rpx;

			.item_box {
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				align-items: center;
				height: 64rpx;

				.item_left {
					display: flex;

					.blue {
						color: #67A2E6;
					}
				}
			}
		}

		.middle_two {
			height: 334rpx;
			display: flex;
			flex-wrap: wrap;

			.item_box {
				width: calc(100%/5);
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.user_pic {
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
					border: 1rpx solid #CCCCCC;
					margin-bottom: 15rpx;
				}

				.user_name {
					font-size: 24rpx;
					color: #333333;
				}
			}
		}
	}

	.load_more {
		padding: 15rpx 0;
		width: 100%;
		text-align: center;
		color: #9B9B9B;
		font-size: 24rpx;
	}
</style>
