<template>
	<view class="typeBox">
		<radio-group class="block radioBox" @change="RadioChange">
			<block v-for="(item,index) in PregnantState" :key="index">
				<view class="radioItemBox pink">
					<view class="station"></view>
					<view class="itemLeft">
						<view class="title">{{item.name}}</view>
						<view class="text">{{item.week}}</view>
					</view>
					<view class="itemRight">
						<view v-if="item.aexFlag==value" class="title">当前状态</view>
						<radio :checked="item.aexFlag==value?true:false" color="#3fad54" :value="item.aexFlag"></radio>
					</view>
				</view>
			</block>

		</radio-group>
		<view class="btnBox">
			<view class="btn" @tap="changeStatus">切换</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				PregnantState: [{
						aexFlag: 'G',
						name: "关注孕妇",
						week: "孕32周",
					},
					{
						aexFlag: 'R',
						name: "备孕",
						week: "备孕2周",
					},
					{
						aexFlag: 'C',
						name: "关注婴儿",
						week: "出生3周",
					}
				],
				radioArr: ["G", "C", "R"], //G:关注孕妇,C:关注婴儿 R:备孕
				value: "",
			};
		},
		onLoad() {
			this.getStatus();
		},
		computed: {

		},
		mounted() {

		},
		methods: {
			...mapMutations(['Pregnant']),
			RadioChange(e) {
				console.log(e);
				this.value = e.detail.value
			},
			// 获取孕育状态
			getStatus() {
				this.value = this.$store.state.user.PregnantState;
			},
			// 更改孕育状态
			changeStatus() {
			   if(this.value=="G"||this.value=="R"){
				   uni.navigateTo({
				   					url:'FillIn_pregnant'
				   				})
			   }
               if(this.value=="C"){
				   uni.navigateTo({
				   					url:'FillIn_infant'
				   				})
			   }
			},
		},
		onReachBottom() {}
	};
</script>

<style lang="scss">
	page {}

	.pink {
		background-color: #FF75A9;
	}

	.blue {
		background-color: #75B9FF;
	}

	.yellow {
		background-color: #FFBC75;
	}

	.typeBox {
		height: 100vh;
		background: linear-gradient(#ffa7c8, #ff75a9);

		.btnBox {
			position: fixed;
			width: 100%;
			bottom: 20upx;
		}

		.btn {
			width: 90%;
			height: 80upx;
			background: #3fad54;
			border-radius: 10upx;
			margin: 0 auto;
			text-align: center;
			line-height: 80upx;
			color: #FFF;
			font-size: 30upx;
		}
	}

	.radioBox {
		background: transparent;
		box-sizing: border-box;
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

	}

	.radioItemBox {
		display: flex;
		width: 90%;
		height: 230upx;
		margin: 0 auto;
		// background-color: $uni-bg-pink;
		padding: 20upx;
		box-sizing: border-box;
		color: #FFF;
		align-items: center;


		.station {
			flex: 2;
		}

		.itemLeft {
			flex: 4;

			.text {
				font-size: 26upx;
				margin-top: 10upx;
			}

			.title {
				font-size: 34upx;
				font-weight: bold;
			}
		}

		.itemRight {
			flex: 3;

			display: flex;
			align-items: center;
			justify-content: flex-end;


			.title {
				margin-right: 20upx;
				font-size: 26upx;
			}
		}
	}
</style>
