import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WHTComponent } from './wht/wht.component';

const routes: Routes = [
  {
    path:'',component:WHTComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WHTRoutingModule { }
