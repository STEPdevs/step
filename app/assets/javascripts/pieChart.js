//= require nvD3common
//= require nvD3/models/legend
//= require nvD3/models/pie
//= require nvD3/models/pieChart
//= require ReportDataTemplate

var pieChart=(function(){

    return {
        plot:function(element,values,width,height){
              var data = reportDataTemplate.pieChart(values);

            nv.addGraph(function() {
                var width = width,
                    height = height;

                var chart = nv.models.pieChart()
                    .x(function(d) { return d.key })
                    .y(function(d) { return d.y })
                    .margin({top: 0, right: 56, bottom: 0, left: 0})
                    .color(d3.scale.category10().range())
                    .width(width)
                    .height(height);

                d3.select(element)
                    .datum(data)
                    .transition().duration(1200)
                    .attr('width', width)
                    .attr('height', height)
                    .call(chart);


                chart.tempDisabled=true;
                return chart;
            });
        }
    }

})();

