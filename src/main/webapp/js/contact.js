$(function() {
	
	var validator = $( "#contactForm" ).validate({
		errorClass: 'is-invalid',
		validClass: "is-valid",
		errorElement: "div"
	});
	validator.form();
});
