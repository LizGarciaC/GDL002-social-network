// require('../src/data.js');

// const pokemon = require('../src/data/pokemon/pokemon.json');


// describe("pokemon", ()=>{
//   it("Should by an object", ()=>{
//     expect(typeof pokemon).toBe("object");
//   });
// });

// describe("filterData", ()=>{

//   it("Should by a Function", ()=>{
//     expect(typeof data.filterData).toBe("function");
//   });

//   it("Filter by name", () => {
//   expect(data.filterData(pokemon.pokemon,'Charmander')).toBe(pokemon.pokemon[3]);
//   });




// });

// describe ("sortData", ()=>{

//    it("Shoul by a Function", ()=>{
//     expect(typeof data.sortData).toBe("function");
//   });

//   it("Sort alphabetically by name", ()=>{
//    expect(data.sortData(pokemon.pokemon) instanceof Array).toBe(true);
//  });

// });
// //
// describe("computeData",()=>{

//   it("Shoul by a Function", ()=>{
//    expect(typeof data.computeData).toBe("function");
//  });


//  it("Show a PowerCombat of Charmander ", () => {
//   expect(data.computeData(pokemon.pokemon,'Charmander', 250)).toBe(412.5);
//  });


// });

// // ********************Código para pruebas funcionale en Firebase ********************

// const firebasemock = require('firebase-mock');
// const mockauth = new firebasemock.MockFirebase();
// const mockfirestore = new firebasemock.MockFirestore();
// mockfirestore.autoFlush();
// mockauth.autoFlush();
// global.firebase = firebasemock.MockFirebaseSdk(
//   path => (path ? mockdatabase.child(path) : null),
//   () => mockauth,
//   () => mockfirestore
// );
// import { authenticateGoogleAccount,
//   authenticateFacebookAccount,
//   authenticateEmailAndPassword,
//   createUserWithEmailAndPassword,
//   closeSesion} from '../src/lib/index.js';
// describe('authenticateGoogleAccount', () => {
//   it('debería ser una función', () => {
//     expect(typeof authenticateGoogleAccount).toBe('function');
//   });
// });
// describe('authenticateFacebookAccount', () => {
//   it('debería ser una función', () => {
//     expect(typeof authenticateFacebookAccount).toBe('function');
//   });
// });
// describe('authenticateEmailAndPassword', () => {
//   it('debería ser una función', () => {
//     expect(typeof authenticateEmailAndPassword).toBe('function');
//   });
// });
// describe('createUserWithEmailAndPassword', () => {
//   it('debería ser una función', () => {
//     expect(typeof createUserWithEmailAndPassword).toBe('function');
//   });
// });
// describe('authenticateEmailAndPassword', () => {
//   it('Debería poder iniciar sesion', () => {
//     return authenticateEmailAndPassword('front@end.la', '123456')
//       .then((user) => {
//         expect(user.email).toBe('front@end.la');
//       });
//   });
// });
// describe('createUserWithEmailAndPassword', () => {
//   it('Debería poder crear un usuario', () => {
//     return createUserWithEmailAndPassword('front@end.la', '123456')
//       .then((user) => {
//         expect(user.email).toBe('front@end.la');
//       });
//   });
// });
// describe('authenticateGoogleAccount', () => {
//   it('Debería poder iniciar sesión', () => {
//     return authenticateGoogleAccount()
//       .then(() => {
//         const user = firebase.auth().currentUser;
//         expect(user).not.toBe(null);
//       });
//   });
// });
// describe('authenticateFacebookAccount', () => {
//   it('Debería poder iniciar sesión', () => {
//     return authenticateFacebookAccount()
//       .then(() => {
//         const user = firebase.auth().currentUser;
//         expect(user).not.toBe(null);
//       });
//   });
// });
// describe('closeSesion', () => {
//   it('debería ser una función', () => {
//     expect(typeof closeSesion).toBe('function');
//   });
// });
// describe('closeSesion', () => {
//   it('Debería cerrar sesión', () => {
//     return closeSesion()
//       .then(() => {
//         const user = firebase.auth().currentUser;
//         expect(user).toBe(null);
//       });
//   });
// });