var Pledge = {};
(function(Pledge, $, undefined) {
    
    Pledge.Init = function () {
        
        var bubbles = $('.pledge .bubble').each(function(i, el){
            var value = parseInt($(el).data('value'));
            $(el).animate({
                'bottom' : value + "%"
            },(1200 * (value/100))).find('span').css({
                'background' : App.GetColor(value)
            });
        });
        
    };
    
}(App.Pledge = window.Pledge || {}, jQuery));