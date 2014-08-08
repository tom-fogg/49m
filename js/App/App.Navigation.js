var Navigation = {};
(function(Navigation, $, undefined) {
    
    Navigation.Init = function () {
        Events();
    };
    
    Navigation.Toggle = function (e) {
        
        e.preventDefault();
        $('.navigation').fadeToggle(300);
        $('.wrapper').toggleClass('scrolling-disabled');
        
    };
    
    Navigation.LoadPage = function (e) {
        
        e.preventDefault();
        var self = $(this);
        if(!self.data('url')){
            return;
        }
        
        var url = "Views/" + self.data('url') + ".html";
        
        $('.navigation').fadeOut(300);
        $('.wrapper').removeClass('scrolling-disabled');
        
        $('.page').html("");
        App.Loader.Loading(true,false);
        
        if(self.data('url') === "Profile"){
            $('.wrapper').addClass('green');
        } else {
            $('.wrapper').removeClass('green');
        }
        
        if(self.data('url') === "Information"){
            $('.menu').addClass('inverted');
        } else {
            $('.menu').removeClass('inverted');
        }
        
        $.ajax({
            url: url,
            success:function(data){},
            error:function(data){
                console.error("Could not load page.");
            },
            complete: function () {
                //Plugin.Init();
                console.info("Successfully loaded " + url);
            }
        }).done(Navigation.InjectPage);
        
    };
    
    Navigation.InjectPage = function(data) {
        $('.page').html(data);
        App.Loader.Loading(false,false);
        App.Modules();
    };
    
    function Events () {
        
        $(document).on('click', '[data-action="toggle-menu"]', Navigation.Toggle);
        $(document).on('click', '[data-action="load-page"]', Navigation.LoadPage);
        
    };
    
    Navigation.Init();
    
}(App.Navigation = window.Loader || {}, jQuery));