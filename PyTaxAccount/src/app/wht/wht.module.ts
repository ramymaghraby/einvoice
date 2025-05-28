import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WHTRoutingModule } from './wht-routing.module';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { WHTComponent } from './wht/wht.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [WHTComponent],
  imports: [
    CommonModule,
    WHTRoutingModule,
    TableModule,
    CalendarModule,
    FormsModule,
    DialogModule,
    DropdownModule
  ]
})
export class WHTModule { }
