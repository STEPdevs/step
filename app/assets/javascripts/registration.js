//= require json2

var registration = (function () {
    var elements = {
        confirm_number: $("#user_phone_number_confirmation"),
        phone_number: $("#user_phone_number"),
        error_phone_number: $(".phonenumber")
    };

    var validatePhoneNumber = function (p1, p2) {
        if ((p1.length, p2.length >= 10) && (p1.length, p2.length <= 14) && p1 === p2) return true;
        elements.error_phone_number.append("<span class=\"error\">Not a valid number OR Number Mismatched</span>");
        return false;
    };
    var successCallback = function (data) {
        var error = data["phone_number"] instanceof Array
        if (error) {
            elements.error_phone_number.append("<span class=\"error\">" + data["phone_number"][0] + "</span>");
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
                $.ajax("/validate", {
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

function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    return xhr.send();
}

var min_dob, max_dob;

$(document).ready(function () {
    var saved_phone_number = $("#user_other_user_details_users_phone_number").val();
    $("#user_phone_number").val(saved_phone_number)
    $("#user_phone_number_confirmation").val(saved_phone_number)

    loadJSON('/assets/modify.json',
        function (data) {
            var date_field = $('#user_other_user_details_date_of_birth');
            var dob = new Date(data["modify"]["dob"]);
            var dd = dob.getDate();
            var mm = "0" + (dob.getMonth() + 1);
            var YYYY = dob.getFullYear();
            max_dob = dd + '/' + mm + '/' + YYYY;
            min_dob = dd + '/' + mm + '/' + (YYYY - 10);
            date_field.datepicker({
                dateFormat: "dd/mm/yy",
                changeMonth: true,
                changeYear: true,
                minDate: min_dob, maxDate: max_dob
            });
        },
        function (xhr) {
            console.error(xhr);
        }
    );
})

registration.forIE();
