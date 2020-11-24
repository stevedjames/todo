
function validate(){
    let email=document.getElementById("username");
    let pass = document.getElementById("password");
    let pswderror = document.getElementById("pswderror");
    let error = document.getElementById("error");
    function caller(email,pass,callback){
        err= false;
        if(email.value=="admin"){
            error.innerHTML=" ";
            if(pass.value=="12345"){
                pswderror.innerHTML=" ";
                callback(email,pass,err)
                document.location.href = "main.html";
                return err;
            }else if(pass.value==""){
                pswderror.innerHTML="Cannot be empty!!! ";
                return err;

            }
            else{
                pswderror.innerHTML="Incorrect Password ";
                return err;
            }
    
        }else if(email.value==""){
            error.innerHTML="Cannot be empty!!!"
        }
        else{
            
            error.innerHTML="Incorrect Username";
            return err;
            
        }
        
    }
    caller(email,pass,function(error){
        console.log(error);
    })
}
// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let pswderror = document.getElementById("pswderror");

// let error = document.getElementById("error");


// function validate(){
   
//     if(username.value=="admin"){
//         error.innerHTML=" ";
//         return true;
//     }else if(username.value==""){
//         error.innerHTML="Cannot be empty!!!";
//         return false;
//     }
//     else{
//         error.innerHTML="Invalid Username";
//         return false;
//     }
// }
// function pswd(){
//     if(password.value=="12345"){
//         pswderror.innerHTML=" ";
//         return true;
//     }
//     else if(password.value==""){
//         pswderror.innerHTML="Cannot be empty!!!";
//         return false;
//     }
//     else{
//         pswderror.innerHTML="Password Incorrect";
//         return false;
//     }
// }