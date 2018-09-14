import { mensaje } from './string';
/* describe('Pruebas de Strings'); //Agrupar pruebas
it('Debe regresar un string'); */ //Evaluación específica

describe('Pruebas de strings', () => {
    
    it('Debe regresar un string', () => {
        const resp = mensaje('Melina');
        expect( typeof resp ).toBe('string');
    });

    it('Debe retornar un saludo con el nombre enviado', () => {
        const nombre = 'Andrea'
        const resp = mensaje(nombre);
        expect( resp ).toContain(nombre);
    });

});