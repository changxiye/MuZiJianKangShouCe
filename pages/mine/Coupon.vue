<template>
	<view>
		<view class="tab_box">
			<view class="active">未使用</view>
			<view>已过期</view>
			<view>已使用</view>
		</view>
		<view class="coupon_list">
			<view class="item_box" v-for="(item,index) in 6" :key="index">
				<view class="item_left">
					<view><text>5</text>元</view>
					<view>满减券</view>
				</view>
				<view class="item_middle">
					<view>5元减免券</view>
					<view>满100减5元</view>
					<view>有效期: 2019.08.30-2019.12.30</view>
				</view>
				<view class="item_right">
					<view class="item_btn">立即使用</view>
					<!-- <view class="item_btn past_due">已过期</view> -->
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
 .tab_box{
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  display: flex;
	  height: 84rpx;
	  line-height: 84rpx;
	  font-size:32rpx;
	  background-color: #FFFFFF;
	  >view{
		  flex: 1;
		  text-align: center;
	  }
	  .active{
		  color: #1677FF;
		  position: relative;
		  	font-weight: bold;
		  &::before{
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
	.coupon_list {
		padding: 123rpx 24rpx;
		font-family: Helvetica;

		.item_box {
			display: flex;
			background-color: #FFFFFF;
			margin-bottom: 27rpx;
			padding-top: 40rpx;
			padding-bottom: 16rpx;
			.item_left {
				flex: 1;
				text-align: center;

				>view:nth-child(1) {
					color: #FF6010;
					font-size: 24rpx;

					>text {
						font-size: 50rpx;
					}
				}

				>view:nth-child(2) {
					font-size: 24rpx;
					color: #999999;
				}
			}

			.item_middle {
				flex: 2;

				>view:nth-child(1) {
					font-size: 30rpx;
					font-weight: bold;
					margin-bottom: 16rpx;
				}

				>view:nth-child(2) {
					font-size: 26rpx;
					color: #999999;
					margin-bottom: 43rpx;
				}

				>view:nth-child(3) {
					font-size: 24rpx;
					color: #999999;
				}
			}

			.item_right {
				flex: 1;

				.item_btn {
					margin-top: 23rpx;
					width: 144rpx;
					height: 49rpx;
					line-height: 49rpx;
					text-align: center;
					border-radius: 25rpx;
					background-color: #1677FF;
					color: #FFFFFF;
					font-size: 24rpx;
				}

				.past_due {
					background-color: #ABABAB;
				}
			}
		}
	}
</style>
