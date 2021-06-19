import { Delivery } from "src/app/delivery/entities/delivery.entity";
import { Issuer } from "src/app/issuer/entities/issuer.entity";
import { LineItem } from "src/app/line-items/entities/line-item.entity";
import { Payment } from "src/app/payment/entities/payment.entity";
import { Receiver } from "src/app/receiver/entities/receiver.entity";
import { Signature } from "src/app/signatures/entities/signature.entity";
import { TaxTotal } from "src/app/tax-total/entities/tax-total.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Invoices')
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 5})
    documentType: string;

    @Column({length: 4})
    documentTypeVersion: string;

    @Column()
    dateTimeIssued: Date;

    @Column({length: 9})
    taxpayerActivityCode: string;

    @Column({length: 50})
    internalId: string;

    @Column({length: 100})
    purchaseOrderReference?: string;

    @Column({length: 300})
    purchaseOrderDescription?: string;

    @Column({length: 100})
    salesOrderReference?: string;

    @Column({length: 500})
    salesOrderDescription?: string;

    @Column({length: 50})
    proformaInvoiceNumber?: string;

    @Column({type: "decimal", precision: 10, scale: 4})
    totalSalesAmount: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    totalDiscountAmount: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    netAmount: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    extraDiscountAmount: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    totalItemsDiscountAmount: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    totalAmount: number;

    @OneToOne(()=>Issuer)
    @JoinColumn()
    issuer: Issuer;

    @OneToOne(()=>Receiver)
    @JoinColumn()
    receiver: Receiver;

    @OneToMany(()=>LineItem, (lineItems)=>lineItems.invoice)
    invoiceLines: Promise<LineItem[]>;
    
    @OneToOne(()=>Signature)
    @JoinColumn()
    signatures: Signature;

    @OneToMany(()=> TaxTotal, (taxTotal)=> taxTotal)
    @JoinColumn()
    taxTotal?:Promise<TaxTotal[]>

    @OneToOne(()=>Payment)
    @JoinColumn()
    payment?: Payment;

    @OneToOne(()=>Delivery)
    @JoinColumn()
    delivery?: Delivery;

}
