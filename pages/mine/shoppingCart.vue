<template>
	<view>
		 <view class="banner_box"></view>
		 <view class="list_box">
			 <view class="store_box">
				 <view  class="store_top">
					 <view class="checke_box"></view>
					 <view class="store_name">
						 <view class="icon"></view>
						 <view class="name">宝妈宝典官方自营店</view>
					 </view>
					 <view class="icon_left"></view>
				 </view>
				 <view class="item_list">
					   <view class="item_box">
						    <view>
							</view>
							<view class="item_right">
								 <view class="item_pic">
									 
								 </view>
								 <view class="item_text">
									 <view class="item_name">情侣行爱不释手甜点</view> 
									 <view class="score_box">
										 <view class="star_box">
											 
										 </view>
										 <view class="score_text">
											 评分4.5分
										 </view>
									 </view>
									 <view class="item_describe">
										 <view>嘿哟米蛋糕</view>
										 <view>140人评论</view>
									 </view>
									 <view class="price_box">
										  <view class="item_price">120.00</view>
										  <view class="amount_box">
											 
										  </view>
									 </view>
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
.banner_box{
	width: 100%;
	height: 233rpx;
	border: 1rpx solid #CCCCCC;
}
.list_box{
	padding:20rpx 30rpx;
	.store_box{
		background-color: #FFFFFF;
		border-radius: 8rpx;
	}
	.store_name{
		display: flex;
		align-items: center;
		padding: 0 20rpx;
		height: 65rpx;
		border-bottom: 1rpx solid #CCCCCC;
	}
	.item_list{
		.item_box{
			display: flex;
			align-items: center;
			padding: 30rpx 20rpx;
			.item_right{
				display: flex;
				.item_pic{
					width: 222rpx;
					height: 164rpx;
					border-radius: 8rpx;
					border: 1px solid #CCCCCC;
				}
				.item_text{
				   margin-left: 30rpx;
				   .item_name{
					   font-size: 30rpx;
					   font-weight: bold;
				   }
				   .item_describe{
					   display: flex;
					   justify-content: space-between;
					   font-size: 24rpx;
					   color: #999999;
				   }
				   .price_box{
					   display: flex;
				   }
				}
			}
		}
		
	}
}
</style>
