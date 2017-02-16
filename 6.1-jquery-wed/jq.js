$("form.signup").submit(function(e){
	e.preventDefault();
	$(".header .message").append("Thank you!");
})