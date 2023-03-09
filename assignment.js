function VALIDATEFORM() {
	var name =
		document.forms.RegForm.FullName.value;
	var email =
		document.forms.RegForm.EMailid.value;
	
	var query =
		document.forms.RegForm.EnquiryMessage.value;

	var regEmailid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.									 // Javascript reGex for Phone Number validation.
	var regFullName = /\d+$/g;								 // Javascript reGex for Name validation

	if (name == "" || regFullName.test(name)) {
		window.alert("Please enter your name properly.");
		name.focus();
		return false;
	}

	
	if (email == "" || !regEmailid.test(email)) {
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}
	
	
	if (query == ""|| !regEnquiryMessage.test(query)) {
		alert("Please write your query.");
		what.focus();
		return false;
	}

	return true;
} 
