import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'
import { baiviet } from './baiviet'
import { theloai } from './theloai'
@Entity()
export class theloai2 extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  tentloai: string

  @OneToMany(() => baiviet, (baiviet) => baiviet.theloai2)
  baiviet: baiviet[]

  @ManyToOne(() => theloai, (theloai) => theloai.theloai2)
  theloai: theloai[]
}