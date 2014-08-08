var App = {};
(function(App, $, undefined) {
    
    App.Init = function () {
        
        $('[data-svg="false"]').SVG();
        App.Splash.Show(false, 3000);
        
        App.Events();
        
    };
    
    App.Modules = function () {
        $('[data-svg="false"]').SVG();
        if($('.graph-holder').length > 0){
            setTimeout(function(){
                App.Graph.Start(Math.floor(Math.random()*100));
            },300);
        }
        if($('.usage-history').length > 0){
            App.Usage.Init();
        }
        if($('.pledge').length > 0){
            App.Pledge.Init();
        }
        if($('.avatar').length > 0){
            App.Avatar.Init();
        }
        /*if($('.swiper-container').length > 0){
            App.Slider.Init();
        }*/
        if($('.accordion').length > 0){
            App.Accordion.Init();
            App.Accordion.SetContentSize();
        }
        
        if ( $('svg').length > 0 ) {
            App.ResetSVGSize($('svg'));
        }
        
    };
    
    App.Events = function () {
        
        $(document).on('click', '[data-show]', ShowHidden);
        $(window).on('resize', function () {
            if ( $('svg').length > 0 ) {
                App.ResetSVGSize($('svg'));
            }
        });
        
    };
    
    App.GetColor = function (perc) {
        var colors = ['#70D551','#FFF100','#FF931E','#ED1C24'];
        return colors[Math.floor(4*(perc/100))];
    };
    
    App.LoadImage = function () {
        var self = $(this);
        var ratio = self.width() / self.height();
        if(ratio > 1){
            self.addClass('landscape');
        } else {
            self.addClass('portrait');
        }
    };
    
    function ShowHidden (e) {
        e.preventDefault();
        var id = $(this).data('show');
        $('[data-showid="'+id+'"]').fadeIn(300);
        if($(this).data('hideself')){
            $(this).fadeOut(300);
        }
        if ( $('svg').length > 0 ) {
            App.ResetSVGSize($('svg'));
        }
    };
    
    App.ResetSVGSize = function (self) {
        console.log(self);
        self.each(function(i, svg) {
            var viewbox = svg.getAttribute('viewBox').split(/\s+|,/);
            var ratio = parseInt(viewbox[2])/parseInt(viewbox[3]);
            
            $(svg).css({
                'height' : $(svg).width() / ratio
            });
            
        });
        
    };
    
}(App = window.App || {}, jQuery));
$(document).ready(App.Init);