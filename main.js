let txtEmail=document.getElementById("email");
let txtEmailLogin = document.getElementById("email2");
let txtPassword=document.getElementById("pass");
let txtPasswordLogin = document.getElementById("pass2");
let btnLogin=document.getElementById("login");
let btnSignUp=document.getElementById("registered");
<<<<<<< HEAD
let btnLogout=document.getElementById("logout");
=======
let btnLogout=document.getElementById("logOut");
>>>>>>> 07ba5f7378f78b9b9de830bd62a0bb84e8dc1f73
let msgError = document.getElementById("mensaje-error");



//Añadir evento Sign Up
function createAccount(){ 
  const email = txtEmail.value;
  const pass = txtPassword.value;

  firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then(function(){
    check()
  })

  .catch(function(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  
}

document.querySelector("#registered").addEventListener("click", createAccount);


//Añadir evento Login
function logIn() { 
  const email2 = txtEmailLogin.value;
  const pass2 = txtPasswordLogin.value;
  firebase.auth().signInWithEmailAndPassword(email2, pass2)
  
  .catch(function(error){  
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);

    msgError.innerHTML="Usuario no registrado o datos incorrectos";
    txtEmailLogin.value=" ";
    txtPasswordLogin.value=" ";
  });
  
}

document.querySelector("#login").addEventListener("click", logIn);


function observer(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("existe usuario activo")
      appear(user);
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;

      console.log("**************************");
      console.log(user.emailVerified);
      console.log("**************************");
      
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("no existe usuario activo");
      // ...
    }
  });
   }

observer ();

function appear(user) {
  user = user;
  const logoutBox=document.getElementById("logout-box");
  if (user.emailVerified){
    logoutBox.innerHTML= `
    <p>Bienvenido!</p>
    <button id="lock">Cerrar Sesión</button>
    `;
  }
  
}

function close(){
  firebase.auth().signOut()
  .then(function(){
    console.log("Saliendo...")
  })

  .catch(function(error){
    console.log(error)
  })
};

document.querySelector("#lock").addEventListener("click", close)


function check(){
  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  console.log("enviando correo..." );
  // Email sent.
}).catch(function(error) {  
  console.log(error);
  // An error happened.
});
}


// Union de pantallas (Generador dinamico de html a js)

// pantalla 2 a 3
