let attempt = 3; 
 
function resetAll(){
	attempt = 3;
	document.getElementById("username").disabled=false;
	document.getElementById("password").disabled=false;
	document.getElementById("login").disabled=false;
	document.getElementById("msg").innerHTML="";
	document.getElementById("reset").style.display="none";
} 
 
function userLogin(){
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
 
	if(username=="" || password==""){
		alert ("Please complete the required field!");
	}else{
		if (username == "artianz225" && password == "ArtIanz_225"){
			alert ("Login successfully");
		}else{
			attempt--;
			document.getElementById("msg").innerHTML="<center class='text-danger'>Invalid username or password</center>";
			alert("You have "+attempt+" attempt(s) left");
			if(attempt == 0){
				document.getElementById("username").disabled=true;
				document.getElementById("password").disabled=true;
				document.getElementById("login").style.display="none"
				document.getElementById("reset").style.display="none";
        document.getElementById("msg").innerHTML="<center class='text-danger'>you have reach the login limit</center>";
        document.getElementById("msg1").innerHTML="<center class='text-danger'>Go back after 5 mins and refresh the browser</center>";
			}
		}
	}
}