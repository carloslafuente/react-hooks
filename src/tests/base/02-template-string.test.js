const { getSaludo } = require('../../base/02-template-string');

describe('Pruebas en 02-template-string.js', () => {
	test('Prueba en el metodo getSaludo', () => {
		const nombre = 'Carlos';
		const saludo = getSaludo(nombre);
		expect(saludo).toBe(`Hola ${nombre}`);
	});

	test('Prueba en el metodo getSaludo cuando no se envia argumento', () => {
		const saludo = getSaludo();
		expect(saludo).toBe(`Hola Pepe`);
	});
});
