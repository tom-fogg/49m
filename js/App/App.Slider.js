var Slider = {};
(function(Slider, $, undefined) {
    
    Slider.El = 
    
    Slider.Init = function () {
        console.log('Slider.Init');
        var el = $('.swiper-container');
        /*el.find('.swiper-slide').css({
            'width' : $(window).width(),
            'height' : 'auto'
        });*/
        
        Slider.Swiper = $('.swiper-container').swiper({
            mode:'horizontal',
            loop: false,
            calculateHeight: true,
            onSlideChangeStart: App.Accordion.CloseAll//,
            //freeModeFluid: true
        });
        Slider.SetSlideSize();
        Slider.Events();
    };
    
    Slider.GoTo = function (e) {
        e.preventDefault();
        var dir = $(this).data('action').replace('slider-','');
        
        switch (dir) {
            case "next":
                Slider.Swiper.swipeNext();
                break;
            case "prev":
                Slider.Swiper.swipePrev();
                break;
            default:
                break;
        }
        
    };
    
    Slider.SetSlideSize = function () {
        
        if ($(window).width() <= 480) {
            $('.swiper-wrapper').css({
                'max-height' : $(window).height()
            });
            $('.swiper-slide').css({
                'max-height' : $(window).height(),
                'overflow' : 'hidden',
                'overflow-y' : 'auto'
            });
        } else {
            $('.swiper-wrapper').css({
                'max-height' : $(window).height() - (140 + 80)
            });
            $('.swiper-slide').css({
                'max-height' : $(window).height() - (140 + 80),
                'overflow' : 'hidden',
                'overflow-y' : 'auto'
            });
        }
        
    };
    
    Slider.Events = function () {
        $(document).on('click', '[data-action="slider-next"]', Slider.GoTo);
        $(document).on('click', '[data-action="slider-prev"]', Slider.GoTo);
    };
    
    
    
}(App.Slider = window.Slider || {}, jQuery));