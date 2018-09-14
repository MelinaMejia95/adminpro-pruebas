import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MedicosService } from './intermedio/espias/medicos.service';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './avanzado/rutas/app.routes';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { RouterMedicoComponent } from './avanzado/router-medico/router-medico.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    HospitalComponent,
    MedicoComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MedicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
