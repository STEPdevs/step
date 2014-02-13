//= require Candidates
//= require pieChart

var reports=(function(){
    var candidates;

    var coursePieChart=function(courseWiseStudentCount){
        var width=180;
        var height=180;
        pieChart.plot("#course-chart",courseWiseStudentCount,width,height);
    };


    return{
        initialize:function(){
            var callbackAfterGettingCandidates=function(data){
                candidates = data;
                coursePieChart(Candidates.getCourseWiseStudentCountFrom(candidates));

            }
            Candidates.getAll(callbackAfterGettingCandidates);
        }
    }


})().initialize();
