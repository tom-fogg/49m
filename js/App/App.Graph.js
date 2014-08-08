var Graph = {};
(function(Graph, $, undefined) {
    
    Graph.Start = function (scr) {
        
        var self = $('.graph-holder');
        var score = self.data('score') || scr;
        var colors = ['#70D551','#FFF100','#FF931E','#ED1C24'];
        var time = 1200;
        var bars = Math.floor(60*(score/100));
        self.find('.graph').children('.label').fadeIn();
        for (var i = 1; i <= bars; i++) {
            (function(index){
                setTimeout(function() {
                    self.find('.graphmark-'+index)[0].style.fill = Graph.GetColor(index, 60, colors);
                    self.find('.graphcenter')[0].style.fill = Graph.GetColor(index, 60, colors);
                }, Graph.Timing(time, bars, index));
            })(i);
        }
        
        self.find('.graph').children('.label').children('.number').countTo({
            from: 0,
            to: score,
            speed: Graph.Timing(time, bars, bars),
            refreshInterval: 50,
            decimals: 0
        });
        setTimeout(function () {
            //self.find('.graph').children('.label').fadeIn();
            console.log(Graph.GetColor(bars, 60, colors));
            self.find('.graphcenter')[0].style.fill = Graph.GetColor(bars, 60, colors);
        }, Graph.Timing(time, bars, bars));
        
    };
    
    Graph.GetColor = function (index, bars, colors) {
        var colorID = Math.ceil((index/bars)*colors.length)-1;
        if (colorID === 4) {
            colorID = Math.ceil((index/bars)*colors.length)-2;
        }
        return colors[colorID];
    };
    
    Graph.Timing = function (time, bars, index) {
        return (time/bars)*(index*(1*(index/7)));
    };
    
}(App.Graph = window.Graph || {}, jQuery));