function modifyPage(url) {
    var loadingIndicator = $('.loading');
    loadingIndicator.show();
    $.ajax({
            type: "GET",
            url: url,
            cache: false,
            error: function (xhr, status, error) {
                var content = $('.content');
                content.empty();
                content.append(loadingIndicator.show());
                setTimeout(function () {
                    var networkDownError = "<pre><b>                                              Network Error !! Please try again later</b></pre>";
                    content.append((xhr.responseText == null || xhr.responseText == "")
                        ? networkDownError
                        : xhr.responseText);
                    loadingIndicator.hide();
                }, 3000);
            },
            success: function (html) {
                var content = $('.content');
                content.hide().empty().append(html).append(loadingIndicator.hide());
                var contentHeader = $('div#header')[1];
                contentHeader.remove();
                content.show();
            }
        }
    );
}
