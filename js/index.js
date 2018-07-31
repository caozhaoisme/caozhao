// 轮播图
var box = document.getElementById('box');

//获取所有的li
var lis = box.children[0].children;

//获取所有的原点序列li
var cirs = box.children[1].children[0].children;

//获取左右箭头
var arrl = document.getElementById('left');	
var arrr = document.getElementById('right');

//定义轮播图的标记
var index = 0;

//index表示当前显示的元素的索引
var run;

//定义轮播图轮播的函数
var lun = function(){
	//周期性定时器setInterval调用后会返回一个当前定时器的标记
	run = setInterval(function(){
		lis[index].removeAttribute('class');
		cirs[index].removeAttribute('class');

		//索引值+1
		index++;

		//index的临界点的判断
		if(index > lis.length-1){
			//设置index的值为0
			index = 0;
		}

		lis[index].setAttribute('class','active');
		cirs[index].setAttribute('class','activecir');
	},2000)
}

//用户第一次进入页面时需要手动调用轮播图函数
lun();

//轮播图的移入事件
box.onmouseenter = function(){
	//停止标记名为run的定时器
	clearInterval(run);
}

//box的鼠标移出事件
box.onmouseleave = function(){
	//再次调用轮播图函数
	lun();
}

//给所有的圆点序列设置鼠标的移入和移出事件
for(i = 0;i < lis.length;i++){
	cirs[i].onmouseenter = (function(i){

		/*
			当我们移动到指定的点上是,让当前对应的li显示,之前显示的隐藏
		*/
		return function(){
			lis[index].removeAttribute('class');
			cirs[index].removeAttribute('class');

			//将当前的索引值赋值给index
			index = i;

			//显示当前
			lis[index].setAttribute('class','active');
			cirs[index].setAttribute('class','activecir');
		}
	})(i)
}

//左箭头的单击事件
arrl.onclick = function(){
	//当前的隐藏
	lis[index].removeAttribute('class');
	cirs[index].removeAttribute('class');

	//上一张
	index--;

	//左箭头的临界点
	if(index < 0){
		//设置最大的索引值
		index = lis.length-1;
	}

	//上一张显示
	lis[index].setAttribute('class','active');
	cirs[index].setAttribute('class','activecir');
}

//左箭头的单击事件
arrr.onclick = function(){
	//当前的隐藏
	lis[index].removeAttribute('class');
	cirs[index].removeAttribute('class');

	//下一张
	index++;

	//右箭头的临界点的问题
	if(index > lis.length-1){
		//重置为0
		index = 0;
	}

	//下一张显示
	lis[index].setAttribute('class','active');
	cirs[index].setAttribute('class','activecir');
}


	// 倒计时
	var hournum = document.getElementById('hournum');
	var minutenum = document.getElementById('minutenum');
	var secondnum = document.getElementById('secondnum');

	// 定义获取开始时间
	var startTime = new Date('2018-5-1 22:33:00');

	// 定义补充前导0函数
	function zeroFill(num){
		if(num < 10){
			num = '0' + num;
		}
		// 返回结果
		return num;
	}

	/**
	*	设置倒计时函数	djjishi()
	*/ 
	function djjishi(){
		// 当前此刻的时间
		var nowTime = new Date();

		// 时间的差值(毫秒数的差值)
		var timeCha = startTime - nowTime;
		// 判断时间的差值是否已经 < 0
		if(timeCha < 0){
			timeCha = 0;
			startTime = Number(startTime) + 1000 * 60 * 60 * 2;
			setInterval(djjishi,1000);

			clearInterval(run);
		}
		// 计算小时
		hour = zeroFill(Math.floor(timeCha / 1000 / 60 / 60));

		// 计算分钟
		timeCha = timeCha - hour * 60 * 60 * 1000;
		minute = zeroFill(Math.floor(timeCha / 1000 / 60));

		// 计算秒
		timeCha = timeCha - minute * 60 * 1000;
		second = zeroFill(Math.floor(timeCha / 1000));

		// 设置时间
		hournum.innerHTML = hour;
		minutenum.innerHTML = minute;
		secondnum.innerHTML = second;
	}
	// 用户进入页面时,调用设置倒计时的函数
	djjishi();

	// 周期性调用
	run = setInterval(djjishi,1000);

// 搜索滚动条
var topnav = document.getElementById('topnav');

// 滚动条的滚动事件
window.onscroll = function(){
	// 当前滚动条的值
	var s = document.documentElement.scrollTop;
	var hei = document.documentElement.clientHeight;
	if(s >= 600){
		topnav.style.top = '0';
	} else {
		topnav.style.top = '-52px';
	}
}

// 特色推荐轮播图
	var llts=document.getElementById("img").getElementsByTagName("li");
	var num_lis=document.getElementById("num").getElementsByTagName("li");
	var zuo=document.getElementById("zuo");
	var you=document.getElementById("you");

	var i=0;

	function autoRun(){

		run=setInterval(function(){

			llts[i].removeAttribute('class');
			num_lis[i].firstElementChild.removeAttribute('class');
			i++;
			if (i==llts.length) {
				i=0;
			}
			llts[i].setAttribute('class','active');

			num_lis[i].firstElementChild.setAttribute('class','active_num');
		},8000)
	}
	autoRun();

	for(var j=0;j<llts.length;j++){

		llts[j].onmouseover=function(){
			clearInterval(run);
			zuo.style.display="block";
			you.style.display="block";
		}
		llts[j].onmouseout=function(){
			autoRun();
			zuo.style.display="none";
			you.style.display="none";
		}
	}

	for(var k=0;k<num_lis.length;k++){
		num_lis[k].index=k;
		num_lis[k].onmouseover=function(){

			clearInterval(run);

			llts[i].removeAttribute('class');
			num_lis[i].firstElementChild.removeAttribute('class');
			i=this.index;

			llts[i].setAttribute('class','active');
			num_lis[i].firstElementChild.setAttribute('class','active_num');
		}
		num_lis[k].onmouseout=function(){

			autoRun();
		}
	}

	you.onmouseover=function(){
		zuo.style.display="block";
		you.style.display="block";

		clearInterval(run);
	}
	you.onmouseout=function(){
		zuo.style.display="none";
		you.style.display="none";

		autoRun();
	}
	you.onclick=function(){
		llts[i].removeAttribute('class');
		num_lis[i].firstElementChild.removeAttribute('class');
			i++;

			if(i==llts.length){
				i=0;
			}

			llts[i].setAttribute('class','active');
			num_lis[i].firstElementChild.setAttribute('class','active_num');
	}
	zuo.onmouseover=function(){
		zuo.style.display="block";
		you.style.display="block";

		clearInterval(run);
	}
	zuo.onmouseout=function(){
		zuo.style.display="none";
		you.style.display="none";
		autoRun();
	}
	zuo.onclick=function(){
		llts[i].removeAttribute('class');
		num_lis[i].firstElementChild.removeAttribute('class');
		i--;
		if(i<0){
			i=llts.length-1;
		}
		llts[i].setAttribute('class','active');
		num_lis[i].firstElementChild.setAttribute('class','active_num');
	}
