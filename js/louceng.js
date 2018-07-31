var ll_cb=document.getElementsByTagName('ll_cb');
var  ll_cbl=document.getElementById('ll_cbl');

	//滚动事件

	window.onscroll=function(){
		//alert(11);
		//scrollTop值
		var y=document.documentElement.scrollTop||window.pageYOffset;
		console.log(y);

		//判断y>=1000
		if(y>=1200){
			//显示
			ll_cbl.style.display='block';
			
		}else if(y<1200){
			//消失
			ll_cbl.style.display='none';
		}
	}