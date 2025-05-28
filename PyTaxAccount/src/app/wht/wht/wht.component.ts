import { Component, inject } from '@angular/core';
import { ETAService } from '../whtServices/eta.service';
import * as dayjs from 'dayjs';

@Component({
    selector: 'app-wht',
    templateUrl: './wht.component.html',
    styleUrl: './wht.component.css',
})
export class WHTComponent {
    private etaService = inject(ETAService);
    invoices: any;
    datetime24h!: Date;
    fromDate!: Date;
    toDate!: Date;
    isShowDetails: boolean = false;
    detailsCols: any[] = [];
    allInvDetails: any;
    selectedInv: any[] = [];
    loading: boolean = false;
    selectedInvoice:any;


    ngOnInit() {
        this.toDate = new Date();
        this.fromDate = new Date(this.toDate);
        this.fromDate.setDate(this.toDate.getDate()-1);
        this.detailsCols = [
            {
                field: 'description',
                header: 'Description'
            },
            {
                field: 'amountEGP',
                header: 'Unit Price',
            },

            {
                field: 'quantity',
                header: 'Quantity',
            },
            {
                field: 'salesTotal',
                header: 'Sales Total',
            },
            {
                field: 'total',
                header: 'Total Including Taxes',
            }
        ];
    }
    searchByRange(startDate: Date, endDate: Date) {
        this.loading = true;
        const from = dayjs(startDate);
        const to = dayjs(endDate);
        const dateFrom = from.format('YYYY-MM-DDTHH:mm:ss');
        const dateTo = to.format('YYYY-MM-DDTHH:mm:ss');
        this.etaService
            .getInvoicesListByDateRange(dateFrom, dateTo)
            .subscribe((invs) => {
                this.invoices = invs;
                this.loading = false;
            });
    }

    onViewInvoice(invoice: any) {
        this.loading = true;
        this.selectedInvoice = invoice
        console.log(invoice);
        this.etaService.getInvoiceByUuid(invoice.uuid).subscribe((inv) => {
            this.isShowDetails = true;
            this.loading = false;
            this.allInvDetails = inv;
            console.log(inv);

        });
    }

    formatDate(date: Date) {
        const day = date.getDay().toString().padStart(2, '0');
        const month = date.getMonth().toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toPrecision(2).toString();
        const minutes = date.getMinutes().toString();
        const seconds = '00';

        const newDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
        return newDate;
    }
}
