import { Component, OnInit } from '@angular/core';
import { employe } from '../model/employe.model';
import{ EmployeService } from '../services/employe.service';


@Component({
  selector: 'app-ajouter-employee',
  templateUrl: './ajouter-employee.component.html'
 
})

export class AjouterEmployeeComponent implements OnInit {
  newemployes = new employe();
  mesg! :String;
  constructor(private employeService: EmployeService) { }

  ngOnInit(): void {
  }
  ajouterEmploye(){
    //console.log(this.newEmp);
    this.employeService.ajouterEmployes(this.newemployes);
    this.mesg = " l'employè "+this.newemployes.nomEmploye+" est ajoutè avec succèe ";

    }

}

