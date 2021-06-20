import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Signature')
export class Signature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 3})
    type: string;
    @Column()
    value: string;
}
