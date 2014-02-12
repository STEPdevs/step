//= require nvD3common
//= require nvD3/models/axis
//= require nvD3/models/multiBarHorizontal
//= require nvD3/models/multiBarHorizontalChart


var barChart = (function () {
    return{
        getGenderRatioChart: function (genderRatio) {
            var gender = [
                {
                    key: "Gender",
                    values: [
                        {
                            "label": "Female",
                            "value": genderRatio.female
                        },
                        {
                            "label": "Male",
                            "value": genderRatio.male
                        }
                    ]
                }
            ];


            var chart;
            nv.addGraph(function () {
                chart = nv.models.multiBarHorizontalChart()
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

                d3.select('#chart1 svg')
                    .datum(gender)
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