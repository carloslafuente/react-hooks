const { getUser } = require('../../base/05-funciones');

describe('Pruebas en 05-funciones.js', () => {
	test('Pruebas en el metodo getUser', () => {
		const user = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		};
		const result = getUser();
		console.log(result);
		expect(result).toStrictEqual(user);
	});
});
