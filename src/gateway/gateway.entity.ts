import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Gateway {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  serial: string;

  @Column()
  name: string;

  @Column()
  ipv4: string;

  @Column()
  devices: string[];
}
