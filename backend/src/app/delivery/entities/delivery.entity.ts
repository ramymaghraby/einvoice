import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Delivery')
export class Delivery {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 200})
    approach?: string;

    @Column({length: 200})
    packaging?: string;

    @Column({length: 30})
    dateValidity?: string;

    @Column({length: 100})
    exportPort?: string;

    @Column({length: 4})
    countryOfOrigin?: string;

    @Column({type: "decimal", precision: 10, scale: 4})
    grossWeight?: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    netWeight?: number;

    @Column({length: 300})
    terms?: string;
    
}
