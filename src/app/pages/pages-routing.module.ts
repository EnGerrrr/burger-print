
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [ {
  path:'',component:ProfileComponent,
 
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
