var in_cb=document.getElementById('in_cb');

	window.onscroll=function(){
		
		var y=document.documentElement.scrollTop||window.pageYOffset;
		console.log(y);

		
		if(y>=800){
			
			in_cb.style.display='block';
			in_cb.style.position='fixed';
			in_cb.style.top=0+'px';
			in_cb.style.left=80+'px';
		}else if(y<800){
			
			in_cb.style.display='none';
		}
	}