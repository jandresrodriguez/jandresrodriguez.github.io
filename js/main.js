var $dropDiv = $('#name');
$( document ).ready( function() {
    // animate drop

     /*$("#name").show( "drop", 
                  {direction: "up"}, 3000 );*/


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
	        }, 1500, 'easeOutBounce');
        });

    
});