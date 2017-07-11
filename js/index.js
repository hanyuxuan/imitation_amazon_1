$(function(){
	console.log('素材来源：http://www.cssmoban.com/');
})

var $categories = $('#js_category-list > li');
var $categoryInfos = $('#js_category-info > .category-pane');
var nowNum = 0;
$categories.on("mouseover",function(){
	nowNum = $(this).index();
	$categoryInfos.addClass('hidden');
	$categories.removeClass('active');
	
	$('.category-pane').addClass('hidden');
	$(this).addClass('active');
	$('#js_category-info').removeClass('hidden');
	$categoryInfos.eq(nowNum).removeClass('hidden');
})

$categories.on("mouseout",function(){
	$(this).removeClass('active');
	$('#js_category-info').addClass('hidden');
})

$('#js_category-info').on('mouseover',function(){
	$(this).removeClass('hidden');
	$categories.eq(nowNum).addClass('active');
})
$('#js_category-info').on('mouseout',function(){
	$(this).addClass('hidden');
	$categories.removeClass('active');
})