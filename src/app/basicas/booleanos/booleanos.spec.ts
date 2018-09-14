import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {

    it('Debe retornar true', () => {
        const resp = usuarioIngresado();
        //expect(resp).toBe(true);
        expect(resp).toBeTruthy();
        //expect(resp).not.toBeTruthy();
    });

});