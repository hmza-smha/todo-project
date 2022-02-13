var userName = prompt("Inter your name");
var userGender = prompt("Inter your Gender (Male/Female)").toLocaleLowerCase();

while(userGender != "male" && userGender != "female"){
    userGender = prompt("Inter your Gender (Male/Female)").toLocaleLowerCase();
}

var userAge = prompt("Inter your Age");
while(userAge <= 0){
    alert("Your age can not be less than or equal to zero.");
    userAge = prompt("Inter your Age");
}

var welcomeMsg = confirm("Do you want to see welcome message?");
if(welcomeMsg){

    if(userGender == "male"){
        alert("Hello Mr. " + userName)
    }
    else{
        alert("Hello Ms. " + userName)
    }
    
}
