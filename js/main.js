var $dropDiv = $('#name');
$( window ).load( function() {
    $("#name").css({
            top: -200,
            opacity: 0,
            display: 'block'
        }).animate({
            top: 100,
            opacity: 1
        }, 1500, 'easeOutBounce',function(){

        	$("#description").css({
	            top: -200,
	            opacity: 0,
	            display: 'block'
	        }).animate({
	            top: 120,
	            opacity: 1
	        }, 1500, 'easeOutBounce',function(){

                $('#icons').fadeIn("slow");
            });
        });
});