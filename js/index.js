$(function() {
	console.log('素材来源：http://www.cssmoban.com/');

	var $categories = $('#js_category-list > li');
	var $categoryInfos = $('#js_category-info > .category-pane');
	var nowNum = 0;
	$categories.on("mouseover", function() {
		nowNum = $(this).index();
		$categoryInfos.addClass('hidden');
		$categories.removeClass('active');

		$('.category-pane').addClass('hidden');
		$(this).addClass('active');
		$('#js_category-info').removeClass('hidden');
		$categoryInfos.eq(nowNum).removeClass('hidden');
	})

	$categories.on("mouseout", function() {
		$(this).removeClass('active');
		$('#js_category-info').addClass('hidden');
	})

	$('#js_category-info').on('mouseover', function() {
		$(this).removeClass('hidden');
		$categories.eq(nowNum).addClass('active');
	})
	$('#js_category-info').on('mouseout', function() {
		$(this).addClass('hidden');
		$categories.removeClass('active');
	})

	/*移动端引导底部栏*/
	$('#navCir li').on('click touchend', function() {
		$('#navCir li').removeClass('click');
		$(this).addClass('click');
	})

	/*移动端手指控制轮播图*/
	var $adCarousel = $("#nav > .container .carousel");
		
	$adCarousel.one("touchstart",function(){
		FingersSlidingdirection();
	})

	function FingersSlidingdirection(){
		var startPos = 0;
		var endPos = 0;
		$adCarousel.on("touchstart",function(e){
			startPos = e.originalEvent.changedTouches[0].clientX;
		})
		$adCarousel.on("touchmove",function(e){
			endPos = e.originalEvent.changedTouches[0].clientX;
		})
		$adCarousel.on("touchend",function(e){
			if(endPos - startPos >= 50){
				//prev
				$adCarousel.carousel('prev');
			}else if(endPos - startPos <= 50){
				//next
				$adCarousel.carousel('next');
			}
		})
	}
	/*end移动端手指控制轮播图*/

	/*侧面菜单*/
	$('[class ^= "side-"]').on('mouseover',function(){
		$(this).addClass('a-hover');
		if($(this).find('.js-show') != null){
			$(this).find('.js-show').css('display','block');
		}
	})
	$('[class ^= "side-"]').on('mouseout',function(){
		$(this).removeClass('a-hover');
		$('.js-show').css('display','none');
	})
	
	$('.user-info').on('mouseout',function(){
		$(this).css('display','none');
	})
	
//	var toTop = document.getElementById("js_toTop");
//	var header = document.getElementById("header");
//	toTop.onclick = function(){
//		animate(header,{"height":0},function(){
//			console.log('到顶了')
//		});
//	}
})