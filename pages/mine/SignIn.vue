<template>
	<view>
		<view class="top_box">
			<view class="middle_one">
				<view class="integral">
					<text class="num">2930</text>
					<text>积分</text>
				</view>
				<view class="hint_text">连续7天签到可得好礼！</view>
			</view>
			<view class="middle_two">
				<view class="signin_top">
					<view>已连续签到3天</view>
					<view class="switch_box">
						<view>签到提醒</view>
						<view>
							<switch color="#FF75A9" checked="true" @change="" style="transform:scale(0.7)" />
						</view>
					</view>
				</view>
				<view class="signin_list">
					<block v-for="(item,index) in SignInList" :key="index">
						<view class="signin_item" :class="item.IsSignin==true?'active':''">
							<view class="item_sum">+{{item.gold}}</view>
							<view class="item_week">{{item.week}}</view>
						</view>
					</block>

				</view>
				<view class="signin_btn" @click="SignIn">
					签到领奖励
				</view>
			</view>
			<view class="middle_three">
				<image src="../../static/img/signin2.png" mode=""></image>
			</view>
		</view>
		<view class="bottom_box">
			<view class="title_box">
				活动规则
			</view>
			<view class="list_box">
				<view class="item_box">
					<view class="icon_box">1</view>
					<view class="item_text">连续签到7天，可获得400积分。</view>
				</view>
				<view class="item_box">
					<view class="icon_box">2</view>
					<view class="item_text">可通过每日签到/做积分任务等活动获得积分， 积分可在积分商城兑换好礼。</view>
				</view>
				<view class="item_box">
					<view class="icon_box">3</view>
					<view class="item_text">完善个人资料，平台也会奖励个人积分。</view>
				</view>
				<view class="item_box">
					<view class="icon_box">4</view>
					<view class="item_text">获得积分越多，个人会员等级越高。</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				SignInList: [{
						week: "周一",
						gold: 2,
						IsSignin: true
					},
					{
						week: "周二",
						gold: 2,
						IsSignin: true
					},
					{
						week: "周三",
						gold: 2,
						IsSignin: true
					},
					{
						week: "周四",
						gold: 3,
						IsSignin: false
					},
					{
						week: "周五",
						gold: 5,
						IsSignin: false
					},
					{
						week: "周六",
						gold: 5,
						IsSignin: false
					},
					{
						week: "周日",
						gold: 5,
						IsSignin: false
					},
				]
			};
		},
		methods:{
			SignIn(){
				var week= new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");  
				var index = new Date().getDay();  
				console.log(week[index]);
				for(var i=0;i<this.SignInList.length;i++){
					if(this.SignInList[i].week==week[index]){
						this.SignInList[i].IsSignin=true;
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF;
	}

	.top_box {
		height: 901rpx;
		margin-bottom: 20rpx;
		font-family: Helvetica;
		background: url(../../static/img/signin1.png) no-repeat center center /100% 100%;
		.middle_one {
			height: 265rpx;
			padding-top: 99rpx;
			margin-left: 60rpx;

			.integral {
				font-size: 24rpx;
				color: #ffffff;
				text-shadow: 0 2rpx 34rpx  #FFC000;
				.num {
					font-size: 66rpx;
				}
			}

			.hint_text {
				font-size: 30rpx;
				color: #FFFFFF
			}
		}

		.middle_two {
			margin: 0 36rpx;
			padding: 30rpx;
			height: 362rpx;
			border-radius: 30rpx;
			box-shadow: 0rpx 2rpx 24rpx 0rpx rgba(0, 0, 0, 0.06);
			background-color: #FFFFFF;
			margin-bottom: 42rpx;

			.signin_top {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 20rpx;

				.switch_box {
					display: flex;
					align-items: center;
				}
			}

			.signin_list {
				display: flex;
				justify-content: space-between;
				margin-bottom: 40rpx;

			

				.signin_item {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					font-size: 24rpx;
					width: 72rpx;
					height: 100rpx;
					border-radius: 10rpx;
					background-color: #F5F5F5;
					color: #999999;

					.item_sum {
						width: 44rpx;
						height: 44rpx;
						text-align: center;
						line-height: 44rpx;
						margin-bottom: 5rpx;
						border-radius: 50%;
						color: #666666;
						background-color: #E6E6E6;
					}
				}
				.active {
					background-color: #FF75A9 ;
					color: #FFFFFF ;
				
					.item_sum {
						background-color: #D93F79 ;
						color: #FFFFFF;
					}
				}
			}

			.signin_btn {
				font-size: 34rpx;
				width: 100%;
				height: 84rpx;
				line-height: 84rpx;
				text-align: center;
				background: linear-gradient(180deg, #ffbfd7, #ff75a9);
				box-shadow: 0px 2px 20px 0px #ff75a9;
				border-radius: 42rpx;
				color: #FFFFFF;

			}
		}

		.middle_three {
			height: 202rpx;
			background-color: #FFFFFF;
			margin: 0 36rpx;

			>image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.bottom_box {
		margin: 0 36rpx;
		margin-bottom: 96rpx;
		padding: 36rpx 30rpx;
		background: #ffffff;
		box-shadow: 0px 2rpx 24rpx 0px rgba(0, 0, 0, 0.1);

		.title_box {
			font-size: 36rpx;
			font-weight: bold;
			margin-bottom: 30rpx;
		}

		.list_box {
			.item_box {
				display: flex;
				align-items: center;
				padding: 10rpx 0;
				font-size: 28rpx;

				.icon_box {
					width: 44rpx;
					height: 44rpx;
					line-height: 44rpx;
					text-align: center;
					font-size: 24rpx;
					color: #FF75A9;
					background-color: #FCDAF6;
					border-radius: 22px;

				}

				.item_text {
					flex: 1;
					margin-left: 16rpx;
				}
			}
		}
	}

	.uni-switch .wx-switch-input:not([class*="bg-"]),
	uni-switch .uni-switch-input:not([class*="bg-"]) {
		background-color: rgb(255, 117, 169) !important;
	}
</style>
