import { Address } from "src/app/address/entities/address.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Receiver')
export class Receiver {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 3})
    type: string;

    @Column({length: 50})
    regNum: string;

    @Column({length: 200})
    name: string

    @OneToOne(()=> Address)
    @JoinColumn()
    address: Address
}
