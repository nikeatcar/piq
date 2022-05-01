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
                maxlength: 19,
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
                    required: "გთხოვთ შეიყვანოთ თქვენი სახელი",
                    minlength: jQuery.validator.format("მინიმუმ 2 სიმბოლო!"),
                    maxlength: jQuery.validator.format("მაქსიმუმ 15 სიმბოლო!"),
                  },
                phone: {
                        required: "გთხოვთ შეიყვანოთ ტელეფონის ნომერი",
                        minlength: jQuery.validator.format("ნომრის ფორმატი: +995 (XXX) XX XX XX"),
                        maxlength: jQuery.validator.format("მაქსიმუმ 19 სიმბოლო!"),
                    },
                email: {
                  required: "ჩვენ გვჭირდება თქვენი ელ.წერილი დასაკავშირებლად",
                  email: "ელფოსტა უნდა იყოს ფორმატში name@domain.com",
                  maxlength: jQuery.validator.format("მაქსიმუმ 30 სიმბოლო!"),
                },
                textmessage: {
                    required: "გთხოვთ შეიყვანოთ თქვენი შეტყობინება",
                    minlength: jQuery.validator.format("მინიმუმ 20 სიმბოლო!"),
                    maxlength: jQuery.validator.format("მაქსიმუმ 300 სიმბოლო!"),
                  },
        },
    });
}

validateForms('#cnsl-form');
validateForms('#footer-form');
validateForms('#popup-form');
/* $('input[name=phone]').mask("+995 999 999 999"); */

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