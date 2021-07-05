import { Column, ViewEntity } from "typeorm";

@ViewEntity('GetInvoice')
export class Freight {
    @Column()
    internalId: string;
    @Column()
    documentType: string;
    @Column()
    dateTimeIssued: Date;
    @Column()
    DolphinCode: string;
    @Column()
    RName: string;
    @Column()
    Currency: string;

}
