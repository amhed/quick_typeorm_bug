import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @Column('text')
  filename: string;

  @Column('double')
  views: number;
}
