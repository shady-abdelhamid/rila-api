import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { DeviceService } from '../device/device.service';
import { AssignDevicesToGatewayInput } from './assign-devices-to-gateway.input';
import { Gateway } from './gateway.entity';
import { CreateGatewayInput } from './gateway.input';
import { GatewayService } from './gateway.service';
import { GatewayType } from './gateway.type';

@Resolver(() => GatewayType)
export class GatewayResolver {
  constructor(
    private gatewayService: GatewayService,
    private deviceService: DeviceService,
  ) {}

  @Query(() => [GatewayType])
  gateways() {
    return this.gatewayService.getGateways();
  }

  @Query(() => GatewayType)
  gateway(@Args('serial') serial: string) {
    return this.gatewayService.getGateway(serial);
  }

  @Mutation(() => GatewayType)
  createGateway(
    @Args('createGatewayInput') createGatewayInput: CreateGatewayInput,
  ) {
    return this.gatewayService.createGateway(createGatewayInput);
  }

  @Mutation(() => GatewayType)
  assignDevicesToGateway(
    @Args('assignDevicesToGatewayInput')
    { gatewayId, deviceIds }: AssignDevicesToGatewayInput,
  ) {
    return this.gatewayService.assignDevicesToGateway(gatewayId, deviceIds);
  }

  @ResolveField()
  async devices(@Parent() gateway: Gateway) {
    return this.deviceService.getManyDevices(gateway.devices);
  }
}
