var Forms = {};
(function(Forms, $, undefined) {
    
    Forms.Init = function () {
        Events();
    };
    
    Forms.Focus = function (e) {
        
        e.preventDefault();
        var self = $(this);
        
        $('.wrapper').animate({
            scrollTop : self.offset().top
        }, 600);
        
    };
    
    Forms.Checkbox = function (e) {
        
        e.preventDefault();
        
        $(this).toggleClass('on');
        
    };
    
    function Events () {
        
        $(document).on('focus'  , 'input', Forms.Focus);
        $(document).on('click'  , '[data-action="simple-check"]', Forms.Checkbox);
        
    };
    
    Forms.Init();
    
}(App.Forms = window.Forms || {}, jQuery));