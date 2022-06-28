import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('string', {
    length: 100,
  })
  name: string;

  @Column('string')
  description: string;

  @Column('string')
  filename: string;

  @Column('double')
  views: number;

  @Column('bool')
  isPublished: boolean;
}
