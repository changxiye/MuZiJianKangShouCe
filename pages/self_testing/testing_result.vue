<!-- 检测结果 -->
<template>
	<view class="resultBox">
		<view class="title">94分</view>
		<view class="tig">检查结果</view>
		<view class="textBox">
			 注重个体的心理健康，应从胎儿开始。注重胎儿的心理健康，就是注重妊娠母亲的心理健康。孕妇的营养状况、心理状况、行为习惯、生活环境等多会对胎儿的生长发育造成一定的影响。
		</view>
		
		<view class="btnBox">
			<view class="btn">确定</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.resultBox{
		.title{
			font-size: 60upx;
			font-weight: bold;
			margin: 80upx 0 30upx;
			text-align: center;
		}
		
		.tig{
			text-align: center;
			margin-bottom: 80upx;
		}
		.textBox{
			text-indent: 42upx;
			font-size: 24upx;
			width: 83%;
			margin:0 auto;
			color: #333333;
			line-height: 40upx;
		}
		
		
		.btnBox{
			position: fixed;
			width: 100%;
			bottom: 20upx;
			box-sizing: border-box;
			left: 0;
			padding: 0 20upx;
		}
		.btn{
			width: 100%;
			height: 80upx;
			background: $uni-bg-pink;
			border-radius: 10upx;
			text-align: center;
			line-height: 80upx;
			color: #FFF;
			font-size: 30upx;
		}
	}
</style>
