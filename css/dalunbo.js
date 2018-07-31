
	//获取元素list prev next
	var list=document.getElementById('list');
	var prev=document.getElementById('prev');
	var next=document.getElementById('next');
	var cont=document.getElementById('cont');
	
	//设置共用函数
	function animate(offset){
		//获取新的left值
		var newleft=parseInt(list.style.left)+offset
		//console.log(newleft);
		
		//判断条件newleft的值 走到第五张图片
		if(newleft<-4130){
			//从第一张重新走
			newleft=-590;
		}
		
		//判断newleft的值
		if(newleft>-590){
			//重新赋值 0 4200 -3000
			newleft=-4130;
		}
		
		//重新赋值
		list.style.left=newleft+'px';
	}
	
	//next 点击事件 下一张 list减少600
	next.onclick=function(){
		//调用函数
		animate(-590);
	}
	
	//prev 点击事件 上一张 list加600
	prev.onclick=function(){
		//调用函数
		animate(590);
	}
	
	//自动
	function pao(){
		run=setInterval(function(){
			//走下一张图片
			next.onclick();
		},5000);
	}
	pao();
	//鼠标移入移出事件
	cont.onmouseover=function(){
		clearInterval(run);
	}
	//鼠标移出 继续执行pao函数
	cont.onmouseout=pao;








