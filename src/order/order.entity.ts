import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('ORDER')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    name: 'PRICE',
  })
  price: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
export class OrderModule {}
