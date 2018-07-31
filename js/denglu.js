// 登录框选项卡单击事件
$('#deng_1>.deng_2>.deng_3>.deng_5>li').click(function(){
	// 获取单击的选项索引
	var index = $(this).index();
	// 所有选项移除active属性
	$('#deng_1>.deng_2>.deng_3>.deng_5>li').removeClass('active');
	// 当前添加active属性
	$(this).addClass('active');
	$('#deng_1>.deng_2>.deng_3>.card>li').removeClass('active_card');
	$('#deng_1>.deng_2>.deng_3>.card>li').eq(index).addClass('active_card');
})


// 扫码登录鼠标移入事件
$('#deng_1>.deng_2>.deng_3>.card>li>.main').bind('mouseenter',function(){
	// 判断遮盖框是否显示,没有显示时执行
	if($('#deng_1>.deng_2>.deng_3>.card>li>.main>.deng_1_m>.cover').css('display') == 'none'){
		// 二维码左移
		$('#deng_1>.deng_2>.deng_3>.card>li>.main>.deng_1_m').css({
			'margin-left' : '0'
		});
		// 手机图片显示(延迟0.3s)
		$('#deng_1>.deng_2>.deng_3>.card>li>.main>img').css({
			'opacity' : '1',
			'transition-delay' : '0.3s'
		})
	}
}).bind('mouseleave',function(){
	// 二维码移回原位置
	$('#deng_1>.deng_2>.deng_3>.card>li>.main>.deng_1_m').css({
		'margin-left' : '74.5px'
	});
	// 手机图片隐藏(立刻)
	$('#deng_1>.deng_2>.deng_3>.card>li>.main>img').css({
		'opacity' : '0',
		'transition-delay' : '0s'
	})
})

	

