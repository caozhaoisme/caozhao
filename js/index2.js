// 顶部广告
$('#guanggao .btn').click(function(){
	$('#guanggao').fadeOut();
})

// 地址栏二级菜单单击事件
$('#dizhi .dingbu .wei .list ul li').click(function(){
	// 所有选项移除active属性
	$('#dizhi .dingbu .wei .list ul li span').removeClass('active');
	// 当前添加active属性
	$(this).children().addClass('active');
	// 将当前选择的文本内容赋值给地址栏显示
	var content = $(this).text();
	$('#dizhi .dingbu .wei .dizhi').text(content);
	// 修改地址栏宽度
	$('#dizhi .dingbu .wei .cover').width($('#dizhi .dingbu .wei').width())
})


//  倒计时右侧轮播
// 获取li的长度
var lens = $('.lun1>li').length;
// console.log(lens);//4 
// 克隆第一张
var firstImgli = $('.lun1>li:eq(0)').clone();
// console.log(firstImgli);
// 把第一张追加到最后边
var ul = $('.lun1').append(firstImgli);
// console.log(ul);
var time = 0;
var index = 0;
// console.log($('.left_arr'));

// 鼠标点击左边
$('.left_arr').click(function(){
	index--;
	if(index < 0){
		index = lens - 1;
		$(ul).css({left:-lens*800});
	}
	$(ul).stop(true).animate({left:-index*800},500);
})

// 鼠标点击右边
$('.right_arr').click(function(){
	index++;
	if(index > lens){
		index = 1;
		$(ul).css({left:0});
	}
	$(ul).stop(true).animate({left:-index*800},500)
})


// 倒计时最右侧小轮播
// 获取元素
var liNum = $('#pic>li').length;
// 克隆第一张
var firstImgli = $('#pic>li:eq(0)').clone();
var li = $('#pic').append(firstImgli);
// console.log($('#pic'));

// var tme = 0;
var inde = 0;

// 小圆点
function run(){
	setInterval (function () {
	//console.log($('.point > li'));
	$('.point>li:eq(' + inde % liNum + ')').removeClass('active_red');
		inde++;
		if(inde > liNum) {
			$('#pic').css({left:0});
			inde = 1;
			
		}
		$('.point>li:eq(' + inde % liNum + ')').addClass('active_red');
		$('#pic').animate({left:-180*inde},600);
	},1000);
}
run();

// 轮播图右侧第二部分(选项卡)移入事件
$('#lun>.bo>.youce>.second>.title>li').eq(0).mouseover(function(){
	$('#lun>.bo>.youce>.second>.title>.line>.move').animate({
		left : 0
	})
	$('#lun>.bo>.youce>.second>.content').hide();
	$('#lun>.bo>.youce>.second>.content1').show();
})
$('#lun>.bo>.youce>.second>.title>li').eq(1).mouseover(function(){
	$('#lun>.bo>.youce>.second>.title>.line>.move').animate({
		left : 46
	})
	$('#lun>.bo>.youce>.second>.content').hide();
	$('#lun>.bo>.youce>.second>.content2').show();
})

var louHei = $('#lou').height();
// 打开页面时,计算楼层导航的top值
var viewHei = $(window).height();
var louTop = (viewHei - louHei) / 2;
// 控制楼层及工具栏的高度及top值
$('#lou').css({
	top : louTop
})
$('#menu').css({
	height : viewHei
})
$('#menu .top').css({
	top : 14 + (viewHei - 150)/ 2
})
// 判断body的scrollTop值,控制楼层显示隐藏
$(window).scroll(function(){
	if($(this).scrollTop() > 918){
		$('#lou').fadeIn();
	} else {
		$('#lou').fadeOut();
	}
})
$(window).resize(function(){
	// 获取当前页面可视区域的高度
	viewHei = $(window).height();

	// 计算楼层导航top值
	louTop = (viewHei - louHei) / 2;
	// 控制楼层及工具栏的高度及top值
	$('#lou').animate({
		top : louTop
	},50)
	$('#menu').css({
		height : viewHei
	})
	$('#menu .top').css({
		top : 14 + (viewHei - 150)/ 2
	})
})

var yeHei = $('.love').eq(0).height();
var varient = yeHei + 30;
var num;
// 滚动条事件
$(window).scroll(function(){
	// 获取当前滚动条的位置
	var top = $(window).scrollTop();
	// 判断滚动条位置,改变body的scrollTop值
	if(top < 918){
		num = 0;
	} else if(top > 918 && top < 1461) {
		num = 1;
	} else if(top > 1461 && top < 1526) {
		num = 2;
	} else if(top > 1526 && top < 2006) {
		num = 3;
	} else if(top > 2006 && top < 2486) {
		num = 4;
	} else if(top > 2486 && top < 6155) {
		num = 5;
	} else if(top > 6155 && top < 6718) {
		num = 6;
	} else if(top > 6718 && top < 7271) {
		num = 7;
	} else if(top > 7271 && top < 7824) {
		num = 8;
	} else if(top > 7824 && top < 8835) {
		num = 9;
	} else if(top > 8835) {
		num = 10;
	}
	// 删除所有楼层导航active属性,添加当前页active属性
	$('#lou li').removeClass('active');
	$('#lou li').eq(num).addClass('active');
})

// 楼层单击改变body的scrollTop值
$('#lou li').click(function(){
	// 获取单击元素的索引
	var y = $(this).index(y);
	// 单击最后一个元素时返回顶部
	if(y == $('#lou li').length-1){
		$('html,body').animate({
			scrollTop:0
		},500);
	} else {
		var yeTop = $('.love').eq(y).offset(10).top;
		// 设置页面的scrollTop值,兼容性写法
		$('html,body').animate({
			scrollTop: yeTop - 80
		},500);

		// 删除所有楼层导航active属性,添加当前页active属性
		$('#lou li').removeClass('active');
		$('#lou li').eq(y).addClass('active');
	}	
})

// 右侧工具条单击返回顶部
$('#menu .bottom .return .icon').click(function(){
	$(window).scrollTop(0);
})



