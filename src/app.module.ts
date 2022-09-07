import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { GatewayModule } from './gateway/gateway.module';

TypeOrmModule.forRoot();
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), GatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
