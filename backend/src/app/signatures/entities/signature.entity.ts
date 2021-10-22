import { Invoice } from "src/app/invoice/entities/invoice.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('signature')
export class Signature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 3})
    type: string;
    @Column()
    value: string;
    @OneToOne(() => Invoice, invoice => invoice.signature)
    invoice: Invoice
}
