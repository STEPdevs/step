var adminPage = (function () {
    var candidatesChanged=[];
    var candidates;

    var el={
        "usersList":$('#users-list'),
        "searchBox":$("#search-box"),
        "save":$("#save")
    }

    var getChangedCandidate= function(changedData){
        var changedRowNumber=changedData[0][0];
        return el.usersList.data('handsontable').getDataAtRow(changedRowNumber);
    }

    var renderHandsOnTable = function (users) {
        var columnsName = ["S.No", "Name","DOB","Gender","Email", "Address", "City", "Mobile Number","Course","Year of pass","Preferred Aptitude Test Centre","Preferred GD/PI Centre","Created At", "Updated At"]
           el.usersList.handsontable({
            data: users,
            colHeaders: columnsName,
            contextMenu: true,
            afterChange: function(change,source){
                if(!(source==="loadData")){
                     candidatesChanged.push(getChangedCandidate(change));
                }

            }
        });
    };

    var saveChanges= function(){

        el.save.click(function(){
            console.log(candidatesChanged);
            $.ajax('/admin/candidates/update',{
               type:"PUT",
//               contentType: 'application/json',
               data: { query: candidatesChanged, authenticity_token: $('meta[name=csrf-token]').attr("content")},
               success:function(){
                   candidatesChanged=[];
                   alert("saved");
               },
                error:function(){
                    alert("!saved");
                }
            });
        })
    }();


    var getSearchedStudents= function(){
          el.searchBox.keyup(function(){
              var searchValue = el.searchBox.val();
              var filteredStudents = candidates.filter(function(candidate) {
                    return candidate.email.indexOf(searchValue) == 0
              });
              renderHandsOnTable(filteredStudents);
              el.searchBox.focus();
          });
    }();

    return{
        initialize: function () {
            $.ajax({
                url: '/candidates_list',
                type: "GET",
                dataType: "json"
            }).success(function (users) {
                    candidates = users;
                    renderHandsOnTable(users);
                }).error(function () {
                    return [];
                });
        }
    };
})().initialize();
