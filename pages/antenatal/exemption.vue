<template>
	<view>
		<view class="top_bj">
			<view class="top_box">
				<view class="top_left">
					<view class="user_box">
					</view>
				</view>
				<view class="top_right">
					<view class="middle_one">
						<view class="text">宝宝1岁2月</view>
						<!-- <picker mode="date" @change="Seteminders">
							<view class="setBtn">设置提醒</view>
						</picker> -->
					</view>
					<text class="middle_two">实际产检时间以当地医院提供为准，仅供参考</text>
				</view>
			</view>
		</view>
		<view class="list_box">
			<block v-for="(item,index) in list" :key="index">
				<view class="item_box">
					<view class="item_left">
						<label class="radio">
							<radio value="" color="#FF75A9" style="transform:scale(0.62)" /><text></text>
						</label>
					</view>
					<view class="item_right">
						<view class="item_top">
							<view class="middle_one">
								{{item.weekNo}}
							</view>
							<view class="middle_two">
								产检时间：{{item.ptDate}}
							</view>
							<view class="changeBtn">
								<picker mode="date" :value="date" :start="item.ptDate" :end="endDate" :id="item.id" @change="bindDateChange">
									<view class="changeBtn">修改</view>
								</picker>
							</view>
						</view>
						<view class="item_bottom">
							{{item.description}}
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			});
			return {
				DueDate: "",
				isRemind: true,
				index: 0,
				date: currentDate,
				list: [],

			};
		},
		onLoad(option) {
			this.DueDate = option.edc;
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		mounted() {
			let that = this;
			that.getPlan();
		},
		methods: {
			// 修改产检时间
			bindDateChange(e) {
				this.$H.post('/gravidawiki/pregnancyTestPlan/editEntity', {
					id: e.currentTarget.id,
					ptDate: e.detail.value,
				}, {
					token: true,
					header: {
						'Content-Type': 'application/json'
					}
				}).then(res => {
					console.log(res);
				})
			},
			//设置提醒
			Seteminders(e) {
				this.isRemind = !this.isRemind;
				this.$H.post('/gravidawiki/pregnancyTestPlan/editEntity', {
					ptDate: e.detail.value,
				}, {
					token: true,
					header: {
						'Content-Type': 'application/json'
					}
				}).then(res => {
					console.log(res);
					if(res.code==1){
						this.$U.Success('设置成功')
					}else{
						this.$U.Toast(res.message);
					}
				})
			},
			// 获取产检计划
			getPlan() {
				this.$H.post('/gravidawiki/immunizationPlan/findMyImmunizationPlan', {
					childId:5
				}, {
					token: true
				}).then(res => {
					console.log(res);
					if (res.code == 1) {
						this.list = res.data;
					}
				})
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	};
</script>

<style lang="scss">
	$themeColor:#89C997;
	$lineColor:#89C997;

	.top_bj {
		width: 100%;
		height: 200rpx;
		background-color: $themeColor;
		background: url(../../static/img/exemption1.png) no-repeat center center / 100% 100%;

		.top_box {
			display: flex;
			position: relative;
			padding: 67rpx 30rpx 24rpx 45rpx;
			padding-left: 45rpx;
			&::after {
				content: "";
				position: absolute;
				left: 77rpx;
				width: 1rpx;
				height: 100%;
				background: $lineColor;
			}

			.user_box {
				position: relative;
				width: 67rpx;
				height: 67rpx;
				border-radius: 50%;
				background-color: #FFFFFF;
				z-index: 1;
			}

			.top_right {
				display: flex;
				flex: 1;
				flex-direction: column;
				margin-left: 49rpx;

				.middle_one {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 25rpx;

					.text {
						color: #FFFFFF;
						font-size: 30rpx;
						font-weight: bold;
					}

					.setBtn {
						width: 167rpx;
						height: 53rpx;
						text-align: center;
						line-height: 53rpx;
						border-radius: 7rpx;
						background: #FFFFFF;
						font-size: 22rpx;
						color: $themeColor;
						font-weight: bold;
					}
				}

				.middle_two {
					font-size: 22rpx;
					color: #FFFFFF;
				}
			}
		}


	}

	.item_box {
		display: flex;
		padding-left: 50rpx;
		position: relative;

		&::before {
			content: "";
			position: absolute;
			left: 77rpx;
			width: 1rpx;
			height: 100%;
			background: $lineColor;
		}

		.item_left {
			position: relative;
			top: 33rpx;
		}

		.item_right {

			padding: 33rpx 30rpx 37rpx 32rpx;
		}

		.item_top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 23rpx;

			.middle_one {
				width: 200rpx;
				height: 59rpx;
				background-color: $themeColor;
				border-radius: 7rpx;
				text-align: center;
				line-height: 59rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				position: relative;

				&::after {
					content: '';
					display: block;
					width: 0;
					height: 0;
					border: 10rpx solid transparent;
					border-right-color: $themeColor;
					position: absolute;
					top: 16rpx;
					left: -20rpx;
				}
			}

			.middle_two {
				font-size: 24rpx;
				color: $themeColor;
			}

			.changeBtn {
				width: 86rpx;
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				font-size: 16rpx;
				color: #FFFFFF;
				background-color: $themeColor;
				border-radius: 8rpx;
			}
		}

		.item_bottom {
			padding: 35rpx 32rpx;
			background-color: #FFFFFF;
			font-size: 24rpx;
			line-height: 48rpx;
			border-radius: 7rpx;
		}

	}
</style>
