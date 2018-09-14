import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MedicosService } from './intermedio/espias/medicos.service';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    HospitalComponent,
    MedicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MedicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
