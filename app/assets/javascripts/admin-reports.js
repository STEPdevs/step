//= require candidates
//= require pieChart

var reports=(function(){
    var candidates;

//    var getCourseWiseStudentCount=function(){
//
//    }

    var coursePieChart=function(courseWiseStudentCount){
        pieChart.plot(courseWiseStudentCount);
    };


    return{
        initialize:function(){
            var callbackAfterGettingCandidates=function(data){
                candidates = data;
                coursePieChart(getCourseWiseStudentCount(candidates))
            }

            Candidates.getAll(callbackAfterGettingCandidates)
        }
    }


})().initialize();
