

let username = document.getElementById("username");
let password = document.getElementById("password");
let pswderror = document.getElementById("pswderror");

let error = document.getElementById("error");


function validate(){
   
    if(username.value=="admin"){
        error.innerHTML=" ";
        return true;
    }else if(username.value==""){
        error.innerHTML="Cannot be empty!!!";
        return false;
    }
    else{
        error.innerHTML="Invalid Username";
        return false;
    }
}
function pswd(){
    if(password.value=="12345"){
        pswderror.innerHTML=" ";
        return true;
    }
    else if(password.value==""){
        pswderror.innerHTML="Cannot be empty!!!";
        return false;
    }
    else{
        pswderror.innerHTML="Password Incorrect";
        return false;
    }
}