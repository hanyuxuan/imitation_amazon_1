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

	$adCarousel.one("touchstart", function() {
		FingersSlidingdirection();
	})

	function FingersSlidingdirection() {
		var startPos = 0;
		var endPos = 0;
		$adCarousel.on("touchstart", function(e) {
			startPos = e.originalEvent.changedTouches[0].clientX;
		})
		$adCarousel.on("touchmove", function(e) {
			endPos = e.originalEvent.changedTouches[0].clientX;
		})
		$adCarousel.on("touchend", function(e) {
			if(endPos - startPos >= 50) {
				//prev
				$adCarousel.carousel('prev');
			} else if(endPos - startPos <= 50) {
				//next
				$adCarousel.carousel('next');
			}
		})
	}
	/*end移动端手指控制轮播图*/

	/*侧面菜单*/
	$('[class ^= "side-"]').on('mouseover', function() {
		$(this).addClass('a-hover');
		if($(this).find('.js-show') != null) {
			$(this).find('.js-show').css('display', 'block');
		}
		if($(this).find('.animate-to-right').data('right')) {
			animate($(this).find('.animate-to-right').get(0), {
				"left": -93
			})
		}
	})
	$('[class ^= "side-"]').on('mouseout', function() {
		$(this).removeClass('a-hover');
		$('.js-show').css('display', 'none');
		if($(this).find('.animate-to-right').data('right')) {
			animate($(this).find('.animate-to-right').get(0), {
				"left": -120
			})
		}
	})

	$('.user-info').on('mouseout', function() {
		$(this).css('display', 'none');
	})

	//	百叶窗
/*
	function startMove(ele, attr, dis, speed) {
		var timer = null;
		clearInterval(timer);
		timer = setInterval(function() {
			var prevdis = parseInt(getStyle(ele, attr));
			var newDis = 0;

			if(prevdis < dis) {
				newDis = prevdis + speed;
				if(newDis >= dis) {
					newDis = dis;
					clearInterval(timer);
				}
			} else {
				newDis = prevdis - speed;
				if(newDis <= dis) {
					newDis = dis;
					clearInterval(timer);
				}
			}

			ele.style[attr] = newDis + 'px';
		}, 100);
	}
	function shutter(){
		
		var newsCont = $('#js-news-content span');
		var num = 0;
		var newsTimer = null;
		var timer = null;
		var dbtn = true;
		clearInterval(newsTimer);
		newsTimer = setInterval(function() {
			timer = setInterval(function() {
				if(num == newsCont.length) {
					clearInterval(timer);
					num = 0;
					dbtn = !dbtn;
				} else if(dbtn) {
					startMove(newsCont[num], 'top', 0, 8);
					num++;
				} else {
					startMove(newsCont[num], 'top', -20, 8);
					num++
				}
			}, 50);
		}, 4000);
	}
	shutter();
*/
})