import { Module } from '@nestjs/common';
import { SlobyGateway } from './gateway';

@Module({
  providers: [SlobyGateway],
})
export class GatewayModule {}
