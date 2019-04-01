
  
let txtEmail=document.getElementById("email");
let txtEmailLogin = document.getElementById("email2")
let txtPassword=document.getElementById("pass");
let txtPasswordLogin = document.getElementById("pass2")
let txtUser=document.getElementById("user")
let btnLogin=document.getElementById("login");
let btnSignUp=document.getElementById("registered")
let btnLogout=document.getElementById("logOut")


//Añadir evento Sign Up
function registro(){ 
  const email = txtEmail.value;
  const pass = txtPassword.value;

  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  
}

//Añadir evento Login
function ingreso() { 
  const email2 = txtEmailLogin.value;
  const pass2 = txtPasswordLogin.value;
  firebase.auth().signInWithEmailAndPassword(email2, pass2).catch(function(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
 
}

