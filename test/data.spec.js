
var assert = require('assert');
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

it('deberia crear dos observadores', () => {
    assert.equal(app.startup(), null);
});

it('deberia agregar todos los eventos', () => {
    assert.equal(app.loadEvents(), null);
});

it('deberia crear un nuevo mensaje en pantalla', () => {
    expect(typeof app.crearKardexItem({
        data: () => {
            return {
                user: "user@test.com",
                timestamp: Date.now(),
                publicacion: "Nuevo mensaje",
                like: "1",
                isPrivate: "privado"
            }
        }
    })).toBe('string');
});
