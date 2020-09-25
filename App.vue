<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		//初始化登录状态
        this.$store.commit('initUser')
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
@import './component/colorui/main.css';
@import './component/colorui/icon.css';
/*每个页面公共css */

html,
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
li,
dt,
dd,
p,
blockquote,
pre,
form,
fieldset,
table,
th,
td {
	border: none;
	font-family: '微软雅黑', '黑体', '宋体';
	font-size: 30upx;
	margin: 0px;
	padding: 0px;
}
html,
body {
	height: 100%;
	width: 100%;
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
	font-style: normal;
	font-weight: normal;
}
a {
	text-decoration: none;
}
a:link {
	color: #fff;
}
a:visited {
	color: #fff;
}
a:hover {
	color: #fff;
}
a:active {
	color: #fff;
}
input::-ms-clear {
	display: none;
}
input::-ms-reveal {
	display: none;
}
input {
	-webkit-appearance: none;
	margin: 0;
	outline: none;
	padding: 0;
}
input::-webkit-input-placeholder {
	color: #ccc;
}
input::-ms-input-placeholder {
	color: #ccc;
}
input::-moz-placeholder {
	color: #ccc;
}
input[type='submit'],
input[type='button'] {
	cursor: pointer;
}
button[disabled],
input[disabled] {
	cursor: default;
}
img {
	border: none;
}
ul,
ol,
li {
	list-style-type: none;
}
/*公共方法*/
.clear {
	clear: both;
}
.clearleft {
	clear: left;
}
.clearright {
	clear: right;
}
.floatleft {
	float: left;
}
.floatright {
	float: right;
}
.cursor {
	cursor: pointer;
}
/*背景及色值表*/
.bg000 {
	background: #000;
}
.color000 {
	color: #000;
}

/* 中间 */
.swiper-container {
	height: 100vh;
}
.swiper-container .swiper-slide {
	height: 100vh;
}


/*1px解决方案*/
.border-t {
  border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAS0lEQVRIiWO8efPmf4YBAEwDYemAWsyCzFFTU2OkpWW3bt2CR+vIC+pRi0ctHrV41OJRi0ctHrV41OJRi4exxSjtauR2L63ByAtqAFI5C1evciRiAAAAAElFTkSuQmCC) 10 repeat;
  border-style: solid;
  border-width: 0px;
  border-top-width: 1px;
}

.border-b {
  border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAS0lEQVRIiWO8efPmf4YBAEwDYemAWsyCzFFTU2OkpWW3bt2CR+vIC+pRi0ctHrV41OJRi0ctHrV41OJRi4exxSjtauR2L63ByAtqAFI5C1evciRiAAAAAElFTkSuQmCC) 10 repeat;
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 1px;
}

.border-l {
  border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAS0lEQVRIiWO8efPmf4YBAEwDYemAWsyCzFFTU2OkpWW3bt2CR+vIC+pRi0ctHrV41OJRi0ctHrV41OJRi4exxSjtauR2L63ByAtqAFI5C1evciRiAAAAAElFTkSuQmCC) 10 repeat;
  border-style: solid;
  border-width: 0px;
  border-left-width: 1px;
}

.border-r {
  border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAS0lEQVRIiWO8efPmf4YBAEwDYemAWsyCzFFTU2OkpWW3bt2CR+vIC+pRi0ctHrV41OJRi0ctHrV41OJRi4exxSjtauR2L63ByAtqAFI5C1evciRiAAAAAElFTkSuQmCC) 10 repeat;
  border-style: solid;
  border-width: 0px;
  border-right-width: 1px;
}

.border-tb {
  border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAS0lEQVRIiWO8efPmf4YBAEwDYemAWsyCzFFTU2OkpWW3bt2CR+vIC+pRi0ctHrV41OJRi0ctHrV41OJRi4exxSjtauR2L63ByAtqAFI5C1evciRiAAAAAElFTkSuQmCC) 10 repeat;
  border-style: solid;
  border-width: 0px;
  border-top-width: 1px;
  border-bottom-width: 1px;
}

.border-tl {
  border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAS0lEQVRIiWO8efPmf4YBAEwDYemAWsyCzFFTU2OkpWW3bt2CR+vIC+pRi0ctHrV41OJRi0ctHrV41OJRi4exxSjtauR2L63ByAtqAFI5C1evciRiAAAAAElFTkSuQmCC) 10 repeat;
  border-style: solid;
  border-width: 0px;
  border-top-width: 1px;
  border-left-width: 1px;
}

.border-rb {
  border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAS0lEQVRIiWO8efPmf4YBAEwDYemAWsyCzFFTU2OkpWW3bt2CR+vIC+pRi0ctHrV41OJRi0ctHrV41OJRi4exxSjtauR2L63ByAtqAFI5C1evciRiAAAAAElFTkSuQmCC) 10 repeat;
  border-style: solid;
  border-width: 0px;
  border-right-width: 1px;
  border-bottom-width: 1px;
}

.border {
  border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAS0lEQVRIiWO8efPmf4YBAEwDYemAWsyCzFFTU2OkpWW3bt2CR+vIC+pRi0ctHrV41OJRi0ctHrV41OJRi4exxSjtauR2L63ByAtqAFI5C1evciRiAAAAAElFTkSuQmCC) 10 repeat;
  border-style: solid;
  border-width: 1px;
}

.radius {
  border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABeklEQVRYhe2ZPU7DMABGX1KRLqi9AxMDFQdhoEDDAhfpEdqFgZ6BKeUkTCwMHagEUqWylYVmgSF24rruD5jEGfwkS47t2C+JPOQzmImAa+ABeAWWwPc/l0/gRawRizX34gKYlCC0q0yAy21iDWDgQEwvA+Gyhi73AfSBDtDc9mR/pCnm7ou1dMkVetqAMdAuQWoTbSDRHHqyMwLelI5HIKhQThKQvRjp8S7cuGH1s7YcyElawFzxuQ2BrjLgHlg4EJMsgDvlugswpTA+rd5pjQ6FzxTgS2koY7f+lojCZxmIisTF5jCRO4UuLfbBC9riBW3xgrZ4QVu8oC1e0BYvaIsXtMUL2hKSpUySOvw0HSr1NARmSsNxxTImjpT6LASelYbzimVMnCn1J1iNPubULPqA9fBoTH3Co3xPxNQvfov1QUNtgAwwT4CDEqQiMbcpwByabmiQpVuuI+ARGyJgyRXuQvQ8Vd1FRLa7E7JjiLQEoVTMnYi1jMcQPzFEClo+tKTPAAAAAElFTkSuQmCC) 6 repeat;
  border-style: solid;
  border-width: 1px;
}

.border-c {
  border: 1px solid #d9d8d8;
  border-radius: 4px;
}
.uni-switch .wx-switch-input:not([class*="bg-"]), uni-switch .uni-switch-input:not([class*="bg-"]){
	background-color: rgb(255, 117, 169) !important;
}
</style>
