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
    $('.arrow i').mouseover(function (){
        $('#message-scroll').removeClass('animated fadeOutDown');
        $('#message-scroll').addClass('animated fadeInUp');

    });
    $('.arrow i').mouseout(function (){
        $('#message-scroll').removeClass('animated fadeInUp');
        $('#message-scroll').addClass('animated fadeOutDown');
    });    



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

var done = false;
  $(window).load(function(){
        $(document).scroll(function() {
            var top = $(document).scrollTop();
            if(top>300){
              $("#skills").addClass('animated fadeInDown');
            }
            if (top>400){
              $('#knobs1').addClass('animated fadeInLeft');
              $('#knobs2').addClass('animated fadeInRight');
            }
            if (top>450){
              $('#knobs3').addClass('animated fadeInLeft');
              $('#knobs4').addClass('animated fadeInRight');
            }
            if (top >= 900 && !done) {
              done =true;
              
                $(".dial").val(0).trigger('change');
          $(".dial").each(function () {
                $(this).animate({
                    value: $(this).attr("data-val-after")
                }, {
                    duration: 2000,
                    easing: 'swing',
                    progress: function () {
                        $(this).val(Math.round(this.value)).trigger('change');
                    }
                });
            });
            }

            if (top >= 1000 ) {
                $("#navigation").addClass('navigation-fixed');
                $("#navigation").addClass('animated pulse');
                $()
            }
            else{
              $("#navigation").removeClass('navigation-fixed');
              $("#navigation").removeClass('animated pulse');
            }
        });
    });

$(window).load(function() {
        $(".dial").knob({
          readOnly: true,
          'draw' : function () { 
            $(this.i).val(this.cv + '%')
          }
        });
    });

$(window).load(function() {
      $.vegas('slideshow', {
          backgrounds:[
            { src:'/img/slide1.jpg', fade:1000 },
            { src:'/img/slide2.jpg', fade:1000 }
          ]
        })('overlay', {
          src:'vegas/overlays/13.png'
        });
    });

