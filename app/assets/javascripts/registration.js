var registration = (function(){
	var elements = {
		confirm_number: $("#user_phone_number_confirmation"),
		phone_number: $("#user_phone_number"),
		error_phone_number: $(".phonenumber")
	};

	var validatePhoneNumber= function(p1,p2){
		if(p1.length,p2.length==10 &&  p1===p2){
			return true;
		}
		elements.error_phone_number.text("Not a 10 digit number OR Mismatched");
		return false;
	};
	var successCallback= function (data){
		var error = data["phone_number"] instanceof Array
		if(error){
			elements.error_phone_number.text(data["phone_number"][0]);
		}
		else{
			elements.confirm_number.css("background-color","#E5E4E2");
			elements.phone_number.css("background-color","#E5E4E2");
			elements.phone_number.attr("readOnly", true);
			elements.confirm_number.attr("readOnly", true);
			$(".done-image").show();
		}
	};
	return {
		forIE: function(){
			if(navigator.userAgent.match(/IE/)){
				var some = document.getElementById("_header");
				$(some).removeClass("header");
				$(some).addClass("headerForIE");
			}
		},
		savePhoneNumber: function(){
			elements.confirm_number.change(function(){
			elements.error_phone_number.text("");
				if(validatePhoneNumber(elements.phone_number.val(), elements.confirm_number.val())){
						var userData = {
							"phone_number":elements.phone_number.val(),
							"phone_number_confirmation":elements.confirm_number.val()
						};
						$.ajax("/user",{
							method: 'POST',
							data: { user: userData, authenticity_token: $('meta[name=csrf-token]').attr("content")},
							success: successCallback
						});
				}
			});
		},

        emailValidation: function(){
            $("#other_user_details_email").change(function(){
                var email= $(this).val();
                var data= {email: email};
                $.ajax({
                    url: '/validate',
                    data: data
                })
                    .success(function(data){

                        emailExist = "<span class=\"user_validation\">Email already taken</span>";
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
            }
        }
})();
registration.savePhoneNumber();
registration.forIE();
registration.emailValidation();

$('#submit').click(function(e){
    var fields=[$('#user_phone_number'),$('#user_phone_number_confirmation'),$('#other_user_details_email'),$('#other_user_details_name'),$('#other_user_details_date_of_birth'),$('#other_user_details_state'),$("#other_user_details_course"),$('#other_user_details_year_of_pass'),$('#other_user_details_preferred_aptitude_center'),$('#other_user_details_preferred_gd_center')];
    for(i=0;i<fields.length;i++){
        if (fields[i].val()==="") {
            e.preventDefault();
        }
    }
});