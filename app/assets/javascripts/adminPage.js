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
            return candidate2.id - candidate1.id
        })
        var columnsName = ["S.No", "Mobile Number", "Name", "DOB", "Gender", "Email", "State", "Course", "Year of pass", "Preferred Aptitude Test Centre", "Preferred GD/PI Centre", "Alternate Mobile Number"]
        el.usersList.handsontable({
            data: candidates,
            colHeaders: columnsName,
            columns: [
                {data: "id", readOnly: true},
                {data: "users_phone_number", readOnly: true},
                {data: "name"},
                {data: "date_of_birth"},
                {data: "gender"},
                {data: "email"},
                {data: "state"},
                {data: "course"},
                {data: "year_of_pass"},
                {data: "preferred_aptitude_center"},
                {data: "preferred_gd_center"},
                {data: "alt_phone_number"}
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
            if (candidatesChanged.length > 0) {
                $.ajax('/admin/candidates/update', {
                    type: "PUT",
                    dataType: "json",
                    data: { query: candidatesChanged, authenticity_token: $('meta[name=csrf-token]').attr("content")},
                    success: function (updateCount) {
                        candidatesChanged = [];
                        alert("Saved: " + updateCount + " Records");
                    },
                    error: function () {
                        alert("!saved");
                    }
                });
            }
        })
    }();

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
            var callbackAfterGettingCandidates = function (data) {
                candidates = data;
                barChart.plot("Gender",'#chart1 svg',Candidates.getGenderCountFrom(candidates));
                renderHandsOnTable(data);
            }
            Candidates.getAll(callbackAfterGettingCandidates)
        }
    };
})().initialize();
