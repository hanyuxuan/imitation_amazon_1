$(function(){
	/*sort nav active*/
	$('#js-sortNav > li').on("click touchend",function(){
		$('#js-sortNav > li').removeClass('active');
		$('.sort-content-info-de').removeClass('js-sort-show');
		$(this).addClass('active');
		$('.sort-content-info-de').eq($(this).index()).addClass('js-sort-show');
	})
})
