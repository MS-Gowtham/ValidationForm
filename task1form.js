window.addEventListener("DOMContentLoaded", function() {   
var userField = false;
var emailField = false;
var mobileField = false;
var courseField = false;
var degreeField = false;
var yearField = false;
var passwordField = false;


const username = document.getElementById("Username");
username.addEventListener("click",function(){
    setInterval(usernameValidate,500);
});
function usernameValidate(){
    let ele = document.getElementById("Username").value;
    if(ele == "")
    {
        document.getElementById("mouseenteruser").style.color = "red";
        userField = false;
    }
    else{
        document.getElementById("mouseenteruser").style.color = "white";
        userField = true;
    }
}


const email = document.getElementById("Email");
email.addEventListener("click",function(){
    setInterval(emailValidate,500);
})
function emailValidate(){
    let ele = document.getElementById("Email").value;
    if(ele == "")
    {
        document.getElementById("mouseenteremail").innerHTML = "Please Provide Email Id ";
        document.getElementById("mouseenteremail").style.color = "red";
        emailField = false;
    }
    else if(!ele.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z\.]*[\.][a-z]{2,4}$/)){
        document.getElementById("mouseenteremail").innerHTML = "Provide valid email Id";
        document.getElementById("mouseenteremail").style.color = "red";
        emailField = false;
    }
    else{
        document.getElementById("mouseenteremail").innerHTML = "Please Provide Email Id ";
        document.getElementById("mouseenteremail").style.color = "white";
        emailField = true;
    }
}


const mobile = document.getElementById("Mobile");
mobile.addEventListener("click",function(){
    setInterval(mobileValidate,500);
})

function mobileValidate(){
    let ele = document.getElementById("Mobile").value;
 
    if(ele=="")
    {
        document.getElementById("mouseentermobile").innerHTML = "Please Provide MobileNumber";
        document.getElementById("mouseentermobile").style.color = "red";
        mobileField = false;
    }
    else if(ele.length < 10  || ele.length >10)
    {
        document.getElementById("mouseentermobile").innerHTML = "Invalid MobileNumber";
        document.getElementById("mouseentermobile").style.color = "red";
        mobileField = false;
    }
    else if(ele[0]!="6" && ele[0]!="7" && ele[0]!="8" && ele[0]!="9")
    {
        document.getElementById("mouseentermobile").innerHTML = "Invalid MobileNumber";
        document.getElementById("mouseentermobile").style.color = "red";
        mobileField = false;
    }
    else{
        document.getElementById("mouseentermobile").style.color = "white";
        mobileField = true;
    }
   

}






var radioButtons = document.getElementsByName("Year");
for (var i = 0; i < 4; i++) {
    radioButtons[i].addEventListener("click", function () {

        document.getElementById("mouseenteryear").style.color = "white";
        yearField = true;
    })
}











const password = document.getElementById("Password");
password.addEventListener("click", function() {
    setInterval(validatePassword,500);
})

function validatePassword(){

var ele = document.getElementById("Password").value;

if (ele == "") {
    document.getElementById("mouseenterpassword").innerHTML = "Please Provide Password";
    document.getElementById("mouseenterpassword").style.color = "red";
    passwordField = false;
}
else if (ele.length < 8 || ele.search(/\d/) == -1 || ele.search(/[a-zA-Z]/) == -1) {
    document.getElementById("mouseenterpassword").innerHTML = "Password should contain 8 characters,atleast one numeric digit and a letter";
    document.getElementById("mouseenterpassword").style.color = "red";
    passwordField = false;
}
else{
    document.getElementById("mouseenterpassword").style.color = "white";
    passwordField = true;
}

}
  

var degreeValue = document.getElementById("Degree").value;
var degreeButton = document.getElementById("Degree");
degreeButton.addEventListener("click",function(){
     setInterval(degreeValidate,500);
})

function degreeValidate(){
    degreeValue = document.getElementById("Degree").value;
    if(degreeValue=="none")
    {
        document.getElementById("mouseenterdegree").style.color = "red";
        degreeField = false;
    }
    else{
        document.getElementById("mouseenterdegree").style.color = "white";
        degreeField = true;
    }
}







var courseValue = document.getElementById("Course").value;
var courseButton = document.getElementById("Course");
courseButton.addEventListener("click",function(){
     setInterval(courseValidate,500);
})

function courseValidate(){
    courseValue = document.getElementById("Course").value;
    if(courseValue=="none")
    {
        document.getElementById("mouseentercourse").style.color = "red";
        courseField = false;
    }
    else{
        document.getElementById("mouseentercourse").style.color = "white";
        courseField = true;
    }
}


function validate(){

    if(userField!=true )
    {
        usernameValidate();
    }
    if(emailField!=true)
    {
        emailValidate();
    }
    if(degreeField!=true)
    {
        degreeValidate();
    }
    if(courseField!=true)
    {
        courseValidate();
    }
    if(yearField!=true)
    {
        document.getElementById("mouseenteryear").style.color = "red";
    }
    if(passwordField!=true)
    {
        validatePassword();
    }
    if(mobileField!=true)
    {
        mobileValidate();
    }
    if(userField==true && emailField==true && degreeField==true && courseField==true && yearField==true && passwordField==true && mobileField==true)
    {
        return true;
    }
    else{
        return false;
    }
}

})




