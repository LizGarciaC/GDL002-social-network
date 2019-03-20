
// window.data = {
//   key: 10784520,
//   // El arrow function recibe el texto a buscar
//   searchMovie : (search) => {
//       // Retornamos una promesa, prometiendo que le daremos los datos cuando lleguen del servidor
//       return new Promise((resolve, reject) => {
//           // usamos fetch para pedir los datos al servidor.
//           fetch('http://www.omdbapi.com/?apikey=' + window.data.key + '&t=' + search)
//           // esperamos los datos
//           .then((data)=>{
//               // llegan los datos y los convertimos en json
//               return data.json();
//           // esperamos a que los datos se conviertan en json
//           }).then((dataAsJson) => {
//               // recibimos los datos en json y usamos resolve para cumplir la promesa y enviamos el json
//               resolve (dataAsJson);
//           // en caso de error atrapamos el error
//           }).catch((error) => {
//               // avisamos que la promesa no se cumplio y mandamos el error
//               reject (error);
//           });
//       })
//   }
// };