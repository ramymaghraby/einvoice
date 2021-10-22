import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { NavigationComponent } from '../navigation/navigation.component';
import { GroupService } from '../services/group.service';
import { InvoicesDataSource, InvoicesItem } from './invoices-datasource';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements AfterViewInit, OnInit {
  title = 'Invoices';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<InvoicesItem>;
  dataSource: InvoicesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'CurrencyExchangeRate', 'InvoiceDate', 'InvoiceNumber', 'InvoiceTotalAmount', 'InvoiceType', 'PartyCountryCode', 'PartyName'];

  constructor(
    private groupGACAgentInvoices: GroupService,
    private NavigationService: NavigationComponent
  ) {
    this.dataSource = new InvoicesDataSource();
  }

  ngOnInit(){
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.NavigationService.changeTitle();
  }

  getInvoicesFromGACAgent(){
    return this.groupGACAgentInvoices.getInvoiceByNumber("1191538","","","GAEG04");
  }


}
