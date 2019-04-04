const app = {
//***************Inicializa los observadores******************//
  startup: () => {
    //***************Observador Navegacion********************//
    window.addEventListener("hashchange", () => {
      app.loadPage(firebase.auth().currentUser);
    });

    //***************Observador Autorizacion******************//
    firebase.auth().onAuthStateChanged((user) => {
      app.loadPage(user);
    });
  },

 
  //**********************Carga Páginas************************//
  loadPage: (user) => {
    if (window.location.hash == "#") {
      return;
    }

    var routes = {
      '': "landing.html",
      '#login': "login.html",
      '#createaccount': "createaccount.html",
    };

    if (user == null) {
      // User is logged out
      fetch(routes[window.location.hash])
        .then((response) => response.text())
        .then((html) => {
          document.querySelector("#main").innerHTML = html;  // Cargar el contenido del archivo HTML en section de main, de index.html
          app.loadEvents();
        })
        .catch((error) => {
          console.warn(error);
        });
    } else {
      if (window.location.hash != "") {
        fetch("wall.html")
          .then((response) => response.text())
          .then((html) => {
            document.querySelector("#main").innerHTML = html;
            app.loadEvents();
          })
          .catch((error) => {
            console.warn(error);
          });
      }
    }

  },



  //******Agrega los eventos a los controles existentes********//
  loadEvents: () => {
    // *************** Evento para hacer login ******************//
    if (document.querySelector("#login") != null) {
      document.querySelector("#login").addEventListener("click", () => {
        const email2 = document.querySelector("#email2").value;
        const pass2 = document.querySelector("#pass2").value;
        firebase.auth().signInWithEmailAndPassword(email2, pass2)
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
      });
    }

    // *************** Evento Crear Cuenta ó Registro Usuario Nuevo ******************//
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

    //   ***************Iniciar sesión con Google******************//
    if (document.querySelector("#loginGoogle") != null) {
      document.querySelector("#loginGoogle").addEventListener('click', () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          let token = result.credential.accessToken;
          // The signed-in user info.
          let user = result.user;
          //alert("Exito");
          // ...
        }).catch(function (error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // The email of the user's account used.
          let email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          let credential = error.credential;
          alert("Falla");
          // ...
        });
      });
    }

    // ***************Iniciar sesión con Facebook******************//
    if (document.querySelector("#loginFb") != null) {
      document.querySelector("#loginFb").addEventListener('click', () => {

        let provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          let token = result.credential.accessToken;
          // The signed-in user info.
          let user = result.user;
          // ...
        }).catch(function (error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // The email of the user's account used.
          let email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          let credential = error.credential;
          // ...
        });
      });
    }

    // *************** Logout ******************//
    if (document.querySelector("#logOut") != null) {
      document.querySelector("#logOut").addEventListener('click', () => {
        console.log("logOut");
        firebase.auth().signOut()
          .catch(function (error) {
            // An error happened
          });
      });
    }

    // *************** Wall Test ******************//
    // Funcion para menú de navegación
    if (document.querySelector(".nav-trigger") != null) {
      document.querySelector(".nav-trigger").addEventListener('click', () => {
        event.preventDefault();
        document.querySelector("body").classList.toggle('nav-open');
      });
    }

    // Funcion para agregar post

    if (document.querySelector("#btnPost") != null) {
      window.location.hash = "#wall";
      document.querySelector("#btnPost").addEventListener("click", () => {
        let db = firebase.firestore();
        const posteo = document.querySelector("#post");
        db.collection("posts").add({
          user: firebase.auth().currentUser.email,
          timestamp: Date.now(),
          publicacion: posteo.value,
          isPrivate: document.querySelector("#Filter").selectedOptions[0].value
        })
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById("post").value = "";
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });



        // Función para mostrar en pantalla las publicaciones de usuarios

        let wallPost = document.querySelector("#wallContainer");

        db.collection("posts").onSnapshot((querySnapshot) => {

          wallPost.innerHTML = "";
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().publicacion}`);

            wallPost.innerHTML += ` <div class="card text-center">
      <div class="card-header my-3 mx-6">
        <i class="large material-icons">person</i>
        ${ doc.data().user} 
      </div>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">${ doc.data().publicacion} </p>
      </div>
      <div class="card-footer text-muted">
        <button class="btn btn-primary"><i class="large material-icons">thumb_up</i></button>
        <button class="btn btn-primary"><i class="large material-icons">mode_edit</i></button>
        <button class="btn btn-primary" id="eliminar" onclick="eliminar('${doc.id}')"><i class="large material-icons">delete</i></button>
        
      </div>
      </div>`

          });
        });
      });
    }
  }
}

let db = firebase.firestore();



function eliminar(id){

  db.collection("posts").doc(id).delete().then(function() {

    console.log("Document successfully deleted!");

}).catch(function(error) {

    console.error("Error removing document: ", error);

});



}
