import { WebSocketGateway } from '@nestjs/websockets';
import { MessageBody, SubscribeMessage } from '@nestjs/websockets/decorators';

@WebSocketGateway()
export class SlobyGateway {
  @SubscribeMessage('newShard')
  onNewShard(@MessageBody() body: any) {
    console.log('WebSocketGateway has been initialized');
    console.log(body);
  }
}
