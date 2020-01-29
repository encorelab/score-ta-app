import { InstructorPageComponent } from './instructor-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {path:'',component:InstructorPageComponent,data:{shouldReuse:true,key:'instructor'}},  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorPageRoutingModule { }
