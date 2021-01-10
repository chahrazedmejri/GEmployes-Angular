
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { employe } from '../model/employe.model';
import{ EmployeService } from '../services/employe.service';
@Component({
  selector: 'app-modif-employe',
  templateUrl: './modif-employe.component.html',
  styles: []
})
export class ModifEmployeComponent implements OnInit {
  currentEmploye = new employe();
  mesg!:String;
  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,
    private employeService: EmployeService) { }

  ngOnInit()  {

    this.currentEmploye = this.employeService.consulterEmploye(this.activatedRoute.snapshot.params.id);
    console.log(this.currentEmploye);

  }
  modifierEmploye()
  { 
  this.employeService.modifierEmploye(this.currentEmploye);
  this.router.navigate(['employes']);
  this.mesg = " la modification est terminè avec succèe ";
  }
 
}
