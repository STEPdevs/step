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
        pieChart.plot("#chart", courseWiseStudentCount, width, height);
    };

    var yearOfPassingPieChart = function () {
        var yearWiseStudentCount = Candidates.getYearWiseStudentCountFrom(candidates);
        var width = 180;
        var height = 180;
        pieChart.plot("#chart", yearWiseStudentCount, width, height);
    }

    var preferredAptitudeCenterChart = function () {
        var aptitudeCenterCount = Candidates.getAptitudeCenterCountFrom(candidates);
        var width = 180;
        var height = 180;
        pieChart.plot("#chart",aptitudeCenterCount, width, height);
    }

    var preferredGDCenterChart = function () {
        var GDPICount = Candidates.getGDPICountFrom(candidates);
        var width = 180;
        var height = 180;
        pieChart.plot("#chart", GDPICount, width, height);
    }


    var stateWiseChart = function () {
        alert("Work In Progress")
    }


    var optionToChartMapping = {
        "course": coursePieChart,
        "year-of-pass": yearOfPassingPieChart,
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
