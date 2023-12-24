"use strict";

$(document).ready( () => {
	$("#email").text(sessionStorage.getItem('email'));
	$("#phone").text(sessionStorage.getItem('phone'));
	$("#postal").text(sessionStorage.getItem('postal'));
	$("#dob").text(sessionStorage.getItem('dob'));
	
	
	// back button
	$("#back").click( () => {
		window.history.back()
	}); // end of click()
	
}); // end of ready()