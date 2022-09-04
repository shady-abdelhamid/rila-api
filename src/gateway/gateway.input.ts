import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID, Matches, MinLength } from 'class-validator';

@InputType()
export class CreateGatewayInput {
  @MinLength(1)
  @Field()
  name: string;

  @Matches(/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/)
  @Field()
  ipv4: string;

  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  devices: string[];
}
