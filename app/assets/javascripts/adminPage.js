//= require jquery.handsontable.full
//= require Candidates
//= require barChart

var adminPage = (function () {
    var candidatesChanged = [];
    var candidates;

    var el = {
        "usersList": $('#users-list'),
        "searchBox": $("#search-box"),
        "save": $("#save")
    }

    var getChangedCandidate = function (changedData) {
        var changedRowNumber = changedData[0][0];
        return el.usersList.data('handsontable').getDataAtRow(changedRowNumber);
    }


    var renderHandsOnTable = function (candidates) {
        candidates.sort(function (candidate1, candidate2) {
            return candidate1.id - candidate2.id
        })
        var columnsName = ["S.No", "Name", "DOB", "Gender", "Email", "City", "Mobile Number", "Course", "Year of pass", "Preferred Aptitude Test Centre", "Preferred GD/PI Centre", "Created At", "Updated At"]
        el.usersList.handsontable({
            data: candidates,
            colHeaders: columnsName,
            columns: [
                {
                    data: "id",
                    readOnly: true
                },
                {data: "name"},
                {data: "date_of_birth"},
                {data: "gender"},
                {data: "email"},
                {data: "city"},
                {data: "users_phone_number"},
                {data: "course"},
                {data: "year_of_pass"},
                {data: "preferred_aptitude_center"},
                {data: "preferred_gd_center"}
            ],
            contextMenu: false,
            afterChange: function (change, source) {
                if (!(source === "loadData")) {
                    candidatesChanged.push(getChangedCandidate(change));
                }

            }
        });
    };

    var saveChanges = function () {

        el.save.click(function () {
            $.ajax('/admin/candidates/update', {
                type: "PUT",
                data: { query: candidatesChanged, authenticity_token: $('meta[name=csrf-token]').attr("content")},
                success: function () {
                    candidatesChanged = [];
                    alert("saved");
                },
                error: function () {
                    alert("!saved");
                }
            });
        })
    }();

    var getGenderCount = function () {
        var genderRatio = {maleCount: 0, femaleCount: 0}
        _.each(candidates, function (candidate) {
            var gender = candidate.gender;
            if (gender === "Male") genderRatio.maleCount++;
            else genderRatio.femaleCount++
        });
        return genderRatio;
    }

    var getSearchedStudents = function () {
        el.searchBox.keyup(function () {
            var searchValue = el.searchBox.val();
            var filteredStudents = candidates.filter(function (candidate) {
                return candidate.email.indexOf(searchValue) == 0
            });
            renderHandsOnTable(filteredStudents);
            el.searchBox.focus();
        });
    }();

    return{
        initialize: function () {
            var callbackAfterGettingCandidates=function(data){
                candidates = data;
                barChart.getGenderRatioChart(getGenderCount());
                renderHandsOnTable(data);
            }
            Candidates.getAll(callbackAfterGettingCandidates)
        }
    };
})().initialize();
