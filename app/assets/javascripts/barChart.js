//= require nvD3common
//= require nvD3/models/axis
//= require nvD3/models/multiBarHorizontal
//= require nvD3/models/multiBarHorizontalChart
//= require ReportDataTemplate


var barChart = (function () {

    return{
        plot: function (_for,element,values) {
            var genderCount = reportDataTemplate.barChart(_for,values);

            nv.addGraph(function () {
                var chart = nv.models.multiBarHorizontalChart()
                    .x(function (d) {
                        return d.label
                    })
                    .y(function (d) {
                        return d.value
                    })
                    .barColor(d3.scale.category20().range())
                    .transitionDuration(250)
                    .stacked(true)
                    .showControls(false);

                chart.yAxis
                    .tickFormat(d3.format(',.0f'));

                d3.select(element)
                    .datum(genderCount)
                    .call(chart);

                nv.tooltip.calcTooltipPosition = function (pos, gravity, dist, container) {
                    container.style.left = '690px';
                    container.style.top = '17px';
                    container.style.opacity = 1;
                    container.style.position = 'absolute';
                    return container;
                };

                return chart;
            });

        }
    }
})();