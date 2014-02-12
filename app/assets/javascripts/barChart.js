//= require nvD3common
//= require nvD3/models/axis
//= require nvD3/models/multiBarHorizontal
//= require nvD3/models/multiBarHorizontalChart


var barChart = (function () {

    var gender = [
        {
            key: "Gender",
            values: [
                {
                    "label": "Male",
                    "value": 0
                },
                {
                    "label": "Female",
                    "value": 0
                }
            ]}
    ];

    return{
        getGenderRatioChart: function (genderRatio) {
            gender[0].values[0].value = genderRatio.femaleCount;
            gender[0].values[1].value = genderRatio.maleCount;

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