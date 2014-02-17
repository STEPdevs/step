var Candidates = (function () {


    var candidatesMetrics = {
        genderRatio: {},
        courseWiseStudentCount: {},
        yearWiseStudentCount: {},
        ageWiseStudentCount: {},
        aptitudeCenterCount: {},
        stateCount: {},
        GDPICount: {}
    };


    var calculateAge = function (dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var yearDifference = today.getFullYear() - birthDate.getFullYear();
        var monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            yearDifference--;
        }
        return yearDifference;
    };

    var initializeCandidateMetrics = function (candidates) {
        _.each(candidates, function (candidate) {
            candidatesMetrics.genderRatio[candidate.gender] = 0;
            candidatesMetrics.courseWiseStudentCount[candidate.course] = 0;
            candidatesMetrics.stateCount[candidate.state] = 0;
            candidatesMetrics.yearWiseStudentCount[candidate.year_of_pass] = 0;
            candidatesMetrics.ageWiseStudentCount[calculateAge(candidate.date_of_birth) + " years"] = 0;
            candidatesMetrics.GDPICount[candidate.preferred_gd_center] = 0;
            candidatesMetrics.aptitudeCenterCount[candidate.preferred_aptitude_center] = 0;
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
        getStudentMetrics: function (candidates) {
            initializeCandidateMetrics(candidates);
            _.each(candidates, function (candidate) {
                candidatesMetrics.stateCount[candidate.state]++;
                candidatesMetrics.genderRatio[candidate.gender]++;
                candidatesMetrics.courseWiseStudentCount[candidate.course]++;
                candidatesMetrics.yearWiseStudentCount[candidate.year_of_pass]++;
                candidatesMetrics.ageWiseStudentCount[calculateAge(candidate.date_of_birth) + " years"]++;
                candidatesMetrics.aptitudeCenterCount[candidate.preferred_aptitude_center]++;
                candidatesMetrics.GDPICount[candidate.preferred_gd_center]++;
            });
            return candidatesMetrics;
        }
    };
})();