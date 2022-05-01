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
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Минимум 2 символа!"),
                    maxlength: jQuery.validator.format("максимум 15 символов!"),
                  },
                phone: {
                        required: "Пожалуйста, введите номер телефона",
                        minlength: jQuery.validator.format("Формат номера: +375 (XX) XXX XX XX"),
                        maxlength: jQuery.validator.format("максимум 15 символов!"),
                    },
                email: {
                  required: "Нам необходим ваш email для связи",
                  email: "Email должен быть в формате name@domain.com",
                  maxlength: jQuery.validator.format("максимум 30 символов!"),
                },
                textmessage: {
                    required: "Пожалуйста, введите ваше сообщение",
                    minlength: jQuery.validator.format("Минимум 20 символов!"),
                    maxlength: jQuery.validator.format("максимум 300 символов!"),
                  },
        },
    });
}

validateForms('#cnsl-form');
validateForms('#footer-form');
validateForms('#popup-form');
/* $('input[name=phone]').mask("+375 (99) 999 99 99"); */

/* ЗАКРЫТИЕ ФОРМЫ И СПС */
$('.button_submit').on('click', function(){
    if ($("#popup-form").valid()) {
        $('.mdl').fadeOut();
        $('.mdl_mini').fadeIn('slow');
    }
});

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