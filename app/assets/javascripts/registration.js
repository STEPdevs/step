$(document).ready(function(){

    $("#user_email").change(function(){
        var email= $(this).val();
        var data= {email: email};
        $.ajax({
            url: '/validate',
            data: data
        })
        .success(function(data){
                emailExist = "<span class=\"user_validation dob_error\">Already taken</span>";
                if(email != '')
                {
                    if(data == "true") {
                        $('#email-error').html(emailExist);
                        $('#user_email');
                    }
                    else{
                        $('#email-error').html('');
                        $('#user_email');
                    }
                }
        })
    });

    $('#number').focusout(function(){

    });
});



