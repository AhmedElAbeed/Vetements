import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vetement } from '../model/vetement.model';
import { AuthService } from '../services/auth.service';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html',
})
export class VetementsComponent implements OnInit {

  vetements : Vetement[];
  constructor(private vetementService: VetementService,
              private router : Router,
              public authService: AuthService)  
    {
    this.vetements = vetementService.listeVetements();
    }

  ngOnInit(): void {
  }
  supprimerVetement(vet : Vetement)
  {
    //console.log(vet);
    let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.vetementService.supprimerVetement(vet);
  }

}
