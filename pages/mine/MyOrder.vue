<template>
	<view>
		<view class="tab_box">
			<view class="active">全部</view>
			<view>待支付</view>
			<view>待发货</view>
			<view>已收货</view>
			<view>待评价</view>
		</view>
		<view class="order_box">
			 <view class="title_box border-b">全部</view>
			 <view class="order_list">
				 <view class="item_box border-b" v-for="(item,index) in 6" :key="index">
					 <view class="item_pic">
						 
					 </view>
					 <view class="item_right">
						 <view class="item_name">
							 欧舒丹甜蜜樱花沐浴啫喱/身体乳套装沐浴啫
						 </view>
						 <view class="item_label">
							 <view>法国品牌</view>
							 <view> | 过敏包退 |</view>
							 <view>官方直售</view>
						 </view>
						 <view class="sell_box">
							 <view class="integral">积分兑换</view>
							 <view class="sell">月销20111件</view>
						 </view>
						 <view class="pirce">
							 ¥420
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
		},
		onPullDownRefresh(e){
			console.log(e);
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
  .order_box{
	  margin: 118rpx 24rpx;
	  background-color: #FFFFFF;
	  border-radius: 16rpx;
	  .title_box{
		  height: 90rpx;
		  line-height: 90rpx;
		  font-size: 30rpx;
		  padding: 0 24rpx;
		  font-weight: bold;
	  }
	  .order_list{
		  padding: 0 24rpx;
		  .item_box{
			  padding: 24rpx 0;
			  height: 280rpx;
			  display: flex;
			  .item_pic{
				  width: 160rpx;
				  height: 160rpx;
				  border-radius: 8rpx;
				  background-color: #CCCCCC;
			  }
			  .item_right{
				  flex: 1;
				  margin-left:24rpx;
				  .item_name{
					  font-size: 30rpx;
					  font-weight: bold;
					  color: #333333;
					  margin-bottom: 8rpx;
					  
				  }
				  .item_label{
					  display: flex;
					  font-size: 26rpx;
					  color: #999999;
					   margin-bottom: 8rpx;
					>view:nth-child(2){
						padding: 0 10rpx;
					}
				  }
				  .sell_box{
					  display: flex;
					  font-size: 12rpx;
					   margin-bottom: 8rpx;
					  .integral{
						  color: #FF6010;
						  background-color: #FFE7DC;
						  padding: 0 5rpx;
						  font-size: 24rpx;
					  }
					  .sell{
						  color: #999999;
						  margin-left: 12rpx;
					  }
				  }
				  .pirce{
					  color: #FF3B30;
					  font-weight: bold;
				  }
			  }
		  }
	  }
  }
</style>
