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

var answers = [];
var facebook = prompt("Do you have facebook account ?")
var instagram = prompt("Do you have instagram account ?")
var twitter = prompt("Do you have twitter account ?")
alert("Find your answers into the console!");

addToAnswers(facebook, instagram, twitter);
displayAnswers();


function displayAnswers(){

    console.log("Your name is: " + userName)
    console.log("Your age is: " + userAge)
    console.log("Your gender is: " + userGender)

    for(let i = 0; i < answers.length; i++){
        console.log(answers[i]);
    }

}

function addToAnswers(fb, ig, tw){

    if(fb != ""){
        answers.push(fb);
    }else{
        answers.push("invalid answer")
    }

    if(ig != ""){
        answers.push(ig);
    }else{
        answers.push("invalid answer")
    }

    if(tw != ""){
        answers.push(tw);
    }else{
        answers.push("invalid answer")
    }

}