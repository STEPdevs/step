function modifyPage(url) {
            $.ajax({
                type: "GET",
                url: url,
                cache: false,
                success: function (html) {
                    $('.content').empty();
                    $('.content').append(html);
                    $( "div#header")[1].remove();
                }
            });
    return true;
}
