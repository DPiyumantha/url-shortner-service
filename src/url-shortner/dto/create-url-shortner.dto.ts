import { IsUrl } from 'class-validator';

export class CreateUrlShortnerDto {
  @IsUrl(undefined, { message: 'URL is not valid.' })
  originalUrl: string;

  description?: string;

  name: string;

  userId: string;
}
