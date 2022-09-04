import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gateway } from './gateway.entity';
import { v4 as uuid } from 'uuid';
import { CreateGatewayInput } from './gateway.input';
@Injectable()
export class GatewayService {
  constructor(
    @InjectRepository(Gateway) private gatewayRepository: Repository<Gateway>,
  ) {}

  async getGateways(): Promise<Array<Gateway>> {
    return this.gatewayRepository.find();
  }

  async getGateway(serial: string): Promise<Gateway> {
    return this.gatewayRepository.findOne({
      where: { serial: serial },
    });
  }
  async createGateway({
    name,
    ipv4,
    devices,
  }: CreateGatewayInput): Promise<Gateway> {
    const gateway = this.gatewayRepository.create({
      serial: uuid(),
      name,
      ipv4,
      devices,
    });

    return this.gatewayRepository.save(gateway);
  }

  async assignDevicesToGateway(
    gatewaySerial: string,
    deviceIds: string[],
  ): Promise<Gateway> {
    const gateway = await this.getGateway(gatewaySerial);
    gateway.devices = [...gateway.devices, ...deviceIds];

    return this.gatewayRepository.save(gateway);
  }
}
