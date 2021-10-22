import { Discount } from "src/app/discount/entities/discount.entity";
import { Invoice } from "src/app/invoice/entities/invoice.entity";
import { TaxableItem } from "src/app/taxable-item/entities/taxable-item.entity";
import { Value } from "src/app/value/entities/value.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('lineItem')
export class LineItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 300})
    description: string;

    @Column({length: 5})
    itemType: string;

    @Column({length: 40})
    itemCode: string;

    @Column({length: 5})
    unitType: string;

    @Column({type: "decimal", precision: 10, scale: 4})
    quantity: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    salesTotal: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    total: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    valueDifference: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    totalTaxableFees: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    netTotal: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    itemsDiscount: number;

    @Column({length: 100})
    internalCode: string;

    @ManyToOne(()=>Invoice, (invoice)=>invoice.invoiceLines)
    @JoinColumn()
    invoice: Invoice;

    @OneToOne(() =>Discount)
    @JoinColumn()
    discount?: Discount;

    @OneToMany(()=>TaxableItem, (taxableItems)=>taxableItems.lineItem)
    @JoinColumn()
    taxableItems?: Promise<TaxableItem[]>;

    @OneToOne(()=> Value)
    @JoinColumn()
    unitValue: Value

}
