allUsersDetails=[];

var renderAdminPage = function () {
    $.ajax({
        url: '/candidates_list',
        type: "GET",
        dataType: "json"
    }).success(function (users) {
            allUsersDetails=users;
            renderHandsOnTable(users);
        }).error(function () {
            return [];
        });
}();

var renderHandsOnTable = function (users) {
    var columnsName = ["S.No", "Name", "DOB", "Email", "Address", "City", "Mobile Number", "Created At", "Updated At"]
    $('#users-list').handsontable({
        data: users,
        colHeaders: columnsName,
        contextMenu: true
    });
};




_.each([1,2,3],function(input){
    console.log(input)
});

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