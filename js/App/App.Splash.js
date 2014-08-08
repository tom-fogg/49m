var Splash = {};
(function(Splash, $, undefined) {
    
    Splash.Show = function (show, delay) {
        
        var settings = {
            show : show || false,
            deplay : delay || 3000
        };
        
        if(show){
            $('.splash').fadeIn(300);
        } else {
            setTimeout(function () {
                if ($(window).width() <= 960) {
                    //$('[data-action="toggle-menu"]').trigger('click');
                } else {
                    $('[data-action="load-page"][data-url="KnowYourNumberStart"]').trigger('click');
                }
                setTimeout(function(){
                    $('.splash').addClass('hide');
                    $('.splash').fadeOut(300, function () {
                        App.ResetSVGSize($('svg'));
                    });
                }, 600);
            }, (delay-600));
        }
        
    };
    
}(App.Splash = window.Splash || {}, jQuery));