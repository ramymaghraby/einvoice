import { Invoice } from "src/app/invoice/entities/invoice.entity";
import { TaxType } from "src/app/tax-type/entities/tax-type.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('taxTotal')
export class TaxTotal {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(()=>TaxType)
    @JoinColumn()
    taxType: TaxType;

    @Column({type: "decimal", precision: 10, scale: 4})
    amount: number;

    @ManyToOne(()=>Invoice, (invoice)=>invoice.taxTotal)
    invoice: Invoice;
}
