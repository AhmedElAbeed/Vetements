import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
})
export class AddVetementComponent implements OnInit {

  newVetement = new Vetement();
  message : string;
  constructor(private vetementService: VetementService , private router : Router) { }

  ngOnInit(): void {
  }
  addVetement(){
    //console.log(this.newVetement);
    this.vetementService.ajouterVetement(this.newVetement);
    this.router.navigate(['vetements']);

//    this.message = "Article " + this.newVetement.nomVetement + " ajouté avec succés ! ";
  }

}
