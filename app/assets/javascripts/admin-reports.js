//= require Candidates
//= require pieChart

var reports=(function(){
    var candidates;

//    var getCourseWiseStudentCount=function(){
//
//    }

    var coursePieChart=function(courseWiseStudentCount){
        pieChart.plot("#course-chart",courseWiseStudentCount);
    };


    return{
        initialize:function(){
            var callbackAfterGettingCandidates=function(data){
                candidates = data;
                coursePieChart(Candidates.getCourseWiseStudentCount(candidates));
            }
            Candidates.getAll(callbackAfterGettingCandidates);
        }
    }


})().initialize();
