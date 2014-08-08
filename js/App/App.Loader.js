var Loader = {};
(function(Loader, $, undefined) {
    
    Loader.Loading = function (status, overlay) {
        $('.loader').removeClass('overlay');
        
        if (status === "hide" || status == false) {
            $('.loader').fadeOut(300);
        } else if (status === "show" || status == true) {
            if ( overlay == true ) {
                $('.loader').addClass('overlay');
            }
            $('.loader').fadeIn(300);
        }
        
    };
    
}(App.Loader = window.Loader || {}, jQuery));