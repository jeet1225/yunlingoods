$(function() {
    $(window).on("resize", function() {
        if ($(this).width() > 1000) {
            $(".toggle").removeClass("active");
            $(".left").removeAttr("style");
        }
    });
    $(".toggle").click(toggleSlideMenu);
    $(".left").on("click", toggleMenu);

    $(".nav1").on("click", function(event) {
        $(this).toggleClass("on");
    });
    
    $(".board").on("click", "> div", function(event) {
        $(event.currentTarget).toggleClass("on");
    });

    $(".tab").on("click", "div", function(event) {
        var $this = $(event.target);
        if (!$this.hasClass("on")) {
            $(".board:not(.hide),.board:eq(" + $this.index() + ")").toggleClass("hide");
            $(".tab > .on").add($this).toggleClass("on");
        }
    });
    
    var owl = $(".kvpicout.owl-carousel");
    owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false/*,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            1250: {
                items: 3,
                dots: false
            }
        }*/
    });
    // Go to the next item
    $('.kv .arrr').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.kv .arrl').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
});

function toggleSlideMenu(event) {
    $(".toggle").toggleClass("active");
    $(".left").slideToggle();
}
function toggleMenu(event) {
    var $item = $(event.target).closest("li");
    if ($(".toggle:visible").hasClass("active") && !$item.hasClass("nav1")) {
        toggleSlideMenu(event)
    }
}
function close_popup(v1){
    $(".popup." + v1).fadeOut(300);
}
function open_popup(v1){
    $(".popup." + v1).fadeIn(300);
}