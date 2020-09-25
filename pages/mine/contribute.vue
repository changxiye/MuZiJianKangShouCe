<template>
	<view class="contributeBox">

		<form>
			<view class="cu-form-group">
				<view class="title">来源</view>
				<input placeholder="请输入作者链接或者作者名字" name="input"></input>
			</view>
			
			<view class="cu-form-group margin-top">
				<view class="title">标题</view>
				<input placeholder="请输入标题" name="input"></input>
			</view>
			
			<!-- !!!!! placeholder 在ios表现有偏移 建议使用 第一种样式 -->
			<view class="cu-form-group textareaBox margin-top">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="请输入你要写的内容…"></textarea>
			</view>
			
			
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			
			<view class="radioBox">
				<radio class='radioItem' :class="radio=='C'?'checked':''" :checked="radio=='C'?true:false" value="C"></radio>
				<view>同意<text @click="goStatement">《用户责任须知》</text></view>
			</view>
			<view class="btn">提交</view>
			
			
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				imgList: [],
				modalName: null,
				textareaAValue: '',
				radio:""
			};
		},
		methods: {
		     //跳转用户责任须知
			goStatement(){
				uni.navigateTo({
					url: 'statement',
				});
			},
		
			
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			textareaInput(e) {
				this.textareaAValue = e.detail.value
			},
			
		}
	}
</script>

<style lang="scss">
	.contributeBox{
		padding:24upx;
		
		.radioBox{
			display: flex;
			align-items: center;
			justify-content: center;
			padding:20upx 30upx;
			
			.radioItem{
				margin-right: 10upx;
			}
			
			text{
				color: #1677FF;
			}
			
		}
		.btn{
			width: 90%;
			background-color: #1677FF;
			margin:20upx auto;
			height: 90upx;
			border-radius: 10upx;
			text-align: center;
			line-height: 90upx;
			color: #FFF;
		}
		
		form{
			.cu-form-group{
				border-radius: 10upx ;
			}
			input{
				text-align: right;
			}
			
			.textareaBox{
				height: 600upx;
				
				textarea{
					height: 100%;
					padding:20upx 0;
					box-sizing: border-box;
				}
			}
			
			.cu-bar{
				border-top-left-radius: 10upx;
				border-top-right-radius: 10upx;
			}
		}
		
	}
</style>
