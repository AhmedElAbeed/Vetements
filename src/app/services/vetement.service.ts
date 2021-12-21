import { Injectable } from '@angular/core';
import { Vetement } from '../model/vetement.model';


@Injectable({
  providedIn: 'root'
})
export class VetementService {
  vetements: Vetement[];
  //  vetement : Vetement;
  constructor() {
    this.vetements = [
      { idVetement: 1, nomVetement: "Blue Hoddie", prixVetement: 80, dateCreation: new Date("01/02/2020") },
      { idVetement: 2, nomVetement: "Addidas Superstar shoes", prixVetement: 270, dateCreation: new Date("01/04/2019") },
      { idVetement: 3, nomVetement: "Nike AirForce 1", prixVetement: 480, dateCreation: new Date("01/10/2021") },
    ];
  }
  listeVetements(): Vetement[] {
    return this.vetements;
  }
  ajouterVetement(vetement: Vetement) {
    this.vetements.push(vetement);
  }
  supprimerVetement(vet: Vetement) {
    //supprimer le produit prod du tableau produits
    const index = this.vetements.indexOf(vet, 0);
    if (index > -1) {
      this.vetements.splice(index, 1);
    }
    //ou Bien
    /* this.vetements.forEach((cur, index) => {
    if(vet.idVetement === cur.idVetement) {
    this.vetements.splice(index, 1);
    }
    }); */
  }
  consulterVetement(id: number): Vetement {
    return this.vetements.find(p => p.idVetement == id);
    // return this.vetement;
  }

  updateVetement(v: Vetement) {
    // console.log(p);
    this.supprimerVetement(v);
    this.ajouterVetement(v);
    this.trierVetements();
  }
  trierVetements() {
    this.vetements = this.vetements.sort((n1, n2) => {
      if (n1.idVetement > n2.idVetement) {
        return 1;
      }
      if (n1.idVetement < n2.idVetement) {
        return -1;
      }
      return 0;
    });
  }
}
