$(function() {
	var width = $(window).width();
	var temp = 62.5 * width / 320;
	temp += "%";
	$("html").css("fontSize", temp);

	/********* 订单页面 *********/
	$(document).on("tap", ".tab", function() {
		$(".no-order").hide();
		if($(this).hasClass("fail")) {
			$(".fail-order").show();
			$(".success-order").hide();
			$(".bottom-div").hide();
			if($(this).attr("choose") != "choose") {
				$(".slide").css({
					left: 0
				});
			}
		} else if($(this).hasClass("success")) {
			$(".fail-order").hide();
			$(".success-order").show();
			$(".bottom-div").show();
			if($(this).attr("choose") != "choose") {
				$(".slide").css({
					left: "50%"
				});
			}
		}
		$(this).parent().find(".tab").removeAttr("choose");
		$(this).attr("choose", "choose");
	});

})