$(function() {
    $(window).on("resize", function() {
        if ($(this).width() > 1000) {
            $(".toggle").removeClass("active");
            $(".nav").removeAttr("style");
        }
    });
    $(".toggle").click(toggleSlideMenu);
    $(".nav").on("click", toggleMenu);

    $(".nav1").on("click", function(event) {
        $(this).toggleClass("on");
    });
    
    $(".board").on("click", "div", function(event) {
        var $this = $(event.target);
        if (!$this.hasClass("on")) {
            $(event.delegateTarget).children(".on").add($this).toggleClass("on");
        }
    });

    $(".tab").on("click", "div", function(event) {
        var $this = $(event.target);
        if (!$this.hasClass("on")) {
            $(".board:not(.hide),.board:eq(" + $this.index() + ")").toggleClass("hide");
            $(".tab > .on").add($this).toggleClass("on");
        }
    });
});

function toggleSlideMenu(event) {
    $(".toggle").toggleClass("active");
    $(".nav").slideToggle();
}
function toggleMenu(event) {
    if ($(".toggle:visible").hasClass("active")) {
        toggleSlideMenu(event)
    }
}
function close_popup(v1){
    $(".popup." + v1).fadeOut(300);
}
function open_popup(v1){
    $(".popup." + v1).fadeIn(300);
}