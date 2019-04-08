window.app = {
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
    if (window.location.hash === "#") {
      return;
    }

    var routes = {
      '': "landing.html",
      '#login': "login.html",
      '#createaccount': "createaccount.html",
      '#wall': "landing.html"
    };

    if (user === null) {
      // User is logged out
      fetch(routes[window.location.hash])
        .then((response) => response.text())
        .then((html) => {
          // Cargar el contenido del archivo HTML en section de main, de index.html
          document.querySelector("#main").innerHTML = html;
          app.loadEvents();
          return;
        })
        .catch((error) => {
          console.warn(error);
        });
    } else {
      fetch("wall.html")
        .then((response) => response.text())
        .then((html) => {
          document.querySelector("#main").innerHTML = html;
          app.loadEvents();
          return;
        })
        .catch((error) => {
          console.warn(error);
        });
    }

  },



  //******Agrega los eventos a los controles existentes********//
  loadEvents: () => {

    // *************** Evento para hacer login ******************//
    if (document.querySelector("#login") !== null) {
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
    if (document.querySelector("#registered") !== null) {
      document.querySelector("#registered").addEventListener('click', () => {

        const email = document.querySelector("#email").value;
        const pass = document.querySelector('#pass').value;

        firebase.auth()
          .createUserWithEmailAndPassword(email, pass)
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //alert(errorMessage);
            console.log(errorCode);
            console.log(errorMessage);

          });

      });
    }

    //   ***************Iniciar sesión con Google******************//
    if (document.querySelector("#loginGoogle") !== null) {
      document.querySelector("#loginGoogle").addEventListener('click', () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          let token = result.credential.accessToken;
          // The signed-in user info.
          let user = result.user;
          //alert("Exito");
          // ...
          return;
        }).catch((error) => {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // The email of the user's account used.
          let email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          let credential = error.credential;
          // alert("Falla");
          // ...
        });
      });
    }

    // ***************Iniciar sesión con Facebook******************//
    if (document.querySelector("#loginFb") !== null) {
      document.querySelector("#loginFb").addEventListener('click', () => {

        let provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          let token = result.credential.accessToken;
          // The signed-in user info.
          let user = result.user;
          // ...
          return;
        }).catch((error) => {
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
    if (document.querySelector("#logOut") !== null) {
      document.querySelector("#logOut").addEventListener('click', () => {
        console.log("logOut");
        firebase.auth().signOut()
          .catch((error) => {
            // An error happened
          });
      });
    }

    // *************** Wall Test ******************//
    // Funcion para menú de navegación
    if (document.querySelector(".nav-trigger") !== null) {
      document.querySelector(".nav-trigger").addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector("body").classList.toggle('nav-open');
      });
    }

    // Funcion para agregar post

    if (document.querySelector("#btnPost") !== null) {
      // window.location.hash = "#wall";
      document.querySelector("#btnPost").addEventListener("click", () => {

        let db = firebase.firestore();
        let like = 0;
        const posteo = document.querySelector("#post");
        if (app.washingtonRef === null) {
          db.collection("posts").add({
            user: firebase.auth().currentUser.email,
            timestamp: Date.now(),
            publicacion: posteo.value,
            like: like,
            isPrivate: document.querySelector("#Filter").selectedOptions[0].value
          })

            .then((docRef) => {
              console.log("Document written with ID: ", docRef.id);
              document.getElementById("post").value = "";
              washingtonRef = null;
              return;
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });

        } else {
          app.washingtonRef.update({
            publicacion: posteo.value,


          })

            .then(() => {
              console.log("Document successfully updated!");
              document.getElementById("post").value = "";
              washingtonRef = null;
              return;
            })
            .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            });
        }


        // Función para mostrar en pantalla todas publicaciones de usuarios despúes de insertar un valor nuevo

        let wallPost = document.querySelector("#wallContainer");

        db.collection("posts").onSnapshot((querySnapshot) => {

          wallPost.innerHTML = "";
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().publicacion}`);
            wallPost.innerHTML += app.crearKardexItem(doc);
          });
        });
      });

      // Función para mostrar en pantalla las publicaciones de usuarios cuando carga la página
      let db = firebase.firestore();

      let wallPost = document.querySelector("#wallContainer");

      db.collection("posts").onSnapshot((querySnapshot) => {
        wallPost.innerHTML = "";
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().publicacion}`);
          wallPost.innerHTML += app.crearKardexItem(doc);
        });
      });
    }

    // *************** Filtrar elementos publicos******************//

    if (document.querySelector("#btnShowPublic") !== null) {
      // window.location.hash = "#wall";
      document.querySelector("#btnShowPublic").addEventListener("click", () => {

        let db = firebase.firestore();

        // Función para mostrar en pantalla las publicaciones de usuarios
        let wallPost = document.querySelector("#wallContainer");

        db.collection("posts").onSnapshot((querySnapshot) => {
          wallPost.innerHTML = "";
          querySnapshot.forEach((doc) => {
            if (doc.data().isPrivate === "publico") {
              console.log(`${doc.id} => ${doc.data().publicacion}`);
              wallPost.innerHTML += app.crearKardexItem(doc);
            }
          });
        });
      });
    }

    // *************** Filtrar elementos privados ******************//

    if (document.querySelector("#btnShowPrivate") !== null) {
      // window.location.hash = "#wall";
      document.querySelector("#btnShowPrivate").addEventListener("click", () => {

        let db = firebase.firestore();


        // Función para mostrar en pantalla las publicaciones de usuarios
        let wallPost = document.querySelector("#wallContainer");

        db.collection("posts").onSnapshot((querySnapshot) => {
          wallPost.innerHTML = "";
          querySnapshot.forEach((doc) => {
            if (doc.data().isPrivate === "privado") {
              console.log(`${doc.id} => ${doc.data().publicacion}`);
              wallPost.innerHTML += app.crearKardexItem(doc);
            }
          });
        });
      });
    }
  },

  // Función para crear los espacios de los posts dinamicamente

  crearKardexItem: (item) => {
    return ` <div class="card text-center widget2">
    <div class="card-header widget2">
      <i class="large material-icons">person</i>
      ${ item.data().user}  ${item.data().isPrivate}
    </div>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">${ item.data().publicacion} </p>
    </div>
    <div class="card-footer text-muted widget2 mb-3">
    <button class="likeCount"><button class="btn btn-info" id='${item.id}' onclick="app.addLikes('${item.id}' , '${item.data().like}')"><i class="large material-icons" >thumb_up</i></button>
    <button class="btn btn-info" onclick="app.editPost('${item.id}','${item.data().publicacion}')"><i class="large material-icons">mode_edit</i></button>
    <button class="btn btn-info" id="eliminar" onclick="app.eliminar('${item.id}')"><i class="large material-icons">delete</i></button><br>
    </div>
    <div>
    ${app.dateFormat(item.data().timestamp)}
      </div>
    </div>`
  },

  // Funcion para dar formato a la fecha ()
  dateFormat: (timestamp) => {
    let date = new Date(timestamp);
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " "
      + date.getHours() + ":" + date.getMinutes();
  },

  // Función para borrar post



  // eliminar: (id) => {
  //   washingtonRef = null;
  //   let db = firebase.firestore();
  //   db.collection("posts").doc(id).delete().then(function () {

  //     console.log("Document successfully deleted!");

  //   }).catch(function (error) {

  //     console.error("Error removing document: ", error);

  //   });

  // },

  eliminar: (id) => {
    washingtonRef = null;
    let db = firebase.firestore();
    let returnMessage = true;

    let message = confirm("¿Estás seguro de eliminarlo?");

    if (message) {

      db.collection("posts").doc(id).delete().then(() => {

        console.log("Document successfully deleted!");
        return;

      }).catch((error) => {

        console.error("Error removing document: ", error);
      });
    }
    else {
      returnMessage = false;
    }
    return returnMessage;
  },


  // Función para modificar posts
  washingtonRef: null,
  editPost: (id, posteo) => {
    let db = firebase.firestore();
    document.getElementById("post").value = posteo;
    var boton = document.getElementById("btnPost");
    //boton.innerHTML = "Editar";
    app.washingtonRef = db.collection("posts").doc(id);
  },

  addLikes: (id, likes) => {
    let db = firebase.firestore();
    likes++;
    likes = parseInt(likes);
    let washingtonRef = db.collection("posts").doc(id);

    return washingtonRef
      .update({
        like: likes,

      }).then(() => {
        let washingtonRef = (db.collection("posts").doc(id)).id;

        let buttonLike = document.getElementById(washingtonRef);
        buttonLike.innerHTML += " " + likes;
        console.log(likes);
        return;
      })
      .then(() => {
        console.log('Document successfully updated!');
        return;
      })

      .catch((error) => {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  },

}


// function addLikes(id, likes) {
//   likes++;

//   likes = parseInt(likes);
//   let washingtonRef = db.collection("posts").doc(id);

//   return washingtonRef
//     .update({
//       like: likes,

//     }).then(function(){
//       let washingtonRef = (db.collection("posts").doc(id)).id;

//        let buttonLike= document.getElementById(washingtonRef);
//         buttonLike.innerHTML+= " " + likes;
//       })
//     .then(function() {
//       console.log('Document successfully updated!');
//     })

//     .catch(function(error) {
//       // The document probably doesn't exist.
//       console.error('Error updating document: ', error);
//     });
// }








/***************Inicializa la aplicación**********************/
app.startup();
