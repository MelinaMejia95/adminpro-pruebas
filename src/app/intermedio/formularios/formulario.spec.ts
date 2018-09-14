import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {
    
    let componente: FormularioRegister;

    beforeEach(() => {
        componente = new FormularioRegister( new FormBuilder() );
    });

    it('Debe dcrear un formulario con dos campos, email y password', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });

    it('El email debe ser obligatorio', () => {
        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('El email debe ser un email válido', () => {
        const control = componente.form.get('email');
        control.setValue('melina@gmail.com');
        expect(control.valid).toBeTruthy();
    });

});