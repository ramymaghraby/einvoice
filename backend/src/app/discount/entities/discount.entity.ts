import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Discounts')
export class Discount {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"decimal", precision: 5, scale: 2})
    rate:number;

    @Column({type: "decimal", precision: 10, scale: 2})
    amount: number;
}
