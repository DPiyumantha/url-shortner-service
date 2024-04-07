import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':shortUrl')
  @Redirect()
  getHello(@Param('shortUrl') shortUrl: string): { url: string } {
    return { url: `url-shortner/${shortUrl}` };
  }
}
