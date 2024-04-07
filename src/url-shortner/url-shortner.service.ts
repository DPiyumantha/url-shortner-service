import { Injectable } from '@nestjs/common';
import { CreateUrlShortnerDto } from './dto/create-url-shortner.dto';
import { UpdateUrlShortnerDto } from './dto/update-url-shortner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlShortner } from './entities/url-shortner.entity';
import { Repository } from 'typeorm';
import ShortUniqueId from 'short-unique-id';

@Injectable()
export class UrlShortnerService {
  constructor(
    @InjectRepository(UrlShortner)
    private _urlShortnerRepository: Repository<UrlShortner>,
  ) {}

  async redirect(shortUrl: string) {
    const url = await this._urlShortnerRepository.findOne({
      where: { shortUrl },
    });
    return { url: this.converToFullyQualifiedUrl(url.originalUrl) };
  }

  create(createUrlShortnerDto: CreateUrlShortnerDto) {
    const uid = new ShortUniqueId({ length: 5 });
    const entity = this._urlShortnerRepository.create({
      name: createUrlShortnerDto.name,
      description: createUrlShortnerDto.description,
      originalUrl: createUrlShortnerDto.originalUrl,
      shortUrl: uid.rnd(),
      userId: createUrlShortnerDto.userId,
    });
    return this._urlShortnerRepository.save(entity);
  }

  findAll() {
    return this._urlShortnerRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} urlShortner`;
  }

  update(id: number, updateUrlShortnerDto: UpdateUrlShortnerDto) {
    return `This action updates a #${id} urlShortner`;
  }

  remove(id: number) {
    return `This action removes a #${id} urlShortner`;
  }

  converToFullyQualifiedUrl(url: string) {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `http://${url}`;
  }
}
