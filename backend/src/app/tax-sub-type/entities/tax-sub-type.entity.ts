import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('TaxSubType')
export class TaxSubType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 10})
    taxSubType: string;
}
