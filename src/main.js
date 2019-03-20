
function validar (){
  let usuario = document.getElementById("usuario").value;
  let constraseña = document.getElementById("pass").value;

  if ("usuario" == lucero && "contraseña == "12345"){
      alert("usuario y contraseña validos"){
          
      }
      else {
          alert("Verifique sus datos")
      }
  }
}
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