var Accordion = {};
(function(Accordion, $, undefined) {
    
    Accordion.Init = function () {
        Events();
    };
    
    Accordion.Toggle = function (e) {
        e.preventDefault();
        
        $(this).parent().toggleClass('open').siblings().removeClass('open');
        if ($(this).parent().find('.content').is(':visible')) {
            $(this).parent().find('.content').hide();
        } else {
            $(this).parent().find('.content').show();
        }
        $(this).parent().siblings().find('.content').hide();
        
        if ($(this).closest('.swiper-slide').length > 0) {
            
            App.Slider.Swiper.reInit();
        }
        
    };
    
    Accordion.SetContentSize = function () {
        
        var maxHeight = 0;
        
        if ($(window).width() > 960) {
            maxHeight = $(window).height() - (($('.accordion').children('li').length * 44) + (80 + 140));
        } else {
            maxHeight = 'none';
        }
        
        $('.accordion .content').css({
            'max-height' : maxHeight
        });
    };
    
    Accordion.CloseAll = function () {
        $('.accordion').find('li').removeClass('open');
        $('.accordion').find('.content').hide();
        
        if ($('.accordion').closest('.swiper-slide').length > 0) {
            
            App.Slider.Swiper.reInit();
        }
        
    };
    
    function Events () {
        $(document).on('click', '[data-action="accordion"]', Accordion.Toggle);
    };
    
}(App.Accordion = window.Accordion || {}, jQuery));