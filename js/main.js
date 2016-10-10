$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".section-2 svg").addClass("active");
    } else {
        $(".section-2 svg").removeClass("active");
    }
});