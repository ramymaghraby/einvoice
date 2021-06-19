import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface InvoicesItem {
  id: number;
  CurrencyExchangeRate: string;
  DolphinPartyCode: string;
  InvoiceDate: string;
  InvoiceNumber: string;
  InvoiceTotalAmount: string;
  InvoiceType: string;
  PartyCountryCode: string;
  PartyName: string;
  // InvoiceDetails: [InvoiceDetails];
}

export interface InvoiceDetails {
  Description: string;
  Quantity: string;
  Total: string;
  UnitType: string;
}

// TODO: replace this with real data from your application
//  InvoiceDetails:[{Description:'Koko', Quantity: '1', Total: '5', UnitType: 'number'}]
const EXAMPLE_DATA: InvoicesItem[] = [
  {id: 1, CurrencyExchangeRate: 'Hydrogen', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 2, CurrencyExchangeRate: 'Helium', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 3, CurrencyExchangeRate: 'Lithium', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 4, CurrencyExchangeRate: 'Beryllium', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 5, CurrencyExchangeRate: 'Boron', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 6, CurrencyExchangeRate: 'Carbon', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 7, CurrencyExchangeRate: 'Nitrogen', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 8, CurrencyExchangeRate: 'Oxygen', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 9, CurrencyExchangeRate: 'Fluorine', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 10, CurrencyExchangeRate: 'Neon', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 11, CurrencyExchangeRate: 'Sodium', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 12, CurrencyExchangeRate: 'Magnesium', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 13, CurrencyExchangeRate: 'Aluminum', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 14, CurrencyExchangeRate: 'Silicon', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 15, CurrencyExchangeRate: 'Phosphorus', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 16, CurrencyExchangeRate: 'Sulfur', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 17, CurrencyExchangeRate: 'Chlorine', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 18, CurrencyExchangeRate: 'Argon', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 19, CurrencyExchangeRate: 'Potassium', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
  {id: 20, CurrencyExchangeRate: 'Calcium', DolphinPartyCode: 'HUB056', InvoiceDate: '2021-05-01', InvoiceNumber: '111223', InvoiceTotalAmount: '123',InvoiceType:'I', PartyCountryCode: 'EG', PartyName: 'Magdy'},
];

/**
 * Data source for the Invoices view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class InvoicesDataSource extends DataSource<InvoicesItem> {
  data: InvoicesItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<InvoicesItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: InvoicesItem[]): InvoicesItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: InvoicesItem[]): InvoicesItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'date': return compare(a.InvoiceDate, b.InvoiceDate, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
