<template>
	<view>
		<view class="box">
			<view class="Canvas_box">
				<view class="title_box">体重记录</view>
				<canvas id="Weight"></canvas>
			</view>
			<view class="Canvas_box">
				<view class="title_box">血压记录</view>
				<canvas id="blood"></canvas>
			</view>
		</view>
		<navigator class="btn" url="self_testing">心里健康测试</navigator>
	</view>
</template>
<script>
	import F2 from "@antv/f2"
	const Legend = require('@antv/f2/lib/plugin/legend');
	export default {
		data() {
			return {
				weightR: [{
						week: '一周',
						weight: 10
					},
					{
						week: '二周',
						weight: 20
					},
					{
						week: '三周',
						weight: 30
					},
					{
						week: '四周',
						weight: 50
					},
					{
						week: '五周',
						weight: 48
					},
					{
						week: '六周',
						weight: 55
					},
					{
						week: '七周',
						weight: 55
					}
				],
				bloodR: [{
					name: 'London',
					月份: 'Jan.',
					月均降雨量: 18.9
				}, {
					name: 'London',
					月份: 'Feb.',
					月均降雨量: 28.8
				}, {
					name: 'London',
					月份: 'Mar.',
					月均降雨量: 39.3
				}, {
					name: 'London',
					月份: 'Apr.',
					月均降雨量: 81.4
				}, {
					name: 'London',
					月份: 'May.',
					月均降雨量: 47
				}, {
					name: 'London',
					月份: 'Jun.',
					月均降雨量: 20.3
				}, {
					name: 'London',
					月份: 'Jul.',
					月均降雨量: 24
				}, {
					name: 'London',
					月份: 'Aug.',
					月均降雨量: 35.6
				}, {
					name: 'Berlin',
					月份: 'Jan.',
					月均降雨量: 12.4
				}, {
					name: 'Berlin',
					月份: 'Feb.',
					月均降雨量: 23.2
				}, {
					name: 'Berlin',
					月份: 'Mar.',
					月均降雨量: 34.5
				}, {
					name: 'Berlin',
					月份: 'Apr.',
					月均降雨量: 99.7
				}, {
					name: 'Berlin',
					月份: 'May.',
					月均降雨量: 52.6
				}, {
					name: 'Berlin',
					月份: 'Jun.',
					月均降雨量: 35.5
				}, {
					name: 'Berlin',
					月份: 'Jul.',
					月均降雨量: 37.4
				}, {
					name: 'Berlin',
					月份: 'Aug.',
					月均降雨量: 42.4
				}]
			}
		},
		onLoad() {
			this.getWeight();
			this.getBlood();
		},
		methods: {
			getWeight() {
				this.$H.post('/gravidawiki/gravidaTest/findMyTestData', {
					whichData: 'W'
				}, {
					token: true
				}).then(res => {
					console.log('体重')
					console.log(res);
				})
			},
			getBlood() {
				this.$H.post('/gravidawiki/gravidaTest/findMyTestData', {
					whichData: 'P'
				}, {
					token: true
				}).then(res => {
					console.log('血压')
					console.log(res);
				})
			},

			WeightChart() {
				// Step 1: 创建 Chart 对象
				var el = document.querySelector("#Weight");
				var canvas = el.querySelector("canvas");
				const chart = new F2.Chart({
					el: canvas,
					plugins: Legend,
					pixelRatio: window.devicePixelRatio // 指定分辨率
				});
				chart.axis("weight", {
					line:{
						stroke:"#CCCCCC",
						lineWidth:1,
					},
					grid:null,
					label:null,
				});
				// Step 2: 载入数据源
				console.log(this.data);
				chart.source(this.weightR);
				// Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
				chart.interval().position('week*weight').size(14).color('#FFB7D2');
				chart.line().position('week*weight').shape("smooth").size(1).color('#FFB7D2');
				// Step 4: 渲染图表
				chart.render();
			},
			bloodChart() {
				var el = document.querySelector("#blood");
				var canvas = el.querySelector("canvas");
				var chart = new F2.Chart({
					el: canvas,
					pixelRatio: window.devicePixelRatio
				});
				chart.source(this.bloodR, {
					'月均降雨量': {
						tickCount: 5
					}
				});
				chart.tooltip({
					custom: true, // 自定义 tooltip 内容框
					onChange: function onChange(obj) {
						var legend = chart.get('legendController').legends.top[0];
						var tooltipItems = obj.items;
						var legendItems = legend.items;
						var map = {};
						legendItems.map(function(item) {
							map[item.name] = _.clone(item);
						});
						tooltipItems.map(function(item) {
							var name = item.name;
							var value = item.value;
							if (map[name]) {
								map[name].value = value;
							}
						});
						legend.setItems(_.values(map));
					},
					onHide: function onHide() {
						var legend = chart.get('legendController').legends.top[0];
						legend.setItems(chart.getLegendItems().country);
					}
				});
				chart.interval().position('月份*月均降雨量').color('name', ["#4A90E2", "#FFB7D2"]).size(14).adjust('stack');
				chart.render();
			}
		},
		mounted() {
			var v = this;
			this.$nextTick(() => {
				this.WeightChart();
				this.bloodChart();
			});
		},
		created() {

		}
	}
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.box {
		margin-bottom: 105rpx;

		.Canvas_box {

			width: 100%;

			.title_box {
				text-align: center;
				padding: 45rpx 0 12rpx 0;
			}

			>canvas {
				width: 100%;
				height: 450rpx;
			}
		}

	}

	.btn {
		height: 98rpx;
		line-height: 98rpx;
		text-align: center;
		margin: 0 30rpx;
		border-radius: 8rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		background-color: $uni-bg-pink;

	}
</style>
