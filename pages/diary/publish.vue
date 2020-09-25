<template>
	<view class="page" >
			<view class="top_box">
				<input type="text" value="" v-model="title" placeholder="请输入标题" />
			</view>
			<view class="text_box"><textarea placeholder="这一刻的想法..." v-model="content" /></view>
			<view class="uni-list list-pd">
				<view class="uni-list-cell cell-pd">
					<view class="uni-uploader">
						<view class="uni-uploader-head">
							<view class="uni-uploader-title"></view>
							<!-- <view class="uni-uploader-info">{{ imageList.length }}/9</view> -->
						</view>
						<view class="uni-uploader-body">
							<view class="uni-uploader__files">
								<block v-for="(image, index) in imageList" :key="index">
									<view class="uni-uploader__file" style="position: relative;">
										<image class="uni-uploader__img" mode="aspectFill" :src="image" :data-src="image" @tap="previewImage"></image>
										<view class="close-view" @click="close(index)">×</view>
									</view>
								</block>
								<view class="uni-uploader__input-box" v-show="imageList.length < 3"><view class="uni-uploader__input" @tap="chooseImage"></view></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="openBox">
				<view>此消息是否公开</view>
				<view class="openBtn">
					<view class="optnText">公开</view>
					<view>
						<!-- #ifdef MP-ALIPAY -->
						<switch class="red" @change="SwitchB" :class="switchB ? 'checked' : ''" :checked="switchB ? true : false" color="#e54d42"></switch>
						<!-- #endif -->

						<!-- #ifndef MP-ALIPAY -->
						<switch class="red" @change="SwitchB" :class="switchB ? 'checked' : ''" :checked="switchB ? true : false"></switch>
						<!-- #endif -->
					</view>
					<view class="optnText">私密</view>
				</view>
			</view>

			<view class="tigs">坚持发布动态，在宝宝降生以后，我们会免费为你制作一份专属文章推送在我们的瓶体上面，如有需要可以制作成画册留作纪念。</view>
		<view class="btnRow">
			<!-- <view @tap="goBack">取消</view> -->
			<view class="release" @click="publish">发布</view>
		</view>
	</view>
</template>

<script>
import image from '../../static/js/image.js';
import { mapState } from 'vuex';

let sourceType = [['camera'], ['album'], ['camera', 'album']];
let sizeType = [['compressed'], ['original'], ['compressed', 'original']];
export default {
	data() {
		return {
			switchB: false,
			// title: 'choose/previewImage',
			title:"",
			content: '',
			imageList: [],
			sourceTypeIndex: 2,
		    isOpen:1,
			sourceType: ['拍照', '相册', '拍照或相册'],
			sizeTypeIndex: 2,
			sizeType: ['压缩', '原图', '压缩或原图'],
			countIndex: 8,
			count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			//侧滑返回start
			startX: 0, //点击屏幕起始位置
			movedX: 0, //横向移动的距离
			endX: 0 //接触屏幕后移开时的位置
			//end
		};
	},
	onUnload() {
		(this.imageList = []),
			(this.sourceTypeIndex = 2),
			(this.sourceType = ['拍照', '相册', '拍照或相册']),
			(this.sizeTypeIndex = 2),
			(this.sizeType = ['压缩', '原图', '压缩或原图']),
			(this.countIndex = 8);
	},

	methods: {
		SwitchB(e) {
			if(e.detail.value){
				this.isOpen=1
			}else{
				this.isOpen=0
			}
		},
		publish() {
			var data={};
			data.title=this.title;
			data.content=this.content;
			data.isOpen=this.isOpen;
			console.log(this.imageList.length);
			if(data.content==""){
				this.$U.Toast('亲,你还没有输入内容哟~');
				return;
			}
			if(this.imageList.length>0){
				data.image1=this.imageList[0];
			}
			if(this.imageList.length>1){
		        data.image2=this.imageList[1];
			}
			if(this.imageList.length>2){
			   data.image3=this.imageList[2];
			}
			this.$H.post('/gravidawiki/pregnancyDiary/addEntity',data,{
				token:true,
				header:{
					'Content-Type': 'application/json'
				}
			}).then(res=>{
				if(res.code==1){
					this.$U.Success('发布成功',function(){
						uni.navigateTo({
							url: 'diary',
						});
					})
				}else{
					this.$U.Toast(res.message);
				}
			})
		},
		//删除图片
		close(e) {
			this.imageList.splice(e, 1);
		},
		chooseImage: async function() {
			if (this.imageList.length === 3) {
				let isContinue = await this.isFullImg();

				if (!isContinue) {
					return;
				}
			}
			uni.chooseImage({
				sourceType: sourceType[this.sourceTypeIndex],
				sizeType: sizeType[this.sizeTypeIndex],
				count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
				success: res => {
					// #ifdef APP-PLUS
					//提交压缩,因为使用了H5+ Api,所以自定义压缩目前仅支持APP平台
					let compressd = cp_images => {
						this.imageList = this.imageList.concat(cp_images); //压缩后的图片路径
					};
					image.compress(res.tempFilePaths, compressd);
					// #endif

					// #ifndef APP-PLUS
					this.imageList = this.imageList.concat(res.tempFilePaths); //非APP平台不支持自定义压缩,暂时没有处理,可通过uni-app上传组件的sizeType属性压缩
					// #endif
				}
			});
		},
		previewImage: function(e) {
			let current = e.target.dataset.src;
			uni.previewImage({
				current: current,
				urls: this.imageList
			});
		},
	}
};
</script>

<style lang="scss">
@import '../../static/css/uni.css';
page {
	background-color: #ffffff;
}
.top_box{
	margin-bottom: 20rpx;
	border: 1px solid  #CCCCCC;
	padding: 20rpx;
	border-radius:8rpx;
}
.footer {
	margin-top: 80upx;
}
.addBox {
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;

	.inputBox {
		width: 70%;
		padding: 20upx;
		box-sizing: border-box;
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		border-radius: 10upx;
	}

	.inputs {
		margin: 40upx 0;
		padding: 10upx;
		border: 2upx solid #eeeeee;
		width: 80%;

		input {
			width: 100%;
			height: 100%;
		}
	}

	.rowsBtn {
		display: flex;
		align-items: center;
		width: 80%;
		justify-content: space-between;

		.btns {
			padding: 0 20upx;
			border-radius: 10upx;
		}

		.queding {
			background-color: #2acfb3;
			color: #ffffff;
		}
	}
}
.cell-pd {
}
.text_box {
	width: 100%;
	line-height: 1.6;
	height: 300rpx;

	textarea {
		width: 100%;
		height: 100%;
		padding: 0;
	}
}
.uni-list::before {
	height: 0;
}
.uni-list:after {
	height: 0;
}
.list-pd {
	margin-top: 0;
	margin-bottom: 30upx;

	.uni-uploader__file {
		width: 200rpx;
		height: 200rpx;
	}
}
.close-view {
	text-align: center;
	line-height: 30upx;
	height: 35upx;
	width: 35upx;
	background: #ef5350;
	color: #ffffff;
	position: absolute;
	top: 1upx;
	right: 1upx;
	font-size: 35upx;
	border-radius: 8upx;
}

.page {
	// background-color: #FFFFFF;
	padding: 20upx 40upx;
	box-sizing: border-box;
}
.btnRow {
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20upx;
	font-size: 20upx;
	width: 100%;

	.release {
		background-color: $uni-bg-pink;
		color: #ffffff;
		border-radius: 20upx;
		width: 90%;
		height: 80upx;
		font-size: 34upx;
		text-align: center;
		line-height: 80upx;
	}
}
.topicBox {
	font-size: 24upx;
	.topic {
		padding: 4upx 10upx;
		background-color: #2acfb3;
		color: #ffffff;
		display: inline-block;
		border-radius: 6upx;
		font-size: 24upx;
	}
	.title {
		font-weight: 900;
		margin: 16upx 0 0;
	}
	.topicItem {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10upx 0;

		.leftItem {
			display: flex;
			align-items: center;
		}
		.icon {
			width: 34upx;
			height: 34upx;
			margin-right: 10upx;
		}

		.topicBtn {
			width: 100upx;
			height: 50upx;
			border: 2upx solid rgba(160, 160, 160, 0.3);
			text-align: center;
			line-height: 50upx;
			color: rgba(160, 160, 160, 0.3);
			border-radius: 8upx;
			font-size: 20upx;
		}

		.addBtn {
			background-color: #2acfb3;
			color: #ffffff;
		}
	}
	.addTopic {
		padding: 4upx 10upx;
		border: 2upx solid rgba(160, 160, 160, 0.3);
		color: rgba(83, 83, 83, 1);
		border-radius: 8upx;
		font-size: 20upx;
		display: inline-block;
	}

	.siteBox {
		display: flex;
		align-items: center;
		margin: 20upx 0;
		color: rgba(113, 162, 235, 1);

		.icon {
			width: 34upx;
			height: 34upx;

			margin-right: 10upx;
		}
	}
}
image {
	width: 100%;
	height: 100%;
}

.openBox {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin: 40upx 0;
	color: rgba(73, 73, 73, 1);

	.openBtn {
		display: flex;
		align-items: center;

		.optnText {
			margin: 0 20upx;
		}
	}
}
.tigs {
	text-indent: 60upx;
	color: rgba(89, 89, 89, 1);
}
</style>
