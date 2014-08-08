var Tips = {};
(function(Tips, $, undefined) {
    
    Tips.Init = function (status, overlay) {
        
        Events();
        
    };
    
    Tips.Show = function (e) {
        
        e.preventDefault();
        var self = $(this),
            id = self.data('tipid');
        if ($(window).width() <= 960) {
            $('.tip-holder[data-tipid="'+id+'"]').addClass('show').css({
                'top' : 0,
                'left' : 0
            });;
        } else {
            $('.tip-holder[data-tipid="'+id+'"]').addClass('show').css({
                'top' : self.offset().top + (self.height() / 2),
                'left' : self.offset().left + 80
            });
        }
    };
    
    Tips.Hide = function () {
        $(this).closest('.tip-holder').removeClass('show');
        if ($(window).width() <= 960) {
            $('.tip-holder[data-tipid="'+id+'"]').removeClass('show').css({
                'top' : 0,
                'left' : 0
            });;
        } else {
            $('.tip-holder[data-tipid="'+id+'"]').removeClass('show').css({
                'top' : self.offset().top + (self.height() / 2),
                'left' : '100%'
            });
        }
    };
    
    function Events () {
        $(document).on('click', '[data-action="tooltip"]', Tips.Show);
        $(document).on('click', '[data-action="close-tip"]', Tips.Hide);
    }
    
    Tips.Init();
    
}(App.Tips = window.Tips || {}, jQuery));