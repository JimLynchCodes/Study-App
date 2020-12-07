import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MongoService } from './util-services/mongo/mongo.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    mongoSvc: MongoService
    ) {
      mongoSvc.getDb('enrolled-agent') // TODO - make this a parameter
    }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
