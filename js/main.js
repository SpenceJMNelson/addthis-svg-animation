$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1000) {
        $(".section-2 svg").addClass("active");
    } else {
        $(".section-2 svg").removeClass("active");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".tool-illustration-wrapper").addClass("active");
    } else {
        $(".tool-illustration-wrapper").removeClass("active");
    }
});