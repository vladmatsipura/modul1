$(".sqr_1").mouseenter( function() {
	$(".tr_2").css("visibility" , "visible");

}
);
$(".tr-up").mouseenter( function() {
	$(".tr1").css("visibility" , "visible");

}
);

$(".sqr_1").mouseleave( function(){
	$(".tr1").animate({top: '+=400px'}, 2000);
	$(".tr1").animate({right:'+=1100px'}, 2000);
});

$(".sqr_1").mouseleave( function(){
	$(".tr_2").animate({right:'+=1100px'}, 2000);
	$(".tr_)2").animate({top: '+=395px'}, 2000);
});
