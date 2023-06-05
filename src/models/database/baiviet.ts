import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'
import { theloai } from './theloai'
@Entity()
export class baiviet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  tieude: string

  @Column()
  hinh: string

  @Column()
  trichdan: string

  @Column()
  noidung: string

  @ManyToOne(() => theloai , (theloai) => theloai.baiviet)
  theloai: theloai 

}

