 /* MODAL */
 $('[data-modal=cnsl]').on('click', function(){
    $('.overlay, #cnsl').fadeIn('slow');
});
$('.mdl__close').on('click', function(){
    $('.overlay, .mdl_mini, .mdl').fadeOut('slow');
});

$(document).ready(function(){

/* ВАЛИДАЦИЯ ФОРМЫ */
function validateForms(form){
    $(form).validate({
        rules:{
            name: {
                required: true,
                minlength: 2,
                maxlength: 15,
            },
            phone: {
                required: true,
                minlength: 13,
                maxlength: 20,
            },
            email: {
                required: true,
                email: true,
                maxlength: 30,
                },
            textmessage: {
                required: true,
                minlength: 20,
                maxlength: 300,
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: jQuery.validator.format("Minimum 2 characters!"),
                    maxlength: jQuery.validator.format("Maximum 15 characters!"),
                  },
                phone: {
                        required: "Please enter a phone number",
                        minlength: jQuery.validator.format("Number format: +1 (XXX) XXXXXXX"),
                        maxlength: jQuery.validator.format("Maximum 15 characters!"),
                    },
                email: {
                  required: "We need your email to contact",
                  email: "Email must be in the format name@domain.com",
                  maxlength: jQuery.validator.format("Maximum 30 characters!"),
                },
                textmessage: {
                    required: "Please enter your message",
                    minlength: jQuery.validator.format("Minimum 20 characters!"),
                    maxlength: jQuery.validator.format("Maximum 300 characters!"),
                  },
        },
    });
}

validateForms('#cnsl-form');
validateForms('#footer-form');
validateForms('#popup-form');
/* $('input[name=phone]').mask("+375 (99) 999 99 99"); */

/* ЗАКРЫТИЕ ФОРМЫ И СПС */
function clearForms(){
    $("#popup-form")[0].reset();
    $("#footer-form")[0].reset();
    $("#cnsl-form")[0].reset();
}

function popupFinish(){
    if ($("#popup-form").valid()) {
        $('.mdl').fadeOut();
        $('.mdl_mini').fadeIn('slow');
    }
}


function footerFinish(){
    if ($("#footer-form").valid()) {
        $('.overlay, #tnx').fadeIn('slow');
    }
}

function cnslFinish(){
    if ($("#cnsl-form").valid()) {
        $('.overlay, #tnx').fadeIn('slow');
    }
}

$('.button_submit').on('click', popupFinish);
$('.button_submit').on('click', footerFinish);
$('.button_submit').on('click', cnslFinish);


    /* МЯГКИЙ СКРОЛЛ И PGUP */
    $(window).scroll(function(){
        if($(this).scrollTop()>1600){
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        }
      });

      new WOW().init();
});