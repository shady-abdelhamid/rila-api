import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { Status } from './device-status.enum';

@InputType()
export class CreateDeviceInput {
  @MinLength(3)
  @Field()
  vendor: string;

  @Field()
  status: Status;
}
