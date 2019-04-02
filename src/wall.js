// Funcion para menú de navegación

var navTrigger = document.getElementsByClassName('nav-trigger')[0],
  body = document.getElementsByTagName('body')[0];

navTrigger.addEventListener('click', toggleNavigation);

function toggleNavigation(event) {
  event.preventDefault();
  body.classList.toggle('nav-open');
}

firebase.initializeApp({

  apiKey: "AIzaSyA8shlOmuzRDiVajqFG000KfimiBLJymxs",

  authDomain: "vxm-viaja-por-mexico.firebaseapp.com",

  projectId: "vxm-viaja-por-mexico"

});

const posteo = document.getElementById("post");
var db = firebase.firestore();
let btnPost = document.getElementById("btnPost");
btnPost.addEventListener("click", () => {
  db.collection("posts").add({
    publicacion: posteo.value
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById("post").value = "";
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });



  // Función para mostrar en pantalla las publicaciones de usuarios

  let wallPost = document.getElementById("wallContainer");

  db.collection("posts").onSnapshot((querySnapshot) => {
    //seePublication.innerHTML="";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().publicacion}`);

      wallPost.innerHTML += ` <div class="card text-center">
      <div class="card-header">
        User <span class="fas fa-user"></span>
      </div>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">${ doc.data().publicacion} </p>
      </div>
      <div class="card-footer text-muted">
        <button><span class="fas fa-heart"></span></button>
        <button><span class="fas fa-pencil-alt"></span></button>
        <button><span class="fas fa-trash-alt"></span></button>
      </div>
      </div>`

    });
  });
});
