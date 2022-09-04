import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DeviceType } from '../device/device.type';

@ObjectType('Gateway')
export class GatewayType {
  @Field(() => ID)
  serial: string;

  @Field()
  name: string;

  @Field()
  ipv4: string;

  @Field(() => [DeviceType])
  devices: string[];
}
