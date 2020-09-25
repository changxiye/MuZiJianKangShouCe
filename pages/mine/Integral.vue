<template>
	<view>
		<view class="tab_box">
			<view class="active">积分订单</view>
			<view>积分规则</view>
		</view>
		<view class="integral_box">
			<view class="title_box">积分明细</view>
			<view class="list_box">
				<view class="item_box border-b" v-for="(item,index) in 6">
					<view class="item_left">
						<view class="item_icon">

						</view>
						<view class="item_text">
							完成下单
						</view>
					</view>

					<view class="item_right">
						+14
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.tab_box {
		display: flex;
		height: 84rpx;
		line-height: 84rpx;
		font-size: 32rpx;
		background-color: #FFFFFF;

		>view {
			flex: 1;
			text-align: center;
		}

		.active {
			color: #1677FF;
			position: relative;
			font-weight: bold;

			&::before {
				position: absolute;
				content: "";
				height: 100%;
				width: 50%;
				left: 50%;
				margin-left: -25%;
				border-bottom: 4rpx solid #1677FF;
			}
		}
	}
	.integral_box{
		.title_box{
			font-size: 30rpx;
			color: #333333;
			height: 90rpx;
			line-height: 90rpx;
			padding: 0 24rpx;
			font-weight: bold;
		}
		.list_box{
			padding: 0 24rpx;
			.item_box{
				padding: 24rpx 0;
				display: flex;
				justify-content: space-between;
				font-size: 34rpx;
				.item_left{
					display: flex;
					align-items: center;
					
					.item_icon{
						width: 56rpx;
						height: 56rpx;
						background-color:  #CCCCCC;
					}
					.item_text{
						margin-left: 24rpx;
					}
				}
			
			}
		}
	}
</style>
