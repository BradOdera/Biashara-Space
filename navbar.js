var $navbar = $("navbar"),


    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $navbar.addClass('fixed-top');
        } else {
            $navbar.removeClass('fixed-top');
        }

    })