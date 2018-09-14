import { Jugador } from './clase';

describe('Pruebas de clase', () => {
    
    const jugador = new Jugador();

    
    beforeAll( () => {
        //console.log('beforeAll')
    });
    beforeEach( () => {
        jugador.hp = 100;
        //console.log('beforeEach')
    });
    afterAll( () => {
        //console.log('afterAll')
    });
    afterEach( () => {
        //console.log('afterEach')
    });
    
    it('Debe retornar 80 de hp, si recibe 20 de daño', () => {
        const res = jugador.recibeDanio(20);
        expect(res).toBe(80);
    });

    it('Debe retornar 50 de hp, si recibe 50 de daño', () => {
        const res = jugador.recibeDanio(50);
        expect(res).toBe(50);
    });

    it('Debe retornar 0 de hp, si recibe 100 de daño o más', () => {
        const res = jugador.recibeDanio(100);
        expect(res).toBe(0);
    });

});