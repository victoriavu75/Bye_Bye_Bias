function checkCredentials() {
	var inputName = document.getElementById("inputName").value;
	var inputPassword = document.getElementById("inputPassword").value;
		
	if(inputName== "AnonymousUser" && inputPassword== "userpass") {
		window.location.href= "profile.html";
	}
}