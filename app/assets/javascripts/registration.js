$(document).ready(function(){
    $("#user_email").change(function(){
        var email= $(this).val();
        var data= {email: email};
        $.ajax({
            url: '/validate',
            data: data
        })
        .success(function(data){
                emailExist = "<div id=user-validation> This User is already taken </div>";
                emailNotExist = "<div id=user-validation> <img src='yes.jpeg' width='16' height='10' alt='Edit Entry' /></div>" ;
                if(data == "false") {
                    $('#user-validation').html(emailExist).css("color","red");

                }
                else{
                    $('#user-validation').html(emailNotExist)

                }
        })
        .fail(function() {
            alert('Failure');
        })
    });
});