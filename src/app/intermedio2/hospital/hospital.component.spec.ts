import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;


  //El async ya no es necesario porque el AngularCli trabaja con 
  //webpack, es decir que el HTML y el .ts están en el mismo archivo
  beforeEach(async(() => { //Le dice a la función que espere hasta la resolución del código
    /* TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    })
    .compileComponents(); */
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    })
    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear un HospitalComponent', () => {
    expect(component).toBeTruthy();
  });
});
