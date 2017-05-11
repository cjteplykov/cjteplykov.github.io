/**
 * Created by Arsen Bespalov on 15.03.2017.
 */

$(document).ready(function () {
    $(".nav1").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 54}, 200);
    });

    $("#NavigationMobile").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 54}, 200);
        $('.header1-1').hide();
    });

    $('#menu').click(function () {
        if ($('.header1-1').is(':visible'))
            $('.header1-1').fadeOut();
        else
            $('.header1-1').fadeIn();
    });

    $('.button-primary').click(function () {
        // собираем данные с формы
        // отправляем данные
        $.post('/FormaScript.php', $('#contactForm').serialize(), function (data) {
            $('.message').html(data.result); // выводим ответ сервера
        });
    });
});