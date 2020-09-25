<template>
	<view class="statementBox">
		<view class="title">【免责声明】</view>
		<view>
			1、原创网部分来源于网络转载的文章信息是出于传递更多信息之目的，并不意味着赞同其观点或证实其内容的真实性。
			如其他媒体、网站或个人从本网下载、链接、或以其他形式的复制发表、使用，必须保留本网注明的“稿件来源：原创网”，并自负版权等法律责任。
			如对稿件内容有疑议，请及时与我们联系。
		</view>
		<view>
			2、原创网致力于提供合理、准确、完整的资讯信息，但不保证信息的合理性、准确性和完整性，且不对因信息的不合理、不准确或遗漏导致的任何损失或损害承担责任。
			本网站所有信息仅供参考，不做交易和服务的根据，（删除“本网站所有信息仅供参考，不做交易和服务的根据”如退换货流程，客户服务流程、配送范围和方式等能够作为服务的依据）
			如自行使用本网资料发生偏差（如：用户使用产品操作教程等资料发生偏差的责任判定有争议。是否在网站提供的资料下方备注一点：用户须严格按照资料指示进行操作，操作不当引起的偏差本公司概不负责。）
			本站概不负责，亦不负任何法律责任。
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
	.statementBox{
		padding:40upx;
		text-indent: 64upx;
		
		.title{
			text-align: center;
			margin:20upx;
			font-size:32upx;
			text-indent:0;
		}
		
		view{
			line-height: 50upx;
		}
	}
</style>
