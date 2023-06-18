import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'
import { baiviet } from './baiviet'
@Entity()
export class comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
  
  @Column()
  noidung: string

  @ManyToOne(() => baiviet , (baiviet) => baiviet.comment)
  baiviet: baiviet[]
}