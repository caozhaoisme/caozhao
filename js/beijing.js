var h3 = document.getElementsByTagName('h3')[0];
	// console.log(h3);
	var add = document.getElementById('add');
	var lis = add.getElementsByTagName('li');
	var a = document.querySelectorAll('a');
	// console.log(a.childNodes);
	// console.log(as[1]);
	h3.onmouseover = function() {
		add.style.display = 'block';
		h3.style.backgroundColor = '#fff';
	}
	h3.onmouseout = function() {
		add.style.display = 'none';
		h3.style.backgroundColor = '#eee';
	}
	add.onmouseover = function() {
		add.style.display = 'block';
		h3.style.backgroundColor = '#fff';
	}
	add.onmouseout = function() {
		add.style.display = 'none';
		h3.style.backgroundColor = '#eee';
	}
	// console.log(h3.innerHTML);
	// console.log(as[1].innerHTML);
	console.log(a);
	for (var i = 0;i < lis.length;i++) {
		lis[i].index = i;
		lis[i].onclick = function() {
			for (var j = 0;j < a.length;j++) {
				a[j].removeAttribute('class');
			}
			h3.innerHTML = a[this.index].innerHTML;
			lis[this.index].backgroundColor = '#fff';
			a[this.index].className = 'red';
		}
	}