//= require nvD3common
//= require nvD3/models/legend
//= require nvD3/models/pie
//= require nvD3/models/pieChart
//= require ReportDataTemplate

var pieChart=(function(){

    return {
        plot:function(element,values){
              var data = reportDataTemplate.pieChart(values);

            nv.addGraph(function() {
                var width = 500,
                    height = 500;

                var chart = nv.models.pieChart()
                    .x(function(d) { return d.key })
                    .y(function(d) { return d.y })
                    .color(d3.scale.category10().range())
                    .width(width)
                    .height(height);

                d3.select(element)
                    .datum(data)
                    .transition().duration(1200)
                    .attr('width', width)
                    .attr('height', height)
                    .call(chart);

                chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

                return chart;
            });
        }
    }

})();

