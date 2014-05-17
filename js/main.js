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

    $('#submit-button').click(function() {
        $.ajax({
          type: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send.json',
          data: {
            'key': 'T7kt8SBtFLpaOOKZxBSO8A',
            'message': {
              'from_email': 'enanosanlo@gmail.com',
              'to': [
                  {
                    'email': 'jandres.rodriguezg@gmail.com',
                    'name': 'Juan Andres Rodriguez',
                    'type': 'to'
                  }
                ],
              'autotext': 'true',
              'subject': 'Web Personal',
              'html': '<strong>' + document.getElementById('inputName').value + '<br/><br/>' +
              document.getElementById('inputEmail').value + '</strong><br/><br/>' +
              document.getElementById('inputMessage').value
            }
          }
         }).done(function(response) {
           console.log(response); // if you're into that sorta thing
         });
    });
});