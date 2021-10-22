import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('payment')
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 200})
    bankName?: string;

    @Column({length: 500})
    bankAddress?: string;

    @Column({length: 200})
    bankAccountNo?: string;

    @Column({length: 200})
    bankAccountIBAN?: string;

    @Column({length: 200})
    swiftCode?: string;

    @Column({length: 500})
    terms?: string;
}
