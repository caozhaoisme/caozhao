//获取元素
	var tab=document.getElementById("tab");
	var tabli=tab.getElementsByTagName("li");
	var cont=document.getElementById("cont");
	var contdiv=cont.getElementsByTagName("div");
	
	
	//li遍历 鼠标移入的事件
	for(var i=0;i<tabli.length;i++){
		//li的下标和contdiv的下标一样
		tabli[i].index=i;


		
		//鼠标移入事件
		tabli[i].onmouseover=function(){
			//遍历
			for(var i=0;i<tabli.length;i++){
				//原来是显示的 空 就是隐藏
				tabli[i].className='';
				//原来是显示的 给hide表示隐藏
				contdiv[i].className='hide';

			}
			
	
			//li 显示 div去掉隐藏属性 就显示了
			tabli[this.index].className='act';
			contdiv[this.index].className='';
		}
		

	}

	
		

	
	
	