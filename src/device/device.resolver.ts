import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateDeviceInput } from './device.input';
import { DeviceService } from './device.service';
import { DeviceType } from './device.type';

@Resolver(() => DeviceType)
export class DeviceResolver {
  constructor(private deviceService: DeviceService) {}

  @Query(() => [DeviceType])
  devices() {
    return this.deviceService.getDevices();
  }

  @Query(() => DeviceType)
  device(@Args('uid') uid: string) {
    return this.deviceService.getDevice(uid);
  }

  @Mutation(() => DeviceType)
  createDevice(
    @Args('createDeviceInput') createDeviceInput: CreateDeviceInput,
  ) {
    return this.deviceService.createDevice(createDeviceInput);
  }
}
