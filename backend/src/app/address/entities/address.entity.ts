import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('address')
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20})
    branchId?: string;

    @Column({length: 5})
    country: string;

    @Column({length: 100})
    governate: string;

    @Column({length: 100})
    regionCity: string;

    @Column({length: 350})
    street: string;

    @Column({length: 6})
    buildingNumber: string;

    @Column({length: 8})
    postalCode?: string;

    @Column({length: 6})
    floor?: string;

    @Column({length: 6})
    room?: string;

    @Column({length: 200})
    landmark?: string;

    @Column({length: 300})
    additionalInformation?: string;

}
