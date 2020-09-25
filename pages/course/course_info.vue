<template>
	<view class="courseInfoBox">
		<view class="videoBox"></view>
		<view class="tigs margin-bottom">疫情当前，需要推迟产检吗？</view>

		<view class="infoBox">
			<view class="titleBox">
				<view :class="type == 1 ? 'active' : ''">课程介绍</view>
				<view :class="type == 2 ? 'active' : ''">课程目录</view>
			</view>

			<view class="introduce">
				<view class="title">专家介绍</view>
				<view class="specialist">
					<view class="cu-avatar lg round margin-right bg-red">B</view>
					<view class="textInfo">
						<view class="nameBox">
							<text class="margin-right name">张继芳</text>
							<text>副院长</text>
						</view>
						<view>北京玛丽妇婴医院。对产产科保健、各项产检检查， 以及高危分娩诊治有丰富的经验。从事妇产临床…</view>
					</view>
				</view>
			</view>
			<!-- 课程介绍 -->
			<view class="adBox" v-if="type == 1"></view>
			<!-- 课程目录 -->
			<view class="catalog">
				<ul>
					<li class="active">
						<view class="leftBox">
							<view class="num">1</view>
							<view>
								<view class="title">疫情当前，需要推迟产检吗</view>
								<view class="timeBox">
									<i class="icon"></i>
									<text class="margin-right">01:14</text>
									<text>2020.03.11更新</text>
								</view>
							</view>
						</view>
						<view class="rightBox">
							<i class="icon"></i>
							<text>播放</text>
						</view>
						<view class="lastTime">上次学到</view>
					</li>
				</ul>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			type: 2
		};
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
.courseInfoBox {
	.videoBox {
		width: 100%;
		height: 422upx;
		background-color: $uni-bg-pink;
	}
	.tigs {
		padding: 32upx;
		background-color: #fff;
		font-size: 28upx;
	}

	.infoBox {
		background-color: #fff;
		.titleBox {
			display: flex;
			justify-content: space-around;
			border-bottom: 2upx solid #eee;
			height: 84upx;
			align-items: center;

			& > view {
				height: 100%;
				line-height: 84upx;
			}
			.active {
				color: $uni-bg-pink;
				position: relative;
				font-weight: bold;

				&::after {
					content: '';
					display: block;
					position: absolute;
					width: 90%;
					height: 4upx;
					background-color: $uni-bg-pink;
					bottom: 0;
					left: 5%;
				}
			}
		}
	}

	.introduce {
		.title {
			padding: 10upx 32upx;
		}

		.specialist {
			display: flex;
			padding: 32upx;

			.cu-avatar {
				flex-shrink: 0;
			}

			.textInfo {
				font-size: 24upx;
				color: #989898;
			}
			.nameBox {
				margin-bottom: 10upx;
			}
			.name {
				font-size: 30upx;
				color: #333333;
			}
		}
	}
	.adBox {
		width: 100%;
		height: 500upx;
		background-color: pink;
	}

	.catalog {
		ul {
			border-top: 1px solid #eee;
			position: relative;

			li {
				display: flex;
				justify-content: space-between;
				padding: 20upx;
				position: relative;

				.icon {
					display: inline-block;
				}

				.leftBox {
					display: flex;
					align-items: center;
					color: #989898;
					font-size: 24upx;

					.title {
						font-size: 30upx;
						color: #333;
						margin-bottom: 10upx;
					}
					.timeBox {
						display: flex;
						align-items: center;
					}

					.icon {
						width: 30upx;
						height: 30upx;
						background-color: pink;
						margin-right: 0.3rem;
					}

					.num {
						padding: 10upx 20upx;
						flex-shrink: 0;
						font-size: 30upx;
					}
				}

				.rightBox {
					align-self: flex-end;
					font-size: 24upx;
					color: #989898;
					display: flex;
					align-items: flex-end;

					.icon {
						width: 50upx;
						height: 50upx;
						background-color: pink;
						margin-right: 0.3rem;
					}
				}

				.lastTime {
					position: absolute;
					top: 0;
					right: 40upx;
					font-size: 24upx;
					background-color: #f76045;
					color: #fff;
					padding: 2upx 4upx;
					border-bottom-left-radius: 0.2rem;
					border-bottom-right-radius: 0.2rem;
				}

				&.active {
					
					.title {
						color: #f76045;
					}
				}
			}
		}
	}
}
</style>
