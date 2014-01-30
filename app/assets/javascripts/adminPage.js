var adminPage = (function () {
    var candidatesChanged=[];

    var el={
        "usersList":$('#users-list'),
        "searchBox":$("#search-box")
    }


    var getChangedCandidate= function(changedData){
        var changedRowNumber=changedData[0][0];
        return el.usersList.data('handsontable').getDataAtRow(changedRowNumber);
    }

    var renderHandsOnTable = function (users) {
        var columnsName = ["S.No", "Name", "DOB", "Email", "Address", "City", "Mobile Number", "Created At", "Updated At"]
           el.usersList.handsontable({
            data: users,
            colHeaders: columnsName,
            contextMenu: true,
            afterChange: function(change,source){
                if(!(source==="loadData")){
                     candidatesChanged.push(getChangedCandidate(change));
                    console.log(candidatesChanged);
                }

            }
        });
    };


    var onClickClearTextFromSearchBox = function(){
        el.searchBox.click(function(){
             this.value="";
        })
    }();

    var populateStudentsEmailAddress = function(usersEmailAddress){
        el.searchBox.autocomplete({
            source:usersEmailAddress
        })
    };

    var getStudentsEmailAddress = function(users){
        var studentsEmailAddress=[];
        _.each(users, function (user) {
            studentsEmailAddress.push(user.email);
        });
        return studentsEmailAddress;
    }

    return{
        initialize: function () {
            $.ajax({
                url: '/candidates_list',
                type: "GET",
                dataType: "json"
            }).success(function (users) {
                    renderHandsOnTable(users);
                    populateStudentsEmailAddress(getStudentsEmailAddress(users))
                }).error(function () {
                    return [];
                });
        }
    };
})();

//
//    function bindDumpButton() {
//        $('body').on('click', 'button[name=dump]', function () {
//            var dump = $(this).data('dump');
//            var $container = $(dump);
//            console.log('data of ' + dump, $container.handsontable('getData'));
//        });
//    }
//    bindDumpButton();

//JSON.stringify($('#example').handsontable('getData'))
