import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VetementsComponent } from './vetements/vetements.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { VetementGuard } from './vetement.guard';
const routes: Routes = [

  
  {path:'vetements',component :  VetementsComponent},
  {path:'add-vetement',component :  AddVetementComponent, canActivate:[VetementGuard] },
  {path: "updateVetement/:id", component: UpdateVetementComponent, canActivate:[VetementGuard]},
  {path: "login", component: LoginComponent},
  {path: "app-forbidden", component: ForbiddenComponent},
  {path : "add-vetement", component : AddVetementComponent, canActivate:[VetementGuard]},
  { path: "", redirectTo: "vetements", pathMatch: "full" }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
