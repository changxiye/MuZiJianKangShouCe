<template>
	<view class="fillInBox">
		<ul>
			<li>
				<text class="title">名字</text>
				<input type="text" v-model="name" value="" />
			</li>
			<li>
				<text class="title">出生日期</text>
				<picker mode="date" :value="birthday"  @change="bindDateChange">
					<view class="uni-input">{{birthday}}</view>
				</picker>
			</li>
			<li>
				<text class="title">体重</text>
				<input type="number" v-model="weight" value="" />
				<text>kg</text>
			</li>
			<li>
				<text class="title">身高</text>
			    <input type="number" v-model="height" value="" />
				<text>cm</text>
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
				name: '',
				weight: '', // 体重,单位: Kg 42.8Kg
				height: '', // 身高,单位: cm 162
				birthday: this.getDate(), // 预产期 2019-02-12
			};
		},
		methods: {
		
			bindDateChange(e) {
				this.birthday = e.detail.value;
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
				data.name = this.name;
				data.birthday = this.birthday;
				data.height = this.height;
				data.weight = this.weight;
				if (data.name == "") {
					this.$U.Toast("请输入婴儿姓名")
					return;
				}
				if (data.height == "") {
					this.$U.Toast("请输入婴儿身高")
					return;
				}
				if (data.weight == "") {
					this.$U.Toast("请输入婴儿体重")
					return;
				}
				this.$H.post('/gravidawiki/childInfo/addEntity', data, {
					token: true,
					header: {
						"content-type": "application/json"
					},
				}).then(res => {
					if (res.code == 1) {
						this.$U.Success("保存成功",function(){
							console.log("ddddd")
							uni.switchTab({
									url: '../index/index'
							})
						})
					} else {
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
