<template>
	<view class="twitterBox">
		<view class="twitterTop">
			<view class="price">20.00</view>
			<view>我的收益</view>
			<view class="drawings">提现</view>
		</view>
		
		<view class="ulBox">
			<view class="title">收益详情</view>
			<view class="listBox">
				<view>下线<text>三个月孕期的妈妈</text>购买儿童玩具商品</view>
				<view>+10.00</view>
			</view>
		</view>
		
		<view class="ulBox">
			<view class="title">我的下线</view>
			<view class="listBox downline">
				<view class="listItem" v-for="(item,index) in 8" :key="index">
					<view class="avatar"><img src="#" alt=""></view>
					<view>姜贝贝</view>
				</view>
				
			</view>
			<view class="moreBtn">加载更多</view>
		</view>
		
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			userId:"",
		};
	},
	computed: {
		...mapState([])
	},
	mounted() {
		let that = this;
		uni.getStorage({
			key: 'userInfo',
			success: function(res) {
				that.userId = res.data.id;
				that.getEarnings();
			}
		});
	},
	methods: {
		// 我的收益
		async getEarnings(){
			let that = this;
			let res = await that.$api.requestData({
				url: '/guide/guideInfo/findById',
				method: 'GET',
				data: {
					id:that.userId
				},
				
			});
			console.log('我的收益', res);
			if (res.code == 1) {
				
			}
		},
		// 收益明细
		async getEarningsList(){
			let that = this;
			let res = await that.$api.requestData({
				url: '',
				method: 'POST',
				data: {
					id:that.userId
				},
				
			});
			console.log('收益明细', res);
			if (res.code == 1) {
				
			}
		},
	},
	onReachBottom() {}
};
</script>

<style lang="scss">
	.twitterBox{
		.twitterTop{
			width: 100%;
			height: 326upx;
			background-color: $uni-bg-pink;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			color:#FFF;
			
			.price{
				font-size: 60upx;
				margin-bottom: 6upx;
			}
			
			.drawings{
				font-size: 26upx;
				padding:6upx 30upx;
				border:1upx solid #FFF;
				border-radius: 30upx;
				margin-top: 30upx;
			}
		}
		
		.ulBox{
			width: 95%;
			margin: 20upx auto;
			background-color: #FFFFFF;
			border-radius: 6upx;
			
			.title{
				padding:24upx;
				font-weight: bold;
				border-bottom: 1px solid #EEEEEE;
			}
			
			.listBox{
				display: flex;
				font-size: 24upx;
				padding:20upx;
				justify-content: space-between;
				flex-wrap: wrap;
				
				text{
					color:#5999E4;
				}
				
				.listItem{
					width: 20%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					
				}
				.avatar{
					width: 60upx;
					height: 60upx;
					border-radius: 50%;
					overflow: hidden;
					background-color: pink;
					margin-bottom: 6upx;
					
				}
			}
			
			.downline{
				justify-content: flex-start;
			}
			
			.moreBtn{
				text-align: center;
				font-size: 24upx;
				color: #999999;
				padding:10upx 0;
			}
		}
	}
</style>
