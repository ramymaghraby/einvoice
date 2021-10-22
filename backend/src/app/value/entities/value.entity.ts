import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('value')
export class Value {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 5})
    currencySold: string;

    @Column({type: "decimal", precision: 10, scale: 4})
    amountEGP: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    amountSold?: number;

    @Column({type: "decimal", precision: 10, scale: 4})
    currencyExchangeRate: number;
}
