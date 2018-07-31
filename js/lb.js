
	var lis=document.getElementById("img").getElementsByTagName("li");
	// var num_lis=document.getElementById("num").getElementsByTagName("li");
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	//console.log(lis);

	//定义全局变量 下标i
	var i=0;
	
	
	//封装函数
	function autoRun(){
		//定时器
		run=setInterval(function(){
			//隐藏现在显示的图片
			lis[i].removeAttribute('class');
			
			//隐藏现在显示的数字颜色
			// num_lis[i].firstElementChild.removeAttribute('class');
			//显示下一张 下标自增
			i++;
			//判断i的值
			if(i==lis.length){
				i=0;
			}
			//显示下一张图片
			lis[i].setAttribute('class','active');
			//显示下一个数字
			// num_lis[i].firstElementChild.setAttribute('class','active_num');
		},1000)
	
	}
	//进入页面执行轮播
	autoRun();
	
	//每一张图片鼠标移入移出事件
	for(var j=0;j<lis.length;j++){
		
		//移入
		lis[j].onmouseover=function(){
			//清除定时器
			clearInterval(run);
			//显示左右箭头
			left.style.display="block";
			right.style.display="block";
		}
		
		//移出
		lis[j].onmouseout=function(){
			//继续执行
			autoRun();
			//隐藏左右箭头
			left.style.display="none";
			right.style.display="none";
		}
	
	}


	//每一个数字的移入移出 显示对应的图片
	// for(var k=0;k<num_lis.length;k++){
		
	// 	//图片i的值 等于现在鼠标移入的下标
	// 	//保存当前的k的值
	// 	num_lis[k].index=k;
	// 	//alert(k);
		
	// 	//鼠标移入
	// 	num_lis[k].onmouseover=function(){
	// 		//alert(k);
	// 		//alert(this.index);
				
	// 		//清除定时器
	// 		clearInterval(run);
				
	// 		//原先显示图片和数字的背景都要隐藏点
	// 		lis[i].removeAttribute('class');
	// 		num_lis[i].firstElementChild.removeAttribute('class');
			
	// 		//显示下一张图片和下一个相对应的数字 给i重新赋值
	// 		i=this.index;//当前鼠标移入的数字的下标
			
	// 		//显示和当前下标相对应的图片和数字
	// 		lis[i].setAttribute('class','active');
	// 		num_lis[i].firstElementChild.setAttribute('class','active_num');
				
	// 	}
	// 	//数字移出
	// 	num_lis[k].onmouseout=function(){
	// 		//调用函数
	// 		autoRun();
	// 	}
			
	// }
	
	//设置右箭头移入移出事件 和点击事件
	right.onmouseover=function(){
		//显示左右箭头
		left.style.display="block";
		right.style.display="block";
		//清除当前的定时器
		clearInterval(run);
	}
	right.onmouseout=function(){
		//隐藏左右箭头
		left.style.display="none";
		right.style.display="none";
		//继续执行
		autoRun();
	}
	
	//右箭头点击事件
	right.onclick=function(){
		//之前的数字和图片隐藏
		lis[i].removeAttribute('class');
		// num_lis[i].firstElementChild.removeAttribute('class');
	
		//全局变量i 自增
		i++;
		//判断
		if(i==lis.length){
			i=0;
		}
		//显示点击后的图片和数字
		lis[i].setAttribute('class','active');
		// num_lis[i].firstElementChild.setAttribute('class','active_num');
	
	
	}

	
	//设置左箭头移入移出事件 和点击事件
	left.onmouseover=function(){
		//显示左右箭头
		left.style.display="block";
		right.style.display="block";
		//清除当前的定时器
		clearInterval(run);
	}
	left.onmouseout=function(){
		//隐藏左右箭头
		left.style.display="none";
		right.style.display="none";
		//继续执行
		autoRun();
	}
	
	//左箭头点击事件
	left.onclick=function(){
		//之前的数字和图片隐藏
		lis[i].removeAttribute('class');
		// num_lis[i].firstElementChild.removeAttribute('class');
	
		//全局变量i 自增  0
		i--;// -1 6张图 下标是5
		//判断
		if(i<0){
			i=lis.length-1;
		}
		//显示点击后的图片和数字
		lis[i].setAttribute('class','active');
		// num_lis[i].firstElementChild.setAttribute('class','active_num');
	
	
	}