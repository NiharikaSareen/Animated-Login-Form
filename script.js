$(document).ready(function(){
	$("#signup_btn").click(function(){
		$(".main").animate({left:"30%"},600);

		$(".login_form").css("visibility","hidden");
		$(".login_form").animate({left:"25%"},600);

		$(".signup_form").css("visibility","visible");
		$(".signup_form").animate({left:"30%"},600);
	});
	$("#login_btn").click(function(){
		$(".main").animate({left:"70%"},600);
		$(".login_form").animate({left:"70%"},600);
		$(".login_form").css("visibility","visible");

		$(".signup_form").css("visibility","hidden");
		$(".signup_form").animate({left:"75%"},600);
	});
});