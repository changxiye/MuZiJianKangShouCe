<template>
	<view>
		<view class="box">
			<view class="middle_one">
				<view class="pic_box">

				</view>
				<view class="bank_box">
					<view>
						<view class="bank_name">工商银行(1234)</view>
						<view class="hint_text">2小时内到账</view>
					</view>
					<view class="icon">

					</view>
				</view>
			</view>
			<view class="middle_two">
				<view class="title_box">提现金额</view>
				<view class="ipt_box">
					<view class="icon"></view><input type="text" value="5956" />
				</view>
				<view class="take_price">
					<view>可提现金额：<text class="red">6000.00</text>元</view>
					<view class="record">提现记录</view>
				</view>
				<view class="all_box">
					<view class="icon"></view>
					<view class="take_hite">每天单笔提现金额不可超过1万元</view>
					<view class="all_take">全部提现</view>
				</view>
			</view>
			<view class="take_btn">
				确认提现
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
	.box {
		position: relative;
		background-color: #FFFFFF;
		top: 60rpx ;
		height:85vh;
		.middle_one {
			height: 200rpx;
			display: flex;
			align-items: center;
			padding: 0 30rpx;
		}

		.pic_box {
			width: 60rpx;
			height: 60rpx;
			border-radius: 50%;
			border: 1rpx solid #CCCCCC;
		}

		.bank_box {
			flex: 1;
			margin-left: 30rpx;
			display: flex;
			justify-content: space-between;

			.bank_name {
				font-size: 26rpx;
				font-weight: bold;
				margin-bottom: 10rpx;
			}

			.hint_text {
				font-size: 24rpx;
				color: #666666;
			}
		}
	}

	.middle_two {
		padding: 0 50rpx;

		.title_box {
			height: 90rpx;
			line-height: 90rpx;
		}

		.ipt_box {
			display: flex;
			align-items: center;

			>input {
				font-size: 50rpx !important;
				font-weight: bold;
			}
		}

		.take_price {
			display: flex;
			font-size: 24rpx;
			color: #333333;
			justify-content: space-between;
			margin-bottom: 10rpx;
			
			.red{
				color:#FA3E62 ;
				font-size: 28rpx;
				font-weight: bold;
			}
			.record{
				color: #666666;
			}
		}
		.all_box{
			display: flex;
			align-items: center;
			font-size: 24rpx;
			color: #999999;
			.all_take{
				color: #1D97FD;
				margin-left: 30rpx;
			}
		}
	}
	.take_btn{
		margin: 60rpx 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 50rpx;
		background-color: #1D97FD;
		color: #FFFFFF;
		text-align: center;
	}
</style>
