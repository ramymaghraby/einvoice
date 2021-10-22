import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('taxSubType')
export class TaxSubType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 10})
    taxSubType: string;
}
