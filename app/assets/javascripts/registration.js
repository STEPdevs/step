$(document).ready(function(){
    $progress = $("#progress"), $amount = $("#amount"), panels = [], panels[0] = "panel1", panels[1] = "panel2", panels[3] = "thanks", i = 0, $formPanel = $(".form-panel");
      //call progress bar constructor
      $progress.progressbar({
          change: function() {
          $amount.text($progress.progressbar("option", "value") + "%");
      }
    });

    function isAnyFieldEmpty(fields){
        for(i=0;i<fields.length-1;i++){
            if (fields[i]==="") return true;
        }
        return false;
    }

//    $('#dob').datepicker();

    $('#submit').click(function(){
        var allFields=[$('#name').val(),$('#email').val(),$('#city').val(),$('#number').val()];
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
                emailExist = "<div id=user-validation>This User is already taken </div>";
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

    $('#next').click(function(e){
        var allFields=[$('#name').val(),$('#email').val(),$('#city').val(),$('#number').val()];
        if(!isAnyFieldEmpty(allFields)) {
            progressBar()
            e.preventDefault()
        }
    })

    function progressBar(){
            //next or back?
            var n = ($(this).attr("id") != "back") ? 1 : -1;
        changepanel(n);
    }

    function changepanel(n) {
        //hide current item
        $($formPanel[0]).fadeOut(500);
        //selects next item
        i = 1
        //hide next item
        $($formPanel[i]).delay(505).fadeIn();

        (i != 0) ? $("#back").attr("disabled", null) : $("#back").attr("disabled", "disabled");
        (i != 2) ? $("#next").attr("disabled", null) : $("#next").attr("disabled", "disabled");
        $progress.progressbar("option", "value", (i * 50) );
    }
});

