import { Column, ViewEntity } from "typeorm";

@ViewEntity('Elec_Tax_Inv')
export class ReceiversApp {
    @Column()
    InvoiceId?: number;
    @Column()
    'Invoice Number': string;
    @Column()
    'Invoice Date': string;
    @Column()
    'Job Number': string;
    @Column()
    'Our Contact Person': string
    @Column()
    'Invoice Currency': string
    @Column()
    'Currency Exchange Rate': string
    @Column()
    'Invoice Total Amount': string
    @Column()
    'Party Name': string
    @Column()
    'Party Country Code': string
    @Column()
    'Dolphin Party Code': string
    @Column()
    'InvoicePk': string
    @Column()
    'ServiceId': string
    @Column()
    'ServiceIdString': string
    @Column()
    'Description': string
    @Column()
    'UnitType': string
    @Column()
    'Quantity': string
    @Column()
    'Total': string
}
