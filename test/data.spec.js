

// // ********************Código para pruebas funcionale en Firebase ********************

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
    path => (path ? mockdatabase.child(path) : null),
    () => mockauth,
    () => mockfirestore
);

require('../src/main.js');

describe('app', () => {
    it('debería ser un objeto', () => {
        expect(typeof app).toBe('object');
    });
});

describe('startup', () => {
    it('debería ser una función', () => {
        expect(typeof app.startup).toBe('function');
    });
});

describe('loadPage', () => {
    it('debería ser una función', () => {
        expect(typeof app.loadPage).toBe('function');
    });
});

describe('loadEvents', () => {
    it('debería ser una función', () => {
        expect(typeof app.loadEvents).toBe('function');
    });
});

describe('crearKardexItem', () => {
    it('debería ser una función', () => {
        expect(typeof app.crearKardexItem).toBe('function');
    });
});

describe('eliminar', () => {
    it('debería ser una función', () => {
        expect(typeof app.eliminar).toBe('function');
    });
});

describe('editPost', () => {
    it('debería ser una función', () => {
        expect(typeof app.editPost).toBe('function');
    });
});

describe('addLikes', () => {
    it('debería ser una función', () => {
        expect(typeof app.addLikes).toBe('function');
    });
});

describe('washingtonRef', () => {
    it('debería ser una función', () => {
        expect(typeof app.washingtonRef).toBe('object');
    });
});
// describe('authenticateEmailAndPassword', () => {
//     it('Debería poder iniciar sesion', () => {
//         return authenticateEmailAndPassword('front@end.la', '123456')
//             .then((user) => {
//                 expect(user.email).toBe('front@end.la');
//             });
//     });
// });
// describe('createUserWithEmailAndPassword', () => {
//     it('Debería poder crear un usuario', () => {
//         return createUserWithEmailAndPassword('front@end.la', '123456')
//             .then((user) => {
//                 expect(user.email).toBe('front@end.la');
//             });
//     });
// });
// describe('authenticateGoogleAccount', () => {
//     it('Debería poder iniciar sesión', () => {
//         return authenticateGoogleAccount()
//             .then(() => {
//                 const user = firebase.auth().currentUser;
//                 expect(user).not.toBe(null);
//             });
//     });
// });
// describe('authenticateFacebookAccount', () => {
//     it('Debería poder iniciar sesión', () => {
//         return authenticateFacebookAccount()
//             .then(() => {
//                 const user = firebase.auth().currentUser;
//                 expect(user).not.toBe(null);
//             });
//     });
// });
// describe('closeSesion', () => {
//     it('debería ser una función', () => {
//         expect(typeof closeSesion).toBe('function');
//     });
// });
// describe('closeSesion', () => {
//     it('Debería cerrar sesión', () => {
//         return closeSesion()
//             .then(() => {
//                 const user = firebase.auth().currentUser;
//                 expect(user).toBe(null);
//             });
//     });
// });