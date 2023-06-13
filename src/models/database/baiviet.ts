import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'
import { theloai2 } from './theloai2'
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

  @ManyToOne(() => theloai2 , (theloai2) => theloai2.baiviet)
  theloai2: theloai2[]

}

