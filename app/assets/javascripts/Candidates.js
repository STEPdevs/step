var Candidates = (function () {

    var genderRatio = {maleCount: 0, femaleCount: 0};
    var courseWiseStudentCount = {computerScience:10,Maths:30,Science:50};

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
        getCourseWiseStudentCount:function(candidates){
            return courseWiseStudentCount;
        }
    };
})();