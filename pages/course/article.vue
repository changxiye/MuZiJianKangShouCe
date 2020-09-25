<template>
	<view class="articleBox">
		<view class="bgBox"></view>
		<view class="title">数字货币交易所还是一门好生意么？</view>
		<view class="subTitle">
			<view class="margin-right">熊猫侠讲书人</view>
			<view class="margin-right">杂说</view>
			<view class="timeBox">11-21 07:30</view>
		</view>
		<view class="xian"></view>
		<view class="content"></view>
		<view class="recommend">
			<view class="title">推荐阅读</view>
			<ul>
				<li class="flex">
					<view class="textBox">
						<view class="text">内容标题摘要标题标题摘要标题摘要</view>
						<view>文章来源</view>
					</view>
					<view class="imgBox"></view>
				</li>
			</ul>
			<view class="more">更多推荐内容</view>
		</view>
		<view class="footerBox">
			<i class="icon_edit"></i>
			<view class="inputBox"><input type="text" placeholder="写评论"></view>
			<view class="flex">
				<i class="icon_chat"></i>
				<text>9</text>
			</view>
			<i class="icon_like"></i>
			<i class="icon_collect"></i>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {};
	},
	computed: {
		...mapState([])
	},
	mounted() {},
	methods: {},
	onReachBottom() {}
};
</script>

<style lang="scss">
	.articleBox{
		padding:20upx 32upx 80upx;
		
		.bgBox{
			width: 100%;
			height: 100vh;
			background-color: #FFF;
			position: fixed;
			z-index: -1;
			top:0;
			left:0;
		}
		
		.title{
			font-size: 38upx;
			font-weight: bold;
		}
		
		.subTitle{
			display: flex;
			color:#1677FF;
			margin-top:14upx;
			font-size: 28upx;
			
			.timeBox{
				color: #999999;
			}
		}
		
		.xian{
			width: 200upx;
			height: 1px;
			background-color: #EEE;
			margin:40upx 0upx;
			display: flex;
			align-items: center;
			
			&::after{
				content: "";
				display: block;
				width: 16upx;
				height: 16upx;
				border:1px solid #EEE;
				transform: rotate(45deg);
				background-color: #FFF;
			}
		}
		
		.recommend{
			.title{
				text-align: center;
				border-bottom: 2upx solid #A3C9FF;
				width: 160upx;
				margin:10upx auto;
			}
			ul{
				li{
					justify-content: space-between;
					border-bottom: 2upx solid #EEEEEE;
					padding:20upx 0;
					
					.textBox{
						color: #999999;
						font-size: 25upx;
						.text{
							font-size: 30upx;
							margin-bottom: 20upx;
							color:#333333;
						}
					}
					
					
					.imgBox{
						width: 200upx;
						height: 160upx;
						background-color: #EEE;
						flex-shrink: 0;
						border-radius: 10upx;
						margin-left: 20upx;
					}
				}
			}
			
			.more{
				text-align: center;
				color: #1679FF;
				margin:20upx;
				font-size: 26upx;
			}
		}
		
		
		.footerBox{
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			width: 100%;
			height: 100upx;
			border-top:2upx solid #EEE;
			justify-content: space-between;
			align-items: center;
			padding:0 20upx;
			box-sizing: border-box;
			
			.inputBox{
				flex:1;
				font-size: 26upx;
			}

			
			i{
				display: block;
				width: 40upx;
				height: 40upx;
				background:pink;
				margin:0 0.2rem;
			}
		}
	}
</style>
