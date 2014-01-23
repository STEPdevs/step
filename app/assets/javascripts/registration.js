$(document).ready(function(){

    function isAnyFieldEmpty(fields){
        for(i=0;i<fields.length-1;i++){
            if (fields[i]==="") return true;
        }
        return false;
    }

    $('#dob').datepicker({
        minDate: new Date("/11/12/12"), maxDate: new Date("/12/12/12")
    });

    $('#submit').click(function(){
        var allFields=[$('#name').val(),$('#email').val(),$('#dob').val(),$('#address').val(),$('#city').val(),$('#number').val()];

        if(!isAnyFieldEmpty(allFields)) {
            alert("Successfully completed");
        }

    })

    $("#email").change(function(){
        var email= $(this).val();
        var data= {email: email};
        $.ajax({
            url: '/validate',
            data: data
        })
        .success(function(data){
                emailExist = "<div id=user-validation> This User is already taken </div>";
                emailNotExist = "<div id=user-validation> <img src='yes.jpeg' width='16' height='10' alt='Edit Entry' /></div>" ;
                if(email != '')
                {
                    if(data == "false") {
                        $('#user-validation').html(emailExist).css("color","red");
                        $('#email').css('border-color','red');
                        document.getElementById("submit").disabled = true;
                    }
                    else{
                        $('#user-validation').html(emailNotExist)
                        $('#email').css('border-color','grey');
                        document.getElementById("submit").disabled = false;

                    }
                }
        })
        .fail(function() {
            alert('Failure');
        })
    });
});

