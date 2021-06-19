import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('TaxType')
export class TaxType {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({length: 10})
    taxType: string;
}
