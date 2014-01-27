$(document).ready(function(){

    var users;
    var columnsName=["S.No","Name","DOB","Email","Address","City","Mobile Number","Created At","Updated At"]

    $.ajax({
        url:'/candidates_list',
        type: "GET",
        dataType: "json"
    }).success(function(users){
            $('#users-list').handsontable({
                data: users,
                colHeaders: columnsName,
                contextMenu: true
            });
        });


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