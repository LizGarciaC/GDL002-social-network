//let txtEmail = document.getElementById("email");
//let txtEmailLogin = document.getElementById("email2")
//let txtPassword = document.getElementById("pass");
//let txtPasswordLogin = document.getElementById("pass2")
//let txtUser = document.getElementById("user")
//let btnLogin = document.getElementById("login");
//let btnSignUp = document.getElementById("registered")
//let btnLogout = document.getElementById("logOut")


// ***************Evento Crear Cuenta ó Registro Usuario Nuevo******************//

if (document.querySelector("#registered") != null) {

  document.querySelector("#registered").addEventListener('click', () => {

    const email = document.querySelector("#email").value;
    const pass = document.querySelector('#pass').value;

    firebase.auth()
      .createUserWithEmailAndPassword(email, pass)
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        //alert(errorMessage);
        console.log(errorCode);
        console.log(errorMessage);

      });

  });
}
// //***************Función Observador******************//

// firebase.auth().onAuthStateChanged((user) => {

//   if (user) {
//     // User is signed in.
//     // console.log("signed in");
//     // debugger;
//     // switch (window.location.hash) {
//     //   case "":
//     //     window.location.replace("wall.html");
//     //     // Load messages
//     //     break;
//     //   case "#messages":
//     //     break;
//     // }
//     // ...
//     if (window.location.href.indexOf("wall.html") == -1) {
//       window.location.replace("wall.html");
//     }
//   } else {
//     // User is signed out.
//     if (window.location.href.indexOf("login.html") == -1) {
//       window.location.replace("login.html");
//     }
//   }
// });

// debugger
// if (document.querySelector("#logOut") != null) {
  
//   document.querySelector("#logOut").addEventListener('click', () => {
//     debugger;
//     console.log("logOut");
//     firebase.auth().signOut()
//       .catch(function (error) {
//         // An error happened
//       });
//   });
// }




// // ***************Iniciar sesión con Google******************//
// if (document.querySelector("#loginGoogle") != null) {
//   document.querySelector("#loginGoogle").addEventListener('click', () => {
//     let provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       let token = result.credential.accessToken;
//       // The signed-in user info.
//       let user = result.user;
//       alert("Exito");
//       // ...
//     }).catch(function (error) {
//       // Handle Errors here.
//       let errorCode = error.code;
//       let errorMessage = error.message;
//       // The email of the user's account used.
//       let email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       let credential = error.credential;
//       alert("Falla");
//       // ...
//     });
//   });
// }

// // ***************Iniciar sesión con Facebook******************//
// if (document.querySelector("#loginFb") != null) {
//   document.querySelector("#loginFb").addEventListener('click', () => {

//     let provider = new firebase.auth.FacebookAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//       let token = result.credential.accessToken;
//       // The signed-in user info.
//       let user = result.user;
//       // ...
//     }).catch(function (error) {
//       // Handle Errors here.
//       let errorCode = error.code;
//       let errorMessage = error.message;
//       // The email of the user's account used.
//       let email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       let credential = error.credential;
//       // ...
//     });
//   });
// }


