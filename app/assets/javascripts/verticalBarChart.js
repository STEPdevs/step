//= require nvD3common
//= require nvD3/tooltip
//= require nvD3/models/legend
//= require nvD3/models/axis
//= require nvD3/models/multiBarChart
//= require ReportDataTemplate


var verticalBarChart=(function(){
    return{
        plot:function(element,values){

            var data = reportDataTemplate.verticalBarChart("Age",values);
            var chart;
            nv.addGraph(function() {
                chart = nv.models.multiBarChart()
                    .barColor(d3.scale.category10().range())
                    .margin({bottom: 100})
                    .transitionDuration(300)
                    .delay(0)
                    .rotateLabels(45)
                    .groupSpacing(0.3)
                    .margin({top:0, right:0, bottom: 50, left: 20})
                    .tooltip(function(key, x, y, e, graph) {
                        return '<h3>' + key + '</h3>' +
                            '<p>' +  y + " students" + ' of ' + x + '</p>'
                    });

                chart.tooltipContent = function(key, x, y, e, graph) {
                    return '<h3>' + key + '</h3>' +
                        '<p>' +  y + ' of ' + x + '</p>'
                }

                chart.reduceXTicks(false).staggerLabels(true);

                chart.xAxis
                    .showMaxMin(true);

                chart.yAxis
                    .tickFormat(d3.format(''));

                chart.tooltipContent = function() {

                };

                d3.select(element)
                    .datum(data)
                    .call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
        });
    }
    }
})();