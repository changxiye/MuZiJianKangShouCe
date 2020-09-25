<template>
	<view class="hospitalInfoBox">
		<view class="adBox"></view>
		<view class="title">郑州市第三人民医院</view>
		<view class="textBox"> 郑州市第三人民医院始建于1905年，位于郑州市中心区域，原名为华美医院，1962年更名为郑州市第三人民医院，2008年冠名河南省第一慈善医院，2011年被省卫生厅批准为郑州市肿瘤医院，2015年与河南大学“联姻”，挂牌河南大学附属郑州市肿瘤医院。设置床位1100张、职工1600余人（其中医护人员900余人，高级技术职称180余人）， 拥有肿瘤学科、血液科、耳鼻喉头颈外科、泌尿外科、神经内科、肾病风湿科、超声影像、专科护理学等一批河南省和郑州市重点学科和重点培育学科，是集教学、科研、临床、防保为一体大型综合性的三级医院。</view>
		
		<view class="infoBox">
			<view>地址：河南庄</view>
			<view>电话：0371-66963333</view>
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
	.hospitalInfoBox{
		.adBox{
			width: 100%;
			height: 320upx;
			background-color: pink;
		}
		
		.title{
			text-align: center;
			font-size: 34upx;
			margin:32upx 0 60upx;
		}
		
		.textBox{
			font-size: 24upx;
			text-indent: 32upx;
			padding:0 44upx;
			margin-bottom: 36upx;
			line-height: 36upx;
		}
		
		.infoBox{
			padding:44upx;
			
			view{
				background-color: #FFF;
				margin-bottom: 16upx;
				padding:20upx;
				font-size: 26upx;
			}
		}
	}
</style>
