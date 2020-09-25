<template>
	<view>
		<view class="reckonTop">
			<view class="outTime">
				<view class="timeBox">
					<uni-countdown color="#FFFFFF" background-color="#FF75A9" border-color="#FF75A9" :show-day="false" :show-hour="false"
					 :hour="0" :minute="minute" :second="0" :reset="reset" @timeup="changeTime">
					</uni-countdown>
				</view>
			</view>
			<view class="tigs">你还没有开始数胎动哦，本孕周数胎动情况</view>
		</view>
		<view class="numBox">
			<view v-for="item in 6" :key="item" @click="addEntity(item)">{{item}}</view>
		</view>
		<view class="btnBox">
			<view class="startBtn" @click="startTime">
			<!-- 	<text>开始</text>
				<text>记录</text> -->
			</view>
			<view class="meBtn" @click="goRecord">我的胎动</view>
		</view>
		<view class="tigsBox">
			<text>专家建议孕28周后早中晚都要数胎动</text>
			<text class="tigsBlue">什么是胎动></text>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import uniCountdown from "@/components/linnian-CountDown/uni-countdown.vue"

	export default {
		components: {
			uniCountdown
		},
		data() {
			return {
				minute: 1,
				reset: false,
				IsBegin:false,//是否开始倒计时
			};
		},
		computed: {
			...mapState([])
		},
		mounted() {

		},
		methods: {
			changeTime(e) {
				console.log(123);
			},
			startTime() {
				//我的项目中只赋值一次, 所以直接设为true了
				this.reset = !this.reset;
				console.log(this.minute)
				this.IsBegin=true;
				// //如果还要设置天, 时, 秒, 在上面声明绑定后, 在这里赋值即可
				// this.minute = 30;
			},
			addEntity(item) {
				if(this.IsBegin){
					this.$H.post('/gravidawiki/fetalMovement/addEntity', {
						times: item
					}, {
						token: true,
						header: {
							'Content-Type': 'application/json'
						}
					}).then(res => {
							this.$U.Success(res.message);
					})
				}else{
					this.$U.Toast("请点击开始倒计时");
				}
			
			},
			// 跳转胎动记录
			goRecord() {
				uni.navigateTo({
					url: '../record/record',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
		},

		onReachBottom() {}
	};
</script>

<style lang="scss">
	.uni-countdown {
		font-size: 40upx;
	}


	.reckonTop {
		padding: 40upx;
		box-sizing: border-box;
	}

	.outTime {
		width:519rpx;
		margin: 0 auto;
		margin-bottom: 56rpx;
		box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.35);
		border-radius: 20upx;
	}

	.timeBox {
        width: 519rpx;
		height: 197upx;
		background: #ff75a9;
		box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.35) inset;
		margin: 30upx auto;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20upx;
	}

	.tigs {
		text-align: center;
		color: $uni-bg-pink;
	}

	.numBox {
		display: flex;
		padding: 40upx;
		box-sizing: border-box;
		justify-content: space-between;

		view {
			background-color: $uni-bg-pink;
			width: 86upx;
			height: 86upx;
			border-radius: 50%;
			text-align: center;
			line-height: 86upx;
			color: #FFF;
		}
	}

	.btnBox {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	.startBtn {
		display: flex;
		flex-direction: column;
		width:259rpx;
		height: 259rpx;
		background-color: $uni-bg-pink;
		border-radius: 50%;
		text-align: center;
		justify-content: center;
		color: #FFF;
		background: url(../../static/img/reckon1.png) no-repeat center center /100% 100%;
		margin: 60upx 0;
	}

	.meBtn {
		width: 260upx;
		height: 66upx;
		background: #19be5f;
		border-radius: 6upx;
		text-align: center;
		line-height: 66upx;
		color: #FFF;

	}

	.tigsBox {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 70upx;
	}

	.tigsBlue {
		color: #2AABFC;
		margin-top: 1.2rem;
		border-bottom: 2upx solid;
	}
</style>
