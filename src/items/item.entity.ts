import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  qty: number;

  @Column()
  description: string;
}
