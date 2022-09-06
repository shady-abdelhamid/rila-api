import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsIP,
  Matches,
  MinLength,
} from 'class-validator';
import {
  CreateDeviceDto,
  UpdateDeviceDto,
} from '../../gateway/dtos/device.dto';

export class CreateGatewayDto {
  @ApiProperty()
  @MinLength(3)
  name: string;

  // @Matches(/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/)
  @ApiProperty()
  @IsIP(4)
  ipv4: string;

  @ApiProperty({ type: [CreateDeviceDto] })
  @ArrayNotEmpty()
  @IsArray()
  devices: CreateDeviceDto[];
}

export class UpdateGatewayDto {
  @ApiProperty()
  @MinLength(3)
  name: string;

  @ApiProperty()
  @Matches(/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/)
  ipv4: string;

  @ApiProperty({ type: [UpdateDeviceDto] })
  @ArrayNotEmpty()
  @IsArray()
  devices: UpdateDeviceDto[];
}
