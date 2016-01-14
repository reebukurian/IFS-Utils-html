function validateForm() {
          
        }
		
		
        $.validator.setDefaults({
            submitHandler: function() {  
			//do ajax code
		$.ajax( {
			type : "post",
			url : "/puts/addOrUpdateVideoService",
                        data : $('#videoForm').serialize(),
                        dataType : "json",
			success : function(response, textStatus, jqXHR) {
				// successful
			$('#formErrors').hide();
			$('#errorMsg').html(response.errorMsg);
		},
		error : function(response) {
			// timeout/network
			$('#errorMsg').html("Unexpected Error!!");
		}
		});
			
			}
        });
        
        $(document).ready(function() {
	// validate signup form on keyup and submit
            // validate signup form on keyup sand submit
            $("#videoForm").validate({
                    rules: {
			tailNum:{
					required : true,
					minlength : 2,
					maxlength : 20
			},
                        availability:{
					required : true,
					minlength : 1,
					maxlength : 1
			}
		    },
                  
		
		messages: {
			tailNum: "Please enter Tail Number",
                        availability: "Please enter Availability Flag"
		}
	});
	});
