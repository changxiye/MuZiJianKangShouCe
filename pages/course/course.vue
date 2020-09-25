<template>
	<view>
		<view class="courseTop">
			<view class="topLeftBox">
				<view class="cu-avatar xl round margin-right  bg-red">D</view>
				<view class="userInfo">
					<view>宝妈名称</view>
					<text>摘要信息</text>
				</view>
			</view>
			<view>></view>
		</view>
		
		<ul class="tabBox">
			<li>
				<view><text class="symbol">￥</text>0.00</view>
				<view>账户余额</view>
			</li>
			<li>
				<text class="redDot">1</text>
				<view>优惠券</view>
			</li>
			<li>
				<view>2</view>
				<view>我的订单</view>
			</li>
			<li>
				<view>2</view>
				<view>所有课程</view>
			</li>
		</ul>
		
		<view class="videoListBox">
			<view class="title">继续学习</view>
			<ul class="videoList">
				<li>
					<view class="cu-avatar xl radius margin-right bg-red"></view>
					<view class="videoInfo">
						<view class="caption">产后修复神器，康复盆底肌、不留月子病</view>
						<view class="tigsBox">
							<text class="margin-right">共20节课</text>
							<text>已完成：30%</text>
						</view>
					</view>
				</li>
			</ul>
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
.courseTop{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding:32upx;
	background-color: #FFF;
	border-bottom: 2upx solid #EEEEEE;
	
	.topLeftBox{
		display: flex;
		align-items: center;
		
		.userInfo{
			
			&>view{
				color:#333333;
				font-size: 32upx;
				line-height: 40upx;
			}
			
			&>text{
				color:#999999;
			}
		}
	}
}

.tabBox{
	display: flex;
	background-color: #FFFFFF;
	padding:32upx 0;
	
	li{
		flex:1;
		text-align: center;
		font-size: 28upx;
		
		.symbol{
			color: #F82424;
			font-size: 16upx;
		}
		
		&>view:last-child{
			color: #999999;
			font-size: 24upx;
			margin-top: 10upx;
		}
		.redDot{
			position: relative;
			width: auto;
		}
		.redDot::after{
			content: "";
			position: absolute;
			top:4upx;
			right: -8upx;
			display: block;
			width: 8upx;
			height: 8upx;
			background-color: #F82424;
			border-radius: 50%;
		}
	}
}

.videoListBox{
	padding:32upx;
	background-color: #FFF;
	.title{
		font-weight: bold;
	}
	
	.videoList{
		
		
		li{
			display: flex;
			padding:32upx 0;
			border-bottom: 2upx solid #EEEEEE;
			
			.cu-avatar{
				flex-shrink: 0;
			}
			.caption{
				font-size: 32upx;
			}
			
			.tigsBox{
				color: #9B9B9B;
				font-size: 24upx;
			}
			
			.videoInfo{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
		}
	}
}
</style>
