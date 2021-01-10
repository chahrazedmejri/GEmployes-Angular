import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployesComponent } from './employes/employes.component';
import { AjouterEmployeeComponent } from './ajouter-employee/ajouter-employee.component';
import { ModifEmployeComponent } from './modif-employe/modif-employe.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    AjouterEmployeeComponent,
    ModifEmployeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
