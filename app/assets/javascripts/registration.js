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
                        $('#user-validation').html(emailExist).css("color","red");
                        $('#email').css('border-color','red');
                    }
                    else{
                        $('#user-validation').html('');
                        $('#email').css('border-color','green');
                    }
                }
        })
        .fail(function() {
            alert('Failure');
        })
    });
    function fade(){
        setTimeout($('.notice').fadeOut('slow'), 30000);
    }
    $('#submit').click(function(e){
     var fields=[$('#name'),$('#email'),$('#dob'),$('#gender'),$('#city'),$('#number'),$("#user_course"),$('#user_year_of_pass'),$('#user_preferred_aptitude_center'),$('#user_preferred_gd_center')];
        for(i=0;i<fields.length;i++){
            if (fields[i].val()==="") {
                fields[i].css('border-color','red');
                e.preventDefault();
            }
            else {
                fields[i].css('border-color','gray');
            }
        }
        fade();
    });
});

