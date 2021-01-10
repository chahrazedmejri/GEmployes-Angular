import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployesComponent } from './employes/employes.component';
import { AjouterEmployeeComponent } from './ajouter-employee/ajouter-employee.component';
import { ModifEmployeComponent} from './modif-employe/modif-employe.component';

const routes: Routes = [
  {path: "employes", component : EmployesComponent},
 { path: "ajouter-employee", component : AjouterEmployeeComponent},
 { path: "", redirectTo: "employes", pathMatch: "full" },
 {path: "modif-employe", component : ModifEmployeComponent },
 {path: "modifierEmploye/:id", component: ModifEmployeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
