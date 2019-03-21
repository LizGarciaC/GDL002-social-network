
  
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

  firebase.auth().createUserWithEmailAndPassword(email, pass)
  
  .catch(function(error){
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
  firebase.auth().signInWithEmailAndPassword(email2, pass2)
  
  .catch(function(error){  
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  
}

function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("existe usuario activo")
      aparece();
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      console.log(email);
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("no existe usuario activo")
      // ...
    }
  });
   }

observador ();

function aparece () {
  const contenido = document.getElementById("contenido")
}



// function validar (){
//   let usuario = document.getElementById("usuario").value;
//   let constraseña = document.getElementById("pass").value;

//   if ("usuario" == lucero && "contraseña == "12345"){
//       alert("usuario y contraseña validos"){
          
//       }
//       else {
//           alert("Verifique sus datos")
//       }
//   }
// }
//Contraer




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