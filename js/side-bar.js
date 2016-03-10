$slide_menu = $(".slide-menu");
$main_wrapper = $(".main-wrapper");
slide_bar_is_open = false;
$(".menu-icon").click(function(){
	if (slide_bar_is_open) {
		$slide_menu.css({
			right: -542 + "px",
		});	
		$main_wrapper.css({
			right: 0 + "px",
		});
		slide_bar_is_open = false;
	}else {
		$slide_menu.css({
			right: 0 + "px",
		});	
		$main_wrapper.css({
			right: 542 + "px",
		});
		slide_bar_is_open = true;
	}
});