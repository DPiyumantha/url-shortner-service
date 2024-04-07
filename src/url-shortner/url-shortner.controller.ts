import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
} from '@nestjs/common';
import { UrlShortnerService } from './url-shortner.service';
import { CreateUrlShortnerDto } from './dto/create-url-shortner.dto';
import { UpdateUrlShortnerDto } from './dto/update-url-shortner.dto';

@Controller('url-shortner')
export class UrlShortnerController {
  constructor(private readonly urlShortnerService: UrlShortnerService) {}

  @Post()
  create(@Body() createUrlShortnerDto: CreateUrlShortnerDto) {
    return this.urlShortnerService.create(createUrlShortnerDto);
  }

  @Get('urls')
  findAll() {
    return this.urlShortnerService.findAll();
  }

  @Get(':shortUrl')
  @Redirect('', 302)
  async findOne(@Param('shortUrl') shortUrl: string) {
    const res = await this.urlShortnerService.redirect(shortUrl);
    return { url: res.url };
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUrlShortnerDto: UpdateUrlShortnerDto,
  ) {
    return this.urlShortnerService.update(+id, updateUrlShortnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.urlShortnerService.remove(+id);
  }
}
