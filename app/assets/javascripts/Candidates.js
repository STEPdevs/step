var Candidates = (function () {
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
        }
    };
})();