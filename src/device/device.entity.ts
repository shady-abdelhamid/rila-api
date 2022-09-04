import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { Status } from './device-status.enum';

@Entity()
export class Device {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  uid: string;

  @Column()
  vendor: string;

  @Column()
  updatedAt: string;

  @Column()
  status: Status;
}
