function checkCredentials() {
	var inputName= document.getElementById("Username").value;
	var inputPassword= document.getElementById("Password").value;
if(inputName== "AnonymousUser" && inputPassword== "userpass") {
	window.location.href= "profile.html";
}
}