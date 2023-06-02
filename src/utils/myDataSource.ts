import { DataSource } from 'typeorm'
import { User } from '../models/database/User'
import { Message } from '../models/database/Message'

const port = process.env.PORT || 3000
const myDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: process.env.PORT,
  username: 'root',
  password: '',
  database: 'node',
  entities: [User, Message],
  logging: true,
  synchronize: true
})
export default myDataSource
