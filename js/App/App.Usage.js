var Usage = {};
(function(Usage, $, undefined) {
    
    Usage.Init = function () {
        //check if store is available
        if(!window.UsageStore){
            //create SVGStore
            console.warn('UsageStore not available, creating it now');
            App.Loader.Loading(true, true);
            Usage.CreateStore();
        } else {
            //SVGStore is available and can continue
            App.Loader.Loading(false);
            Usage.Build();
        }
    };
    
    Usage.CreateStore = function () {
        var url = "./js/Store/usage.json";

        $.ajax({
            url: url,
            success:function(data){
                window.UsageStore = data;
            },
            error:function(data){
                console.error("Could not load data.");
            },
            complete: function () {
                //Plugin.Init();
                console.info("Successfully created SVGStore");
            }
        }).done(Usage.Init);
    };
    
    Usage.Build = function () {
        
        var frag = '';
        for (var i = 0; i <= window.UsageStore.history.length-1; i++) {
            /*frag +='<li data-historyitem="'+i+'">\
                        <div class="label">'+window.UsageStore.history[i].month+'</div>\
                        <div class="bar" data-usage="'+window.UsageStore.history[i].usage+'">\
                            <div class="inner"></div>\
                        </div>\
                    </li>';*/
            frag += '<li data-historyitem="'+i+'">\
                        <div class="label">'+window.UsageStore.history[i].month+'</div>\
                        <div class="bar" data-usage="'+window.UsageStore.history[i].usage+'">\
                            <div class="inner">\
                                <div class="mask full">\
                                    <div class="fill"></div>\
                                </div>\
                                <div class="mask half">\
                                    <div class="fill"></div>\
                                    <div class="fill fix"></div>\
                                </div>\
                            </div>\
                            <div class="inset">\
                                <span class="holder"><span class="light">0</span><span class="dark">KWH</span></span>\
                            </div>\
                        </div>\
                    </li>';
        }
        $('.usage-history').html(frag);
        
        Usage.Animate();
        
    };
    
    Usage.Animate = function () {
        for (var i = 0; i <= window.UsageStore.history.length-1; i++) {
            (function(i){
                setTimeout(function(){
                    var value = parseInt($('.usage-history').find("[data-historyitem="+i+"]").find('.bar').data('usage'));
                    $('.usage-history').find("[data-historyitem="+i+"]").find('.inner').animate({
                        'width' : value + "%"
                    }, 300).css({
                        'background' : App.GetColor(value)
                    });
                    $('.usage-history').find("[data-historyitem="+i+"]").find('.fill').css({
                        'background' : App.GetColor(value)
                    });
                    Usage.Radial($('.usage-history').find("[data-historyitem="+i+"]"));
                    $('.usage-history').find("[data-historyitem="+i+"]").find('.inset .light').countTo({
                        from: 0,
                        to: (value/100) * 600000,
                        speed: 300,
                        refreshInterval: 50,
                        decimals: 0
                    });
                }, (300*i)/2);
            })(i);
        }
        
    };
    
    Usage.Radial = function (self) {
        /*var transform_styles = ['-webkit-transform','-moz-transform','-ms-transform','transform'];
        window.randomize = function() {
            var rotation = Math.floor(Math.random() * 180);
            var fill_rotation = rotation;
            var fix_rotation = rotation * 2;
            for(i in transform_styles) {
                $('.usage-history.radial .inner .fill, .usage-history.radial .inner .mask.full').css(transform_styles[i],'rotate(' + fill_rotation + 'deg)');
                $('.usage-history.radial .inner .fill.fix').css(transform_styles[i],'rotate(' + fix_rotation + 'deg)');
            }
        }
        window.randomize();
        $('.usage-history.radial .inner').click(window.randomize);
        */
        var transform_styles = ['-webkit-transform','-moz-transform','-ms-transform','transform'];
        var rotation = (parseInt(self.find('.bar').data('usage'))/100) * 180,
            fill_rotation = rotation,
            fix_rotation = rotation * 2;
        
        for(i in transform_styles) {
            self.find('.fill, .mask.full').css(transform_styles[i],'rotate(' + fill_rotation + 'deg)');
            self.find('.fill.fix').css(transform_styles[i],'rotate(' + fix_rotation + 'deg)');
        }
        
    };
    
    
    
}(App.Usage = window.Usage || {}, jQuery));