var Candidates = (function () {

    var genderRatio = {maleCount: 0, femaleCount: 0};
    var courseWiseStudentCount = {};
    var yearWiseStudentCount = {};
    var aptitudeCenterCount = {};
    var GDPICount = {};

    var initializeAllCoursesCount=function(candidates){
        _.each(candidates, function (candidate) {
            var courseName = candidate.course;
            courseWiseStudentCount[courseName]=0;
        });
    }

    var initializeYearCount=function(candidates){
            _.each(candidates, function (candidate) {
                var yearOfPassing = candidate.year_of_pass;
                yearWiseStudentCount[yearOfPassing]=0;
            });
        }

    var initializeGDPICount=function(candidates){
            _.each(candidates, function (candidate) {
                var GDPICenter = candidate.preferred_gd_center;
                GDPICount[GDPICenter]=0;
                console.log()
            });
        }

    var initializeAptitudeCenterCountFromCount=function(candidates){
            _.each(candidates, function (candidate) {
                var aptitudeCenter = candidate.preferred_aptitude_center;
                aptitudeCenterCount[aptitudeCenter]=0;
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
        },

        getYearWiseStudentCountFrom:function(candidates){
            initializeYearCount(candidates);
            _.each(candidates, function (candidate) {
                yearWiseStudentCount[candidate.year_of_pass]++;
            });
            return yearWiseStudentCount;
        },

        getAptitudeCenterCountFrom:function(candidates){
            initializeAptitudeCenterCountFromCount(candidates);
            _.each(candidates, function (candidate) {
                aptitudeCenterCount[candidate.preferred_aptitude_center]++;
            });
            return aptitudeCenterCount;
        },

        getGDPICountFrom:function(candidates){
            initializeGDPICount(candidates);
            _.each(candidates, function (candidate) {
                GDPICount[candidate.preferred_gd_center]++;
                console.log(GDPICount)
            });
            return GDPICount;
        }
    };
})();