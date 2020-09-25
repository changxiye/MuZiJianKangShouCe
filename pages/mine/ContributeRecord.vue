<template>
	<view>
		<view class="tab_box">
			<view class="active">全部</view>
			<view>已投稿</view>
			<view>待审核</view>
			<view>已发布</view>
		</view>
		<view class="Record_box">
			<view>
				<view class="title_box border-b">
					<view>全部</view>
					<navigator class="btn_box" url="contribute" hover-class="none">发布新搞</navigator>
				</view>
				<view class="list_box">
					<view class="itme_box border-b" v-for="(item,index) in 5" :key="index">
						<view class="item_pic">

						</view>
						<view class="item_right">
							<view class="item_name">
								二级然后给KK唱响
							</view>
							<view class="item_user">
								<view class="user_name">
									张全蛋
								</view>
								<view class="user_time">
									时间：2020-09-01 21
								</view>
							</view>
							<view class="item_text">
								生活附近的开始肌肤的康师傅就-水果店
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
  .tab_box{
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  display: flex;
	  height: 84rpx;
	  line-height: 84rpx;
	  font-size:32rpx;
	  background-color: #FFFFFF;
	  >view{
		  flex: 1;
		  text-align: center;
	  }
	  .active{
		  color: #1677FF;
		  position: relative;
		  	font-weight: bold;
		  &::before{
			  position: absolute;
			  content: "";
			  height: 100%;
			  width: 50%;
			  left: 50%;
			  margin-left: -25%;
			  border-bottom: 4rpx solid #1677FF;
		  }
	  }
  }
	.Record_box {
		padding:126rpx 24rpx;

		>view {
			border-radius: 16rpx;
			background-color: #FFFFFF;

			.title_box {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 92rpx;
				padding: 0 24rpx;
				font-size: 30rpx;

				.btn_box {
					width: 144rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					border-radius: 25rpx;
					background-color: #1677FF;
					font-size: 24rpx;
					color: #FFFFFF;
				}
			}

			.list_box {
				padding: 0 24rpx;

				.itme_box {
					padding: 24rpx 0;
					display: flex;
					align-items: center;

					.item_pic {
						width: 136rpx;
						height: 136rpx;
						border-radius: 8rpx;
						overflow: hidden;
						background-color: #CCCCCC;
					}

					.item_right {
						flex: 1;
						margin-left: 24rpx;
						display: flex;
						flex-direction: column;

						.item_name {
							font-size: 30rpx;
							font-weight: bold;
							margin-bottom: 8rpx;
						}

						.item_user {
							display: flex;
							justify-content: space-between;
							font-size: 24rpx;
							color: #999999;
							margin-bottom: 8rpx;
						}

						.item_text {
							font-size: 24rpx;
							color: #999999;
						}
					}
				}
			}
		}

	}
</style>
