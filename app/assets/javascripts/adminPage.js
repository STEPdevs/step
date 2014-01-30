var adminPage = (function () {

    var renderHandsOnTable = function (users) {
        var columnsName = ["S.No", "Name", "DOB", "Email", "Address", "City", "Mobile Number", "Created At", "Updated At"]
        $('#users-list').handsontable({
            data: users,
            colHeaders: columnsName,
            contextMenu: true
        });
    };


    var onClickClearTextFromSearchBox = function(){
        $("#search-box").click(function(){
             this.value="";
        })
    }();

    var populateStudentsEmailAddress = function(usersEmailAddress){
        $("#search-box").autocomplete({
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