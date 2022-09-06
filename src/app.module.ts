import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatewayModule } from './gateway/gateway.module';
import { Gateway } from './gateway/models/gateway.entity';
import { Device } from './gateway/models/device.entity';

// TypeOrmModule.forRoot(typeOrmConfig)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/rila',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Gateway, Device],
    }),
    GatewayModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
