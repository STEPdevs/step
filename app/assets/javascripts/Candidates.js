var Candidates = (function () {

    var genderRatio = {maleCount: 0, femaleCount: 0};
    var courseWiseStudentCount = {};

    var initializeAllCoursesCount=function(candidates){
        _.each(candidates, function (candidate) {
            var courseName = candidate.course;
            courseWiseStudentCount[courseName]=0;
        });
    }


    return{
        getAll: function (callback) {
            $.ajax({
                url: '/candidates_list',
                type: "GET",
                dataType: "json"
            }).success(function (users) {
                    callback(users);
                    return users;
                }).error(function () {
                    return [];
                });
        },

        getGenderCountFrom: function (candidates) {
            _.each(candidates, function (candidate) {
                var gender = candidate.gender;
                if (gender === "Male") genderRatio.maleCount++;
                else genderRatio.femaleCount++
            });
            return genderRatio;
        },
        getCourseWiseStudentCountFrom:function(candidates){
            initializeAllCoursesCount(candidates);
            _.each(candidates, function (candidate) {
                courseWiseStudentCount[candidate.course]++;
            });
            return courseWiseStudentCount;
        }
    };
})();