import { IsUrl } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UrlShortner {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  originalUrl: string;

  @Column({ unique: true })
  shortUrl: string;

  @Column()
  userId: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdOn: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedOn: string;

  @Column()
  description: string;

  @Column()
  name: string;
}
