var registration = (function () {
    var elements = {
        confirm_number: $("#user_phone_number_confirmation"),
        phone_number: $("#user_phone_number"),
        error_phone_number: $(".phonenumber")
    };

    var validatePhoneNumber = function (p1, p2) {
        if ((p1.length, p2.length >= 10 || p1.length, p2.length <= 14) && p1 === p2) {
            return true;
        }
        elements.error_phone_number.text("Not a valid number OR Number Mismatched");
        return false;
    };
    var successCallback = function (data) {
        var error = data["phone_number"] instanceof Array
        if (error) {
            elements.error_phone_number.text(data["phone_number"][0]);
        }
        else {
            elements.confirm_number.css("background-color", "#E5E4E2");
            elements.phone_number.css("background-color", "#E5E4E2");
            $(".done-image").show();
        }
    };
    return {
        forIE: function () {
            if (navigator.userAgent.match(/IE/)) {
                var some = document.getElementById("_header");
                $(some).removeClass("header");
                $(some).addClass("headerForIE");
            }
        },
        savePhoneNumber: function () {
            elements.error_phone_number.text("");
            if (validatePhoneNumber(elements.phone_number.val(), elements.confirm_number.val())) {
                var userData = {
                    "phone_number": elements.phone_number.val(),
                    "phone_number_confirmation": elements.confirm_number.val()
                };
                $.ajax("/user", {
                    method: 'POST',
                    data: { user: userData, authenticity_token: $('meta[name=csrf-token]').attr("content")},
                    success: successCallback
                });
            }
        }
    }
})();

$("#user_phone_number").change(function () {
    if ($("#user_phone_number_confirmation").val() !== "") {
        registration.savePhoneNumber();
    }
});

$("#user_phone_number_confirmation").change(function () {
    registration.savePhoneNumber();
    $("#user_other_user_details_users_phone_number").val($("#user_phone_number").val());
});

$("#user_other_user_details_email").change(function () {
    var email = $(this).val();
    var data = {email: email};
    $.ajax({
        url: '/validate',
        data: data
    })
        .success(function (data) {
            emailExist = "<span class=\"error\">Email already taken</span>";
            if (email != '') {
                if (data == true) {
                    $('#email-error').html(emailExist);
                }
                else {
                    $('#email-error').html('');
                }
            }
        })
});

$(document).ready(function () {
    var saved_phone_number = $("#user_other_user_details_users_phone_number").val();
    $("#user_phone_number").val(saved_phone_number)
    $("#user_phone_number_confirmation").val(saved_phone_number)
})

registration.forIE();