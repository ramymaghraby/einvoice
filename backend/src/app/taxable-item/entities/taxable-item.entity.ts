import { LineItem } from "src/app/line-items/entities/line-item.entity";
import { TaxSubType } from "src/app/tax-sub-type/entities/tax-sub-type.entity";
import { TaxType } from "src/app/tax-type/entities/tax-type.entity";
import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('TaxableItems')
export class TaxableItem {
    @PrimaryGeneratedColumn()
    id: number;
    
    amount: number;

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
