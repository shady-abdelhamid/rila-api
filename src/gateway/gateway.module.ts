import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceModule } from '../device/device.module';
import { Gateway } from './gateway.entity';
import { GatewayResolver } from './gateway.resolver';
import { GatewayService } from './gateway.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gateway]), DeviceModule],
  providers: [GatewayResolver, GatewayService],
})
export class GatewayModule {}
