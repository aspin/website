Template.home.rendered = function () {
    $("body").css("display", "none");
    $("body").fadeIn(2000);

    $(window).scroll(function() {
        if ($(".cd-header").offset().top > 50) {
            $(".cd-header").addClass("cd-header-active");
        } else {
            $(".cd-header").removeClass("cd-header-active");
        }
    });
};

Template.home.events({
    'click .page-nav': function (e) {
        e.preventDefault();
        e.stopPropagation();

        $('html, body').stop().animate({
            scrollTop: $($(e.currentTarget).attr("href")).offset().top},
            1500, 'easeInOutExpo');
        $(e.currentTarget).attr("href");
    }
});