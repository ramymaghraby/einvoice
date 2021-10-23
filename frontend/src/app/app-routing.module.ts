import { AddressComponent } from './master-data/address/address.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch:'full'},
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'Invoices', component: InvoicesComponent},
  { path: 'Address', component: AddressComponent }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
