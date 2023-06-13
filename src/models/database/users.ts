import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'

@Entity()
export class users extends BaseEntity {

  @PrimaryGeneratedColumn()
  taikhoan: string

  @Column()
  matkhau: string


}
