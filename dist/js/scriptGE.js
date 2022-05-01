 /* MODAL */
 $('[data-modal=cnsl]').on('click', function(){
    $('.overlay, #cnsl').fadeIn('slow');
});
$('.mdl__close').on('click', function(){
    $('.overlay, #cnsl, #thx, #order').fadeOut('slow');
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

/* ОТПРАВКА ПОЧТЫ */
$('form').submit(function(e){
    e.preventDefault();

    if (!$(this).valid()){
        return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/b0.php",
        data: $(this).serialize()
    }).done(function(){
        $(this).find("input").val("");
        $('#cnsl-form, #footer-form, #popup-form').fadeOut();
        $('.overlay, #tnx').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
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