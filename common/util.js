export default{
	formatTime: (date,type) => {
		var date = new Date(date);
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		if(type=="YMD"){
			return year + '-' + month + '-' + day ;
		}else{
			return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
		}
	},
	GetDateStr: (AddDayCount) => {
		var dd = new Date();
		dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
		var y = dd.getFullYear();
		var m = dd.getMonth() + 1; //获取当前月份的日期
		m = m < 10 ? '0' + m : m;
		var d = dd.getDate();
		d = d < 10 ? ('0' + d) : d;
		return y + "-" + m + "-" + d;
	},
	Toast(title) {
		uni.showToast({
			title: title,
			icon: 'none',
			image: '',
			duration: 1500,
			mask: false,
		});
	},
	Success(title, callback) {
	  uni.showToast({
	    title: title,
	    success: function () {
	      if (callback) {
	        setTimeout(function(){
	          callback();
	        }, 1000);
	      }
	    }
	  })
	},
}

