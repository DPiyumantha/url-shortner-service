import { Module } from '@nestjs/common';
import { UrlShortnerService } from './url-shortner.service';
import { UrlShortnerController } from './url-shortner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlShortner } from './entities/url-shortner.entity';

@Module({
  controllers: [UrlShortnerController],
  providers: [UrlShortnerService],
  imports: [TypeOrmModule.forFeature([UrlShortner])],
})
export class UrlShortnerModule {}
