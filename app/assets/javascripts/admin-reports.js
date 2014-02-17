//= require Candidates
//= require pieChart
//= require barChart

var reports = (function () {
    var candidates;
    var selectedOption;

    var PIE_CHART_WIDTH=180;
    var PIE_CHART_HEIGHT=180;

    var el = {
        "options": $("input[name='option']")
    };
    
    var optionToCount = {
        "course": Candidates.getCourseWiseStudentCountFrom,
        "year-of-pass": Candidates.getYearWiseStudentCountFrom,
        "prefered-gd-center": Candidates.getGDPICountFrom,
        "state": Candidates.getStateCount,
        "age": Candidates.getAgeWiseStudentCountFrom
    }


    var plotChart = function () {
        el.options.click(function () {
            selectedOption = el.options.filter(":checked").val();
            var count=optionToCount[selectedOption](candidates);
            pieChart.plot("#chart", count, PIE_CHART_WIDTH,PIE_CHART_HEIGHT);
        })
    }();


    return{
        initialize: function () {
            var callbackAfterGettingCandidates = function (data) {
                candidates = data;
            }
            Candidates.getAll(callbackAfterGettingCandidates);
        }
    };
})().initialize();
