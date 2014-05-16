var $dropDiv = $('#name');
$( window ).load( function() {
    /*$("#name").css({
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
        });*/

    $("#name").addClass('animated fadeInDown');
    $("#description").addClass('animated fadeInDown');
    $("#icons").addClass('animated fadeInUp');



    $('.col-md-2 img').mouseover(function (){
        $(this).removeClass('desaturate');

    });

    $('.col-md-2 img').mouseout(function (){
        $(this).addClass('desaturate');

    });
    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},2000);
    }

    $("#link").click(function() {
       scrollToAnchor('contact');
    });
});