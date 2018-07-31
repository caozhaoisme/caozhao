var db=document.getElementById('db');

	window.onscroll=function(){
		
		var y=document.documentElement.scrollTop||window.pageYOffset;
		console.log(y);

		//判断y>=1200
		if(y>=1200){
			//显示
			
			db.style.position='fixed';
			db.style.top=0+'px';
			db.style.left=200+'px';
			db.style.display='block';
		}else if(y<1200){
			//消失
			db.style.display='none';
		}
	}