var $dropDiv = $('#name');
$( window ).load( function() {
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
    /*function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},2000);
    }*/

    $('#top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

    $('#link-contact').click(function () {
      $('body,html').animate({
        scrollTop: 1745
      }, 800);
      return false;
    });

    $('#link-skills').click(function () {
      $('body,html').animate({
        scrollTop: 1000
      }, 800);
      return false;
    });

});

jQuery(function($)  
{
    $("#contact_form").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var name = $("#input-name").val(); // get name field value
        var msg = $("#msg").val(); // get message field value
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'T7kt8SBtFLpaOOKZxBSO8A',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Personal Website Message',
                    'html': '<strong>' + name + '<br/><br/>' +email + '</strong><br/><br/>' + msg,
                    'to': [
                    {
                        'email': 'jandres.rodriguezg@gmail.com',
                        'name': 'Juan Andres Rodriguez',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            alert('Your message has been sent. Thank you!'); // show success message
            $("#input-name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
            $("#msg").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            alert('Error sending message.');
        });
        return false; // prevent page refresh
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



