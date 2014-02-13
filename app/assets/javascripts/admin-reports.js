//= require Candidates
//= require pieChart

var reports = (function () {
    var candidates;
    var selectedOption;

    var el = {
        "options": $("input[name='option']")
    };


    var coursePieChart = function () {
        var courseWiseStudentCount = Candidates.getCourseWiseStudentCountFrom(candidates);
        var width = 180;
        var height = 180;
        pieChart.plot("#course-chart", courseWiseStudentCount, width, height);
    };

    var candidatesPassingYearPieChart = function () {
        alert("Work In Progress")
    }

    var preferredAptitudeCenterChart = function () {
        alert("Work In Progress")
    }

    var preferredGDCenterChart = function () {
        alert("Work In Progress")
    }


    var stateWiseChart = function () {
        alert("Work In Progress")
    }


    var optionToChartMapping = {
        "course": coursePieChart,
        "year-of-pass": candidatesPassingYearPieChart,
        "prefered-apptitude-center": preferredAptitudeCenterChart,
        "prefered-gd-center": preferredGDCenterChart,
        "state": stateWiseChart
    }


    var optionSelectorListener = function () {
        el.options.click(function () {
            selectedOption = el.options.filter(":checked").val();
            optionToChartMapping[selectedOption]();
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
