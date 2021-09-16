import { Order } from 'src/order/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USER')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        name: 'NAME',
    })
    name: string;

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];
}
