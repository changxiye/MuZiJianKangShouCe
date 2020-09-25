<template>
	<view class="hospitalBox">
		<view class="cu-bar  search fixed">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="搜索词" confirm-type="search" @input="searchIcon"></input>
			</view>
		</view>
		<view class="listBox">
			<ul>
				<li v-for="item in 4" :key="item" @click="goHospitalInfo">
					<view>郑州市大桥医院</view>
					<view class="flex">
						<view class="distance">0.5km</view>
						<view class="icon"></view>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(){
			this.getHospital();
		},
		methods:{
			getHospital(){
				var data={};
				this.$H.post('/his/hospital/getHospital',{
					distance: 5
				},{
					token:true
				}).then(res=>{
					console.log(res);
				})
			},
			goHospitalInfo(){
				uni.navigateTo({
					url: '/pages/hospital/hospital_info',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
		}
	}
</script>

<style lang="scss">
.search{
	background: #FFF;
}
.hospitalBox{
	padding-top:120upx;
}
.listBox{
	background-color: #FFF;
	padding:0 24upx;
	
	li{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:20upx 0;
		border-bottom: 2upx solid #EEE;
		
		.distance{
			font-size: 24upx;
			color: #999999;
		}
		
		.icon{
			width: 20upx;
			height: 20upx;
			border-top:2upx solid #999999;
			border-right: 2upx solid #999999;
			transform: rotate(45deg);
			margin-left: 20upx;
		}
		
		.flex{
			align-items: center;
		}
	}
}
</style>
