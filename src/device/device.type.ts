import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Status } from './device-status.enum';

@ObjectType('Device')
export class DeviceType {
  @Field(() => ID)
  uid: string;

  @Field()
  vendor: string;

  @Field()
  updatedAt: string;

  @Field()
  status: Status;
}
