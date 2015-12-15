$(function() {
// Stick the #nav to the top of the window
var nav = $('#cssmenu');
var navHomeY = nav.offset().top;
var isFixed = false; 
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: '30px',  
                width: '250px'
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        } 
    }); 
});