import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatewayModule } from './gateway/gateway.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Gateway } from './gateway/gateway.entity';
import { Device } from './device/device.entity';
import { DeviceModule } from './device/device.module';

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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    GatewayModule,
    DeviceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
