import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Device } from './device.entity';
import { v4 as uuid } from 'uuid';
import { CreateDeviceInput } from './device.input';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device) private deviceRepository: Repository<Device>,
  ) {}

  async getDevices(): Promise<Array<Device>> {
    return this.deviceRepository.find();
  }

  async getDevice(uid: string): Promise<Device> {
    return this.deviceRepository.findOne({
      where: { uid: uid },
    });
  }
  async createDevice({ vendor, status }: CreateDeviceInput): Promise<Device> {
    const gateway = this.deviceRepository.create({
      uid: uuid(),
      vendor,
      status,
      updatedAt: new Date().toISOString(),
    });

    return this.deviceRepository.save(gateway);
  }

  async getManyDevices(deviceIds: string[]): Promise<Array<Device>> {
    return this.deviceRepository.find({
      where: {
        uid: In(deviceIds),
      },
    });
  }
}
