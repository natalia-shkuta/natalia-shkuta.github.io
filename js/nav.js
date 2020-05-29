$(document).ready(function () {
    
    /* Що відбуватиметься після кліку на будь-який елемент '.nav-link' */

    $('.nav-link').click(function () {
        if ($('.navigation .overlay').length > 0)
            $('.navigation .overlay').remove();
        if ($('.navigation').hasClass('open'))
            $('.navigation').removeClass('open');
        if ($('.nav-icon').hasClass('open'))
            $('.nav-icon').removeClass('open');
        return true; /* Виконати перехід по лінку */
    });

    /* END: Що відбуватиметься після кліку на будь-який елемент '.nav-link' */
    
    /* Анімований скролл після кліку на будь-який елемент '.js-scroll' */
    
    $('.js-scroll').click(function () {
        var id = $(this).attr("href");
//        var offset = 80;
        var offset = 0;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 500); /* Час анімованого скролу до секції документу */
        return false;
    });
    
    /* END: Анімований скролл після кліку на будь-який елемент '.js-scroll' */
    
    /* Зміна класу для <nav> по скролу */
    
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top < 100) {
            $('nav').removeClass('topfixed');
        } else {
            $('nav').addClass('topfixed');
        }
    });

    /* END: Зміна класу для <nav> по скролу */
});