import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GroupService } from '../services/group.service';
import { InvoicesDataSource, InvoicesItem } from './invoices-datasource';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<InvoicesItem>;
  dataSource: InvoicesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'CurrencyExchangeRate', 'DolphinPartyCode', 'InvoiceDate', 'InvoiceNumber', 'InvoiceTotalAmount', 'InvoiceType', 'PartyCountryCode', 'PartyName'];

  constructor(
    private groupGACAgentInvoices: GroupService
  ) {
    this.dataSource = new InvoicesDataSource();
  }

  ngOnInit(){
    this.getInvoicesFromGACAgent();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  getInvoicesFromGACAgent(){
    return this.groupGACAgentInvoices.getInvoiceByNumber("1191538","","","GAEG04");
  }


}
