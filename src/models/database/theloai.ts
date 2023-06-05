import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { baiviet } from './baiviet'
@Entity()
export class theloai extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  tentloai: string

    @OneToMany(() => baiviet , (baiviet) => baiviet.theloai)
    baiviet: baiviet[]
  
}

