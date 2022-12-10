import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('site_info')
export class SiteInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  sub_title: string;

  @Column()
  button_title_docs: string;

  @Column()
  button_title_get_started: string;

  @Column()
  img: string;
}
