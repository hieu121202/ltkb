import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { theloai2 } from './theloai2'
@Entity()
export class theloai extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  tentloai: string

  @OneToMany(() => theloai2, (theloai2) => theloai2.theloai)
  theloai2: theloai2[]
}
