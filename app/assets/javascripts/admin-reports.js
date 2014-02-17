//= require Candidates
//= require pieChart
//= require barChart

var reports = (function () {
    var candidates;
    var selectedOption;
    var candidatesMetrics;

    var PIE_CHART_WIDTH = 180;
    var PIE_CHART_HEIGHT = 180;

    var el = {
        "options": $("input[name='option']")
    };

    var plotChart = function () {
        el.options.click(function () {
            selectedOption = el.options.filter(":checked").val();
            var count = optionToCountMapping[selectedOption];
            pieChart.plot("#chart", count, PIE_CHART_WIDTH, PIE_CHART_HEIGHT);
        })
    }();


    return{
        initialize: function () {
            var callbackAfterGettingCandidates = function (data) {
                candidates = data;
                candidatesMetrics=Candidates.getStudentMetrics(candidates);

                optionToCountMapping = {
                    "course": candidatesMetrics.courseWiseStudentCount,
                    "year-of-pass": candidatesMetrics.yearWiseStudentCount,
                    "prefered-gd-center": candidatesMetrics.GDPICount,
                    "state": candidatesMetrics.stateCount,
                    "age": candidatesMetrics.ageWiseStudentCount
                }

            }
            Candidates.getAll(callbackAfterGettingCandidates);
        }
    };
})().initialize();
