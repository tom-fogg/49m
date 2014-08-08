(function( $ ) {
    jQuery.fn.SVG = function(preview) {
        var self = this;
            var Plugin = {
            //initialize
            Init: function () {
                //check if store is available
                if(!window.SVGStore){
                    //create SVGStore
                    console.warn('SVGStore not available, creating it now');
                    App.Loader.Loading(true, true);
                    Plugin.CreateStore();
                } else {
                    //SVGStore is available and can continue
                    App.Loader.Loading(false);
                    if(preview){
                        Plugin.CreatePreview();
                    } else {
                        $.each(self, function(i, el){
                            Plugin.SetIcon($(el));
                        });
                    }
                }
            },
            CreateStore: function () {
                var url = "./js/Store/icons.json";
                
                $.ajax({
                    url: url,
                    success:function(data){
                        window.SVGStore = data;
                    },
                    error:function(data){
                        console.error("Could not load data.");
                    },
                    complete: function () {
                        //Plugin.Init();
                        console.info("Successfully created SVGStore");
                    }
                }).done(Plugin.Init);
            },
                
                
                
                
                
                
            CreatePreview: function () {
                var frag = '<ul class="icons">';
                for (var icon in window.SVGStore.icon) {
                    frag += '<li class="icon-preview" data-icon="'+icon+'">'+window.SVGStore.icon[icon].src+'</li>';
                }
                frag += '</ul><div class="info"><div class="count"></div><div class="label"></div></div>';
                
                self.append(frag);
                self.find('.icon-preview').css('height', self.find('.icon-preview').width());
                self.find('.info .count').text(self.find('.icon-preview').length + " icons");
                Plugin.PreviewEvents();
                
            },
            PreviewEvents: function () {
                
                $(document).on('click', '.icon-preview', function (e) {
                    //alert($(this).data('icon'));
                    $('.info .label').html("").html('<span>&lt;div data-svg="false" data-icon="</span>' + $(this).data('icon')+ '<span>"&gt;&lt;/div&gt;</span>');
                    $(this).addClass('active').siblings().removeClass('active');
                });
            },
                
                
                
                
                
                
                
                
                
                
                
            SetIcon: function (el) {
                var icon = el.data('icon');
                var svg = window.SVGStore.icon[icon];
                if(svg){
                	el.html(svg.src);
                	el.attr('data-svg', true);
                    //el.find('svg').width(el.width()).height(el.height());
                } else {
                    console.error("SVGStore does not contain icon: " + icon);
                }
            }
        }
        Plugin.Init();
        return this;
        
    };
})(jQuery);