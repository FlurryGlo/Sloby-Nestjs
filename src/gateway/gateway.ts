import { OnModuleInit } from '@nestjs/common';
import { WebSocketGateway } from '@nestjs/websockets';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets/decorators';
import { Server } from 'socket.io';

@WebSocketGateway()
export class SlobyGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('Connected');
    });
  }

  @SubscribeMessage('newShard')
  onNewShard(@MessageBody() body: any) {
    console.log('WebSocketGateway has been initialized');
    console.log(body);
  }
}
