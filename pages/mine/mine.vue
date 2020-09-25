<template>
	<view class="mineBox">
		<view class="userInfo flex">

			<view class="userTextBox flex">
				<view class="avatar">
					<image class="user_pic" :src="userInfo.avatarUrl" mode=""></image>
				</view>
				<view>
					<view>
						<text>{{userInfo.realName}}</text>
						<text class="level">LV.{{myScore.mlevel}}</text>
					</view>
					<view class="digest ">摘要信息</view>
				</view>

			</view>
			<navigator class="identification btn" url="attestation" hover-class="none">认证</navigator>
		</view>
		<view class="tabBox">
			<navigator class="tabItem"  url="shoppingCart" hover-class="none">
				<view class="imgBox">
					<image src="../../static/img/user1.png" mode=""></image>
				</view>
				<view>购物车</view>
			</navigator>
			<navigator class="tabItem"  url="Integral" hover-class="none">
				<view class="imgBox">
					<image src="../../static/img/user2.png" mode=""></image>
				</view>
				<view>积分</view>
			</navigator>
			<navigator class="tabItem"  url="Coupon" hover-class="none">
				<view class="imgBox">
					<image src="../../static/img/user3.png" mode=""></image>
				</view>
				<view>优惠券</view>
			</navigator>
			<navigator class="tabItem" url="MyAddress" hover-class="none">
				<view class="imgBox">
					<image src="../../static/img/user4.png" mode=""></image>
				</view>
				<view>地址管理</view>
			</navigator>
		</view>
		<navigator url="SignIn" hover-class="none">
			<view class="banner_box">
			<image src="../../static/img/user5.png" mode=""></image>
			</view>
		</navigator>
	
		<view class="member cardBox">
			<view class="title">
				<view>会员投稿</view>
				<navigator class="btn" url="contribute" hover-class="none">投稿</navigator>
			</view>
			<ul>
				<li @click="goContributeRecord">
					<view>10</view>
					<text>全部</text>
				</li>
				<li>
					<view>5</view>
					<text>已投稿</text>
				</li>
				<li>
					<view>2</view>
					<text>待审核</text>
				</li>
				<li>
					<view>3</view>
					<text>已发布</text>
				</li>
			</ul>
		</view>
		<view class="order cardBox">
			<navigator class="title"  url="MyOrder" hover-class="none">
				<view>我的订单</view>
				<view class="icon"></view>
			</navigator>
			<ul>
				<li>
					<view>5</view>
					<text>待支付</text>
				</li>
				<li>
					<view>6</view>
					<text>待发货</text>
				</li>
				<li>
					<view>7</view>
					<text>待收货</text>
				</li>
				<li>
					<view>10</view>
					<text>待评价</text>
				</li>
			</ul>
		</view>
		<view class="pushBox cardBox">
			<navigator class="title" url="MyPush" hover-class="none">
				<view>我是推客官</view>
				<view class="icon"></view>
			</navigator>
			<ul>
				<li>
					<view>10</view>
					<text>我的线下</text>
				</li>
				<li>
					<view>20.21</view>
					<text>我的收益</text>
				</li>

			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myScore: {}, //会员级别，积分
				userInfo: {}, //用户信息
			};
		},
		mounted() {
			this.getUser();
			this.getMyScore();
		},
		methods: {

			getUser() {
				this.userInfo = this.$store.state.user.userInfo;
			},
			getMyScore() {
				this.$H.get('/member/memberInfo/getMyScore', {}, {
					token: true
				}).then(res => {
					console.log('获取会员级别、积分', res);
					if (res.code == 1) {
						this.myScore = res.data;
					}
				})
			},
	
			//跳转投稿记录
			goContributeRecord(){
				uni.navigateTo({
					url:'ContributeRecord'
				})
			}

		}
	}
</script>

<style lang="scss">
	.banner_box {
		margin: 24rpx;
		height: 181rpx;
		>image{
			width: 100%;
			height: 100%;
		}
	}

	.mineBox {
		.btn {
			width: 96upx;
			height: 50upx;
			background: #ff75a9;
			border-radius: 26upx;
			color: #FFFFFF;
			text-align: center;
			line-height: 50upx;
			font-size: 24upx;

		}

		.userInfo {
			padding: 38upx;
			background-color: #FFF;
			justify-content: space-between;
			margin-bottom: 20upx;



			.avatar {
				width: 120upx;
				height: 120upx;
				border-radius: 50%;
				background-color: pink;
				margin-right: 24upx;
				overflow: hidden;
				.user_pic{
					width: 100%;
					height: 100%;
				}
			}

			.userTextBox {
				align-items: center;

				.level {
					color: #FF75A9;
					font-size: 20upx;
					margin-left: 20upx;
				}

				.digest {
					color: #999999;
					font-size: 20upx;
					margin-top: 4upx;
				}
			}

			.identification {
				margin-top: 20upx;
			}

		}

		.tabBox {
			display: flex;
			justify-content: space-between;
			padding: 26upx 40upx;
			background-color: #FFF;
			align-items: center;
			margin-bottom: 20upx;


			.imgBox {
				width: 42upx;
				height: 42upx;
				margin-bottom: 18upx;
				>image{
					width: 100%;
					height: 100%;
				}
			}

			.tabItem {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 24upx;
			}
		}

		.cardBox {
			margin: 24upx;
			background-color: #FFF;
			border-radius: 18upx;

			.title {
				display: flex;
				justify-content: space-between;
				padding: 22upx;
				font-size: 26upx;
				font-weight: bold;
				align-items: center;
				border-bottom: 1px solid #EEE;

				.icon {
					width: 20upx;
					height: 20upx;
					border-top: 1px solid #999999;
					border-right: 1px solid #999999;
					transform: rotate(45deg);
				}
			}

			ul {
				display: flex;
				justify-content: space-between;
				padding: 40upx;

				li {
					display: flex;
					flex-direction: column;
					align-items: center;

					view {
						font-size: 36upx;
						font-weight: bold;
					}

					text {
						font-size: 24upx;
						margin-top: 4upx;
					}
				}
			}


		}

		.pushBox {
			ul {
				justify-content: center;

				li {
					width: 50%;
				}
			}

		}

	}
</style>
