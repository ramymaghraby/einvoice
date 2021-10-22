import { LineItem } from "src/app/line-items/entities/line-item.entity";
import { TaxSubType } from "src/app/tax-sub-type/entities/tax-sub-type.entity";
import { TaxType } from "src/app/tax-type/entities/tax-type.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('taxableItems')
export class TaxableItem {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "decimal", precision:10, scale: 4})
    amount: number;
    @Column({type: "decimal", precision:10, scale: 4})
    rate: number;
    @ManyToOne(()=>LineItem)
    lineItem: LineItem;

    @OneToOne(()=>TaxType)
    @JoinColumn()
    taxType: TaxType;

    @OneToOne(()=> TaxSubType)
    @JoinColumn()
    subType: TaxSubType;

}
