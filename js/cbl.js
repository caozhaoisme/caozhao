// var ll_cbl=document.getElementById('ll_cbl');
// var ll_cb=document.getElementsByTagName('ll_cb');
var l_cb =ll_cbl.getElementsByTagName('li');
   
 //   	l_cb.onmouseover = function() {
	// 	l_cb.style.backgroundColor = '#F35F5F';
		
	// }
	// l_cb.onmouseout = function() {
		
	// 	l_cb.style.backgroundColor = 'white';
	// }
	for(var q=0;q<l_cb.length;q++){
		l_cb[q].onmouseover = function() {
		this.style.backgroundColor = '#F35F5F';
		
		
	}
		l_cb[q].onmouseout = function() {
		
		this.style.backgroundColor = 'white';
		
	}

	
}	
	





 