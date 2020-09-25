<template>
	<!-- 母子健康计划 -->
	<view class="content">
		<!-- top -->
		<view class="content_top_box" @click="goGestateType">
			<view class="content_top">
				<view class="top_text">{{aexFlag}}</text>
					<text>您已经怀孕{{week}}周{{Day}}天了</text>
				</view>
				<view class="bottom_text">
					预计还有
					<text>{{predictDay}}</text>
					天预产期
				</view>
				<block></block>
			</view>
			<view class="tig">如果您宝宝已经出生，请点击更改孕育状态。</view>
		</view>
		<!-- 计划 -->
		<view class="bottom_box">

			<view class="plan_box">
				<view @click="goAntenatal"></view>
				<view @click="goExemption"></view>
			</view>
			<!-- 标签 -->
			<view class="tab_box">
				<view class="tab_ul">
					<view class="tab_item" @click="">
						<image src="../../static/img/index3.png" mode=""></image>
						<view class="tab_text">报告查询</view>
					</view>
					<view class="tab_item" @click="goSelftesting">
						<image src="../../static/img/index4.png" mode=""></image>
						<view class="tab_text">自我检测</view>
					</view>
					<view class="tab_item" @click="goReckon">
						<image src="../../static/img/index5.png" mode=""></image>
						<view class="tab_text">数胎动</view>
					</view>
					<view class="tab_item" @click="goDiary">
						<image src="../../static/img/index6.png" mode=""></image>
						<view class="tab_text">孕育日记</view>
					</view>
				</view>
			</view>
			<!-- 广告 -->
			<view class="ad_box">
				<view class="ad_title">最新活动</view>
				<view class="ad_img">
					<image src="../../static/img/index7.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	var jweixin = require('jweixin-module');

	export default {
		data() {
			return {
				AppId: "wx860453305d00d990",
				aexFlag: "", //孕育状态
				DueDate: 0, //预计日期
				predictDay: 0, //预计多少天
				week: 0, //周
				Day: 0, //天
			};
		},
		computed: {},
		onLoad() {
			// this.getCode();
			this.getToken();
			jweixin.ready(function() {
				// TODO
			});
		},
		methods: {
			...mapMutations(['login', 'Pregnant']),
			// 强制关注公众号，获取openid
			getCode() {
				if (uni.getStorageSync('openid') && uni.getStorageSync('openid') != "undefined") {
					return false;
				}
				var code = this.getUrlParam('code') // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
				var local = window.location.href;
				if (code == null || code === '') {
					window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + this.AppId +
						'&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_base&state=#wechat_redirect'
				} else {
					this.getOpenId(code) //把code传给后台获取用户信息
				}
			},
			//把code传给后台,得到openid
			getOpenId(code) {
				this.$H.post('', {
					code: code
				}).then(res => {
					if (res.status == -1) {
						// 提示没有关注公众号 没有关注公众号跳转到关注公众号页面
						console.log('您还未关注公众号喔');
						//二维码弹窗
						$('.openPopup').click();
						return;
					} else {
						// 本地存储这个openid，并刷新页面
						uni.setStorageSync('openid', res.data.openid);
						this.onLoad();
					}
				})
			},
			//获取地址栏的参数
			getUrlParam(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]);
				return null;
			},
			//获取token
			getToken() {
				this.$H.post('/wx/portal/' + this.AppId + '/getToken', {
					openid: 'oUcWs1G3w1-8N78U09S4YQEUmoDU'
				}).then(res => {
					if (res.code == 1) {
						var token = res.data;
						this.getUserInfo(token)
					} else {
						this.$U.Toast(res.message);
					}
				})
			},
			//获取用户信息
			getUserInfo(token) {
				uni.request({
					url: 'http://www.baomabaodian.com/gravidawiki/getUser', //仅为示例，并非真实接口地址。
					method: "GET",
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'AuthToken': token,
					},
					success: (res) => {
						if (res.data.code == 1) {
							res.data.data.token = token;
							this.login(res.data.data);
							this.getStatus();
							this.getInfo();
						} else {
							this.$U.Toast(res.message);
						}
					}
				});
			},
			//获取孕育状态
			getStatus() {
				this.$H.get('/gravidawiki/gravidaInfo/getStatus', {}, {
					token: true,
				}).then(res => {
					if (res.code == 1) {
						if (res.data == "G") {
							this.aexFlag = "关注孕妇"
							this.Pregnant(res.data)
						}
						if (res.data == "C") {
							this.aexFlag = "关注婴儿"
							this.Pregnant(res.data)
						}
						if (res.data == "R") {
							this.aexFlag = "备孕"
							this.Pregnant(res.data)
						}
					} else {
						this.$U.Toast(res.message);
					}
				})
			},
			//获取孕妇信息
			getInfo() {
				this.$H.get('/gravidawiki/gravidaInfo/findById', {
					id: this.$store.state.user.userInfo.id
				}, {
					token: true
				}).then(res => {
					if (res.code == 1) {
						this.DueDate = res.data.edc
						this.CalculateDay(res.data.edc);
						this.CalculateWeek(res.data.pregnancyDate);
					} else {
						this.$U.Toast(res.message);
					}
				})
			},
			//计算倒计天数
			CalculateDay(time) {
				var setTime = new Date(time)
				var currentTime = new Date();
				var restSec = setTime.getTime() - currentTime.getTime();
				this.predictDay = parseInt(restSec / (60 * 60 * 24 * 1000));
			},
			//计算怀孕多少周
			CalculateWeek(time) {
				var setTime = new Date(time);
				var currentTime = new Date();
				var restSec = currentTime.getTime() - setTime.getTime();
				var allDay = parseInt(restSec / (60 * 60 * 24 * 1000));
				this.week = parseInt(allDay / 7);
				this.Day = allDay % 7;
			},
			//跳转孕育状态切换
			goGestateType() {
				uni.navigateTo({
					url: '../gestate_type/gestate_type',
				});
			},
			//跳转产检计划
			goAntenatal() {
				uni.navigateTo({
					url: '../antenatal/antenatal?edc=' + this.DueDate,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			//跳转免疫计划
			goExemption() {
				uni.navigateTo({
					url: '../antenatal/exemption',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			goSelftesting() {
				uni.navigateTo({
					url: '../self_testing/histogram',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 数胎动
			goReckon() {
				uni.navigateTo({
					url: '../record/reckon',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 跳转孕育日记
			goDiary() {
				uni.navigateTo({
					url: '../diary/diary',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	};
</script>

<style lang="scss">
	.content {}

	.content_top_box {
		height: 466rpx;
		background: url(../../static/img/index9.png) no-repeat center center / 100% 100%;
		.content_top {
			position: relative;
			width: 654rpx;
			top: 60rpx;
			margin: 0 54rpx;
			display: flex;
			flex-direction: column;
			height:248rpx;
			background: url(../../static/img/index.png) no-repeat center center / 100% 100%;

			.top_text {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 32upx;
				color: rgba(97, 51, 64, 1);
				flex: 1;
				padding: 0 32upx;
				box-sizing: border-box;
			}

			.bottom_text {
				flex: 2;
				display: flex;
				margin-top:-80rpx;
				margin-left:50rpx;
				justify-content: center;
				align-items: center;
				margin-bottom: 10upx;
				color: rgba(97, 51, 64, 1);
				font-weight: bold;
				font-size: 36upx;

				text {
					padding: 5upx 10upx;
					background: $uni-bg-pink;
					color: #fff;
					margin: 10upx;
					border-radius: 10upx;
				}
			}
		}

		.tig {
			background-color: $uni-bg-pink;
			font-size: 24upx;
			height: 50rpx;
			width:500rpx;
			text-align: center;
			line-height: 50rpx;
			box-sizing: border-box;
			color: #ffffff;
			text-align: center;
			border-radius: 20upx;
			margin-top: 16upx;
			position: relative;
			left: 215rpx;
			top: -10rpx;
			&::before {
				content: '';
				display: block;
				width: 0;
				height: 0;
				border: 10rpx solid transparent;
				border-bottom-color: #FF75A9;
				position: absolute;
				top: -20rpx;
				left: 60rpx;
			}
		}
	}
    .bottom_box{
		padding: 0  54rpx;
	}
	.plan_box {
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
		margin-bottom: 53rpx;
		view {
			width: 270rpx;
			height: 145upx;
			&:nth-child(1) {
				background: url(../../static/img/index1.png) no-repeat center center / 100% 100%;
			}

			&:nth-child(2) {
				background: url(../../static/img/index2.png) no-repeat center center / 100% 100%;
			}
		}



	}

	.tab_box {
		padding: 30upx;
		height: 242rpx;
		background: url(../../static/img/index8.png) no-repeat center center / 100% 100%;
		.tab_ul {
			display: flex;
			justify-content: space-between;
			margin-top: 20upx;

			.tab_item {
				width: 20%;
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;

				image {
					display: block;
					width: 100upx;
					height: 100upx;
				}

				.tab_text {
					font-size: 24upx;
					color: #333333;
				}
			}
		}
	}

	.ad_box {
		margin-top: 30upx;

		.ad_title {
			font-size: 24upx;
			padding: 20upx 0;
		}

		.ad_img {
			width: 100%;
			height: 320upx;
			border-radius: 10upx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
