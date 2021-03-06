import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html',
})
export class UpdateVetementComponent implements OnInit {
  currentVetement = new Vetement();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private vetementService: VetementService) { }

  ngOnInit(): void {
     // console.log(this.activatedRoute.snapshot.params.id);
     this.currentVetement = this.vetementService.consulterVetement(this.activatedRoute.snapshot.params.id);
     console.log(this.currentVetement);
    }
    updateVetement()
    {
       // console.log(this.currentVetement)
        this.vetementService.updateVetement(this.currentVetement);
        this.router.navigate(['vetements']);
    }

}
