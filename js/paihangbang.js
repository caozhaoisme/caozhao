
	// 设置li的移入事件
	$('.pai-two ul li').mouseenter(function(){
		// 显示当前li其余隐藏
		$(this).addClass('selected').siblings().removeClass('selected');
		// 获取当前的下标
		var index=$(this).index();
		$('.pai-three>div').eq(index).show().siblings().hide();
	})



// 会买专辑

    var now=0;
	var len=$('.hui-two>div').length;

	function run(){
		s=setInterval(function(){

			$('.hui-two>.two-one').hide();
			$('.hui-four>ul>li').css('background','white');
			if(now>=len-1){
				now=0;
			}else{
				now++;
			}

			$('.hui-two>.two-one:eq('+now+')').show();
			$('.hui-four>ul>li:eq('+now+')').css('background','red');

		},2000)
	}
	run();

	$('.hui-four>li').mouseover(function(){

		clearInterval(s);
		$('.hui-four>li').hide();
		$('.hui-four>ul>li').css('background','red');

		now=$(this).index();
		$('.hui-four>li:eq('+now+')').show();
		$('.hui-four>ul>li:eq('+now+')').css('background','red');

	})

$('.three-left').click(function(){
		$('.hui-two>.two-one').hide();

		now--;

		if(now<0){
			now=len-1;
		}

		$('.hui-two>.two-one:eq('+now+')').show();

	})

	$('.three-right').click(function(){
		$('.hui-two>.two-one').hide();

		now--;

		if (now>len-1) {
			now=0;
		}

		$('.hui-two>.two-one:eq('+now+')').show();

	})


$('#slide ul li').mouseenter(function(){
	$(this).addClass('selected').siblings().removeClass('selected');
	var index=$(this).index();
	$('#ling-two-one>div').eq(index).show().siblings().hide();
})
