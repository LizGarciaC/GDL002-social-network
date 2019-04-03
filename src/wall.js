// Funcion para menú de navegación
// console.log(document.querySelector(".nav-trigger"));

// document.querySelector(".nav-trigger").addEventListener('click', () => {
//   event.preventDefault();
//   document.querySelector("body").classList.toggle('nav-open');
// });

// const posteo = document.getElementById("post");
// var db = firebase.firestore();
// let btnPost = document.getElementById("btnPost");
// btnPost.addEventListener("click", () => {
//   db.collection("posts").add({
//     publicacion: posteo.value
//   })
//     .then(function (docRef) {
//       console.log("Document written with ID: ", docRef.id);
//       document.getElementById("post").value = "";
//     })
//     .catch(function (error) {
//       console.error("Error adding document: ", error);
//     });

//   });

//   console.log(document.querySelector("#eliminar"));
  
  
  

  // *************** Wall Test ******************//
  // Funcion para menú de navegación
  // if (document.querySelector(".nav-trigger") != null) {
  //   document.querySelector(".nav-trigger").addEventListener('click', () => {
  //     event.preventDefault();
  //     document.querySelector("body").classList.toggle('nav-open');
  //   });
  // }

  // if (document.querySelector("#btnPost") != null) {
  //   window.location.hash = "#wall";
  //   document.querySelector("#btnPost").addEventListener("click", () => {
  //     let db = firebase.firestore();
  //     const posteo = document.querySelector("#post");
  //     db.collection("posts").add({
  //       user: firebase.auth().currentUser.email,
  //       timestamp: Date.now(),
  //       publicacion: posteo.value,
  //       isPrivate : document.querySelector("#Filter").selectedOptions[0].value
  //     })
  //       .then(function (docRef) {
  //         console.log("Document written with ID: ", docRef.id);
  //         document.getElementById("post").value = "";
  //       })
  //       .catch(function (error) {
  //         console.error("Error adding document: ", error);
  //       });



  //     // Función para mostrar en pantalla las publicaciones de usuarios

  //     let wallPost = document.querySelector("#wallContainer");

  //     db.collection("posts").onSnapshot((querySnapshot) => {
        
  //       wallPost.innerHTML = "";
  //       querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${doc.data().publicacion}`);

  //         wallPost.innerHTML += ` <div class="card text-center">
  //     <div class="card-header my-3 mx-6">
  //       <button><i class="large material-icons">face</i></button>
  //       ${ doc.data().user} 
  //     </div>
  //     <div class="card-body">
  //       <h5 class="card-title"></h5>
  //       <p class="card-text">${ doc.data().publicacion} </p>
  //     </div>
  //     <div class="card-footer text-muted">
  //       <button class="btn btn-primary"><i class="large material-icons">thumb_up</i></button>
  //       <button class="btn btn-primary"><i class="large material-icons">mode_edit</i></button>
  //       <button class= "btn btn-primary" id="eliminar" onclick="eliminar()"><i class="large material-icons">delete</i></button>
        
  //     </div>
  //     </div>`

  //       });
  //     });
  //   });
  // }


//  function eliminar(id) {
//     console.log(doc.id);
//     db.collection("posts").doc(id).delete().then(function () {

//       console.log("Document successfully deleted!");

//     }).catch(function (error) {

//       console.error("Error removing document: ", error);

//     });

//   }

// const eliminar= (id) => {
//   db.collection("posts").doc(id).delete().then(function() {
//     console.log("Document successfully deleted!");
// }).catch(function(error) {
//     console.error("Error removing document: ", error);
// });
  

// }

