$(document).ready(function(){

    $('#dob').datepicker({
        dateFormat: "dd/mm/yy",
        minDate: (new Date("/7/12/1993")), maxDate: (new Date("/7/12/1996"))
    });

    $("#email").change(function(){
        var email= $(this).val();
        var data= {email: email};
        $.ajax({
            url: '/validate',
            data: data
        })
        .success(function(data){
                emailExist = "<div id=user-validation>This User is already taken </div>";
                if(email != '')
                {
                    if(data == "false") {
                        $('#email-error').html(emailExist).css("color","red");
                        $('#email').css('border-color','red');
                    }
                    else{
                        $('#email-error').html('');
                        $('#email').css('border-color','green');
                    }
                }
        })
    });
    $('#name').change(function(){
        $('#name').css('border-color','gray');
    });
    $("#dob").change(function(){
        $('#dob').css('border-color','gray');
    });
    $('#city').change(function(){
        $('#city').css('border-color','gray');
    });
    $('#user_year_of_pass').change(function(){
        $('#user_year_of_pass').css('border-color','gray');
    });
    $('#user_course').change(function(){
        $('#user_course').css('border-color','gray');
    });
    $('#user_preferred_aptitude_center').change(function(){
        $('#user_preferred_aptitude_center').css('border-color','gray');
    });
    $('#user_preferred_gd_center').change(function(){
        $('#user_preferred_gd_center').css('border-color','gray');
    });

    $('#number').focusout(function(){
        var pattern = /[1-9]{1}[0-9]{9}/;
        var mobileNumber = $("#number").val();
        if (!pattern.test(mobileNumber)) {
            $("#number-error").html("Please enter a valid 10 digit mobile number");
            $('#number').css('border-color','red');
            event.preventDefault();
        }
        else {
            $('#number').css('border-color','gray');
            $("#number-error").html("");
        }
    });

    $('#submit').click(function(e){
     var fields=[$('#name'),$('#email'),$('#dob'),$('#gender'),$('#city'),$("#user_course"),$('#user_year_of_pass'),$('#user_preferred_aptitude_center'),$('#user_preferred_gd_center')];
        for(i=0;i<fields.length;i++){
            if (fields[i].val()==="") {

                fields[i].css('border-color','red');
                e.preventDefault();
            }
            else {
                fields[i].css('border-color','gray');
            }
        }
    });
});



