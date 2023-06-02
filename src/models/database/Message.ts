import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userSend: string

  @Column()
  userReceive: string

  @Column()
  content: string
}
