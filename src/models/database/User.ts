import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  socketId: string

  @Column({ default: false })
  status: boolean

  @Column({ default: false })
  isadmin: number
}
