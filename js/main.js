$(function() {
	$(".pc1-ipt").click(function() {
		$(".opcity-wrap").css("display","block");
		$(".opcity-wrap").addClass("animated fadeInLeft");
		
	})
	$("#remove").click(function() {
		$(".opcity-wrap").css("display","none");
	})
	$("#ads-ul li").click(function() {
		
		$(this).html();
		console.log($(this).html());
		$("#pc1-ads").html($(this).html());
		$(".opcity-wrap").css("display","none");
		
	})
	
	
	var miao = 60;
	var fen = 59;
	var shi = 23;
	var timer = setInterval(function(){
		miao--;
		console.log(miao);
		if(miao <= 0) {
			fen--;
			miao = 59;
			if(fen <= 0){
				shi--;
				fen = 59;
				if(shi <= 0){
					clearInterval(timer);
					shi = "00";
					fen = "00";
					miao = "00";
				}
			}
			
		}
		$(".p1-countdown span").eq(2).text(miao);
		$(".p1-countdown span").eq(1).text(fen);
		$(".p1-countdown span").eq(0).text(shi);
	},1000)
	
	$(".p1-ftbuy").on("click",function(){
		location.href = "index.html";
	});
	
})

