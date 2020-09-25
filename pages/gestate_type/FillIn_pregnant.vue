<template>
	<view class="fillInBox">
		<ul>
			<li>
				<text class="title">年龄</text>
				<input type="number" v-model="age" value="" />
				<text>岁</text>
			</li>
			<li>
				<text class="title">身高</text>
				<input type="number" v-model="stature" value="" />
				<text>cm</text>
			</li>
			<li>
				<text class="title">体重</text>
				<input type="number" v-model="weight" value="" />
				<text>kg</text>
			</li>
			<li>
				<text class="title">孕育状态</text>
				<picker :value="index"  :range="aexFlagArr" range-key="name"  @change="bindAexFlag">
					<view class="uni-input">{{ aexFlagArr[index].name }}</view>
				</picker>
			</li>
			<li>
				<text class="title">末次月经</text>
				<picker mode="date" :value="pregnancyDate"  @change="bindTimeChange">
					<view class="uni-input">{{pregnancyDate}}</view>
				</picker>
			</li>
			<li>
				<text class="title">预产期</text>
				<picker mode="date" :value="edc"  @change="bindEddTimeChange">
					<view class="uni-input">{{edc }}</view>
				</picker>
			</li>
			<li>
				<text class="title">紧急联系人电话</text>
				<input type="number" v-model="contactMtel"  value="" />
			</li>
			<li>
				<text class="title">与紧急联系人关系</text>
				<input type="text" v-model="relationType" value="" />
			</li>
		</ul>
		<view class="hint">
			孕妇情绪波动会影响内分泌，减少脑的供血量，从而影响胎儿的发育。情绪过度紧张的孕妇可能引起胎儿相应的心身发育问题及缺陷，如腭裂、唇裂、发育迟缓、智力低下等。情绪不稳定的孕妇发生难产的机会较高，长期处于忧虑的孕妇，常会引起早产。因此，为了后代的心身健康，孕妇一定要情绪稳定、心情愉快，以积极乐观的态度对待妊娠，遇到令人不愉快的事应冷静对待，多接触美好的事物，如听音乐、观赏花卉等，保持良好的心理状态。
		</view>
		<view class="btn" @tap="addEntity">确定</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				age: '', // 年龄 28
				stature: '', // 身高,单位: cm 162
				weight: '', // 体重,单位: Kg 42.8Kg
				pregnancyDate: this.getDate('start'), // 末次月经日期 2018-05-01
				edc: this.getDate('end'), // 预产期 2019-02-12
				contactMtel: '', // 紧急联人系电话 13300000000
				relationType: '', // 与紧急联系人关系 丈夫
				aexFlagArr:[{aexFlag:'G',name:"关注孕妇"},{aexFlag:'C',name:"关注婴儿"},{aexFlag:'R',name:"备孕"}],
				index:2,
			};
		},
		methods: {
			bindAexFlag(e) {
			    this.index = e.target.value
			},
			bindTimeChange: function(e) {
				this.pregnancyDate = e.detail.value;
			},
			bindEddTimeChange(e) {
				this.edc = e.detail.value;
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year;
				} else if (type === 'end') {
					year = year + 1;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			addEntity() {
				var data = {};
					data.age = this.age;
					data.height=this.stature;
					data.weight=this.weight;
					data.aexFlag=this.aexFlagArr[this.index].aexFlag;
					data.pregnancyDate=this.pregnancyDate;
					data.edc=this.edc;
					data.contactMtel=this.contactMtel;
					data.relationType=this.relationType;
					if(data.age==""){
						this.$U.Toast("请输入年龄")
						return;
					}
					if(data.stature==""){
						this.$U.Toast("请输入身高")
						return;
					}
					if(data.weight==""){
						this.$U.Toast("请输入体重")
						return;
					}
				
					if(data.contactMtel==""){
						this.$U.Toast("请输入紧急联系人")
						return;
					}
					if(data.relationType==""){
						this.$U.Toast("请输入与紧急联系人的关系")
						return;
					}
					this.$H.post('/gravidawiki/gravidaInfo/addEntity',data,{
						token: true,
						header: {"content-type": "application/json"},
					}).then(res=> {
					     if(res.code==1){
							 this.$U.Success("保存成功",function(){
								 uni.switchTab({
								 	url:'../index/index'
								 })
							 })
						 }else{
							this.$U.Toast(res.message);
						 }
					})
			}
		},
	};
</script>

<style lang="scss">
	page {}

	.fillInBox {
		width: 100%;
		padding: 0 30upx;

		ul {
			width: 100%;

			box-sizing: border-box;

			li {
				height: 100upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: #fff;
				border-radius: 10upx;
				padding: 0 20upx;
				box-sizing: border-box;
				margin: 20upx 0;

				input {
					flex: 1.5;
					text-align: right;
					padding: 0 20upx;
					height: 100%;
				}

				.title {
					flex: 1;
				}
			}
		}

		.hint {
			text-indent: 60upx;
			color: #9b9b9b;
			font-size: 24upx;
			margin: 30upx 0 60upx;
		}

		.btn {
			width: 100%;
			background-color: $uni-bg-pink;
			color: #fff;
			font-size: 34upx;
			text-align: center;
			padding: 20upx 0;
			border-radius: 10upx;
		}
	}
</style>
