$(document).ready(function(){
	$("#user_confirm_contact_number").change(function(){
		if($("#user_phone_number").val()){
			var userData = {"phone_number":$("#user_phone_number").val(),"confirm_contact_number":$("#user_confirm_contact_number").val()};
				$.ajax("/user",{
					method: 'POST',
					data: { user: userData, authenticity_token: $('meta[name=csrf-token]').attr("content")},
					success: function(data){
						console.log(data);
					}
				});
		}
	});

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