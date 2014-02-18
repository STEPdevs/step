//= require Candidates
//= require pieChart
//= require verticalBarChart

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
            if(selectedOption!="age"){
                pieChart.plot("#pieChart", count, PIE_CHART_WIDTH, PIE_CHART_HEIGHT);
                $("#barChart").hide();
                $("#pieChart").css('display','inline');
            }else{
                $("#pieChart").hide();
                verticalBarChart.plot("#barChart svg",count);
                $("#barChart").css('display','inherit');
            }
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
