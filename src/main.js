
  
let txtEmail=document.getElementById("email");
let txtEmailLogin = document.getElementById("email2")
let txtPassword=document.getElementById("pass");
let txtPasswordLogin = document.getElementById("pass2")
let txtUser=document.getElementById("userName")
let btnLogin=document.getElementById("login");
let btnSignUp=document.getElementById("registered")
let btnLogout=document.getElementById("logout")


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






//Entrada de mensaje










// // Poner imagen de loader

// const fromSpace = [
//   'Interstellar',
//   'Gravity',
//   'The Martian',
//   'ALIEN',
//   'Enemy Mine',
//   'Star Trek',
//   'Star Wars',
//   'Gattaca',
//   'Predator',
//   'Guardians of the Galaxy'
// ];






// btnSearch.addEventListener('click', () => {
//   console.log("Si funciono");

//   for (let i = 0; i < fromSpace.length; i++) {

//       window.data.searchMovie(fromSpace[i])

//           .then((movie) => {
//               // recibimos los datos de la pelicula que la promesa nos envio con resolve
//               // alert(movie);
//               let pMovieJs = document.getElementById("pMovie");

//               pMovieJs.innerHTML += `<div class='movieItem'><strong>Título:  </strong><span>${movie.Title}</strong><br/></span>
//                       <strong> Actores y Actrices:  </strong><span>${movie.Actors}</strong><br/></span>
//                       <strong> Género:  </strong><span>${movie.Genre}</strong><br/></span>
//                       <strong> Poster  </strong><span><img src="${movie.Poster}"/></strong><br/></span></div>`;
//           });
//   }
// });