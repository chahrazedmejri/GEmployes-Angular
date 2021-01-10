import { Component, OnInit } from '@angular/core';
import { employe } from '../model/employe.model';
import{ EmployeService } from '../services/employe.service';
@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html'
})
export class EmployesComponent implements OnInit {

 employes : employe[];//tableau des employes

  constructor(private employeService : EmployeService){
    this.employes=employeService.listeEmployes();
  }

  supprimerEmploye(e: employe)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.employeService.supprimerEmploye(e);
  }
  
  ngOnInit(): void {
  }
  
}
