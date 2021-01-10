import { Injectable } from '@angular/core';
import { employe } from '../model/employe.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  employes : employe[];//tableau des employes
  employee= new employe();
  constructor() {
    this.employes = [
      {idEmploye:1 , nomEmploye:"amara",  prenomEmploye:"manel", cinEmploye:11335260,emailEmploye:"manel02@gmail.com",adressEmploye:"manouba", posteEmploye:"Secretaire",
      datedebcontrat : new Date("01/14/2011") } ,
      {idEmploye:2 , nomEmploye:"hamdi",  prenomEmploye:"souha", cinEmploye:11385760,emailEmploye:"souha@gmail.com",adressEmploye:"marsa", posteEmploye:"Assistante",
      datedebcontrat : new Date("03/16/2011") } ,
      {idEmploye:3 , nomEmploye:"mejri",  prenomEmploye:"ala", cinEmploye:13385360, emailEmploye:"alamejri@gmail.com",adressEmploye:"citè fath tunis", posteEmploye:"Directeur",
      datedebcontrat : new Date("05/26/2009") } ,
      {idEmploye:4 , nomEmploye:"jebali",  prenomEmploye:"oussema", cinEmploye:14385360, emailEmploye:"jebali12@gmail.com",adressEmploye:"zahrouni", posteEmploye:"chauffeur",
      datedebcontrat : new Date("05/26/2015") },
      {idEmploye:5 , nomEmploye:"dhifli",  prenomEmploye:"kawther", cinEmploye:15385360, emailEmploye:"kawther123@gmail.com",adressEmploye:"zahra", posteEmploye:"community manager",
      datedebcontrat : new Date("05/26/2015") }
    ];
      
   }
   listeEmployes():employe[] { return this.employes; }
   ajouterEmployes( Emp: employe){
    this.employes.push(Emp);
    }
    supprimerEmploye( Emp: employe){
      //supprimer le produit prod du tableau produits
      const index = this.employes.indexOf(Emp, 0);
      if (index > -1) {
      this.employes.splice(index, 1);
      }
      
      }
           
      consulterEmploye(id:number): employe
        {
         this.employee!= this.employes.find(e => e.idEmploye == id);
         return this.employee;
        }

      trierEmployes(){
        this.employes = this.employes.sort((n1,n2) =>
         {
        if (n1.idEmploye > n2.idEmploye) {
        return 1;
        }
        if (n1.idEmploye < n2.idEmploye) {
        return -1;
        }
        return 0;
        });
        }
   
        modifierEmploye(e:employe)
          {
         this.supprimerEmploye(e);
         this.ajouterEmployes(e);
         this.trierEmployes();
          }
      
  }    

