import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class ETAService {
    private baseUrl: string = environment.apiETABridge;

    constructor(private http: HttpClient) {}

    getInvoicesDetailsByDateRange(fromDate: string, toDate: string) {
        console.log(fromDate,toDate);

        return this.http.get(
            `${this.baseUrl}` +
                'GetInvoicesDetailsByDateRange?fromDate=' +
                fromDate +
                '&toDate=' +
                toDate
        );
    }
    getInvoiceByUuid(uuid: String) {
        return this.http.get(
            `${this.baseUrl}` + 'GetInvoiceByUuid?uuid=' + uuid
        );
    }
    getDocumentsSummaryByDateRange(fromDate: string, toDate: string) {
        return this.http.get(
            `${this.baseUrl}` +
                'GetDocumentsSummaryByDateRange?fromDate=' +
                fromDate +
                '&toDate=' +
                toDate
        );
    }
    getInvoicesListByDateRange(fromDate: string, toDate: string) {
        return this.http.get(
            `${this.baseUrl}` +
                'GetInvoicesListByDateRange?fromDate=' +
                fromDate +
                '&toDate=' +
                toDate
        );
    }
}
