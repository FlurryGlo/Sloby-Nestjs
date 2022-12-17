import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

export class HttpExceptionFiler implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(exception.getResponse(), exception);
    console.log(exception.getStatus());

    const context = host.switchToHttp();
    const request = context.getRequest<Request>();
    const response = context.getResponse<Response>();

    response.send({
      status: exception.getStatus(),
      message: exception.getResponse(),
      consumer: 'Gabo',
    });
  }
}
