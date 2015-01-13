document.createElement('header');
$(function(){
    function slide() {
        $(".slideshow div:eq(0)").animate({width:"0"}, 600, function() {
            $(this).appendTo($(".slideshow")).css({width:"50%"});
        });
    }

    setInterval(slide, 4000);
})
