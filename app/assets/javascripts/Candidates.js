var Candidates = (function () {

    var genderRatio = {female: 0,male: 0};
    var courseWiseStudentCount = {};
    var yearWiseStudentCount = {};
    var ageWiseStudentCount = {};
    var aptitudeCenterCount = {};
    var stateCount = {};
    var GDPICount = {};


    var calculateAge=function(dateString){
        var today = new Date();
        var birthDate = new Date(dateString);
        var yearDifference = today.getFullYear() - birthDate.getFullYear();
        var monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            yearDifference--;
        }
        return yearDifference;
    }

    var initializeAllCoursesCount=function(candidates){
        _.each(candidates, function (candidate) {
            var courseName = candidate.course;
            courseWiseStudentCount[courseName]=0;
        });
    }
    var initializeAllStateCount=function(candidates){
        _.each(candidates,function(candidate){
           var state=candidate.state
            stateCount[state]=0;
        });
    }
    var initializeYearCount=function(candidates){
            _.each(candidates, function (candidate) {
                var yearOfPassing = candidate.year_of_pass;
                yearWiseStudentCount[yearOfPassing]=0;
            });
        }


    var initializeAgeCount=function(candidates){
        _.each(candidates, function (candidate) {
            var dob = candidate.date_of_birth;
            var age=calculateAge(dob)+" years";
            ageWiseStudentCount[age]=0;
        });
    }

    var initializeGDPICount=function(candidates){
            _.each(candidates, function (candidate) {
                var GDPICenter = candidate.preferred_gd_center;
                GDPICount[GDPICenter]=0;
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
                if (gender === "Male") genderRatio.male++;
                else genderRatio.female++
            });
            return genderRatio;
        },

        getStateCount:function(candidates){
            initializeAllStateCount(candidates);
            _.each(candidates,function(candidate){
                stateCount[candidate.state]++;
            });
            return stateCount;
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

        getAgeWiseStudentCountFrom:function(candidates){
            initializeAgeCount(candidates);
            _.each(candidates, function (candidate) {
                var dob = candidate.date_of_birth;
                var age=calculateAge(dob)+" years"
                ageWiseStudentCount[age]++;
            });
            return ageWiseStudentCount;
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
            });
            return GDPICount;
        }
    };
})();