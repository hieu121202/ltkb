import { DataSource } from 'typeorm'
import { baiviet } from '../models/database/baiviet'
import { users } from '../models/database/users'
import { theloai } from '~/models/database/theloai'
import { theloai2 } from '~/models/database/theloai2'

const port = process.env.PORT || 3000
const myDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: process.env.PORT,
  username: 'root',
  password: '',
  database: 'sach',
  entities: [baiviet,theloai2,theloai,users],
  logging: true,
  synchronize: false
})
export default myDataSource

// import mysql from 'mysql';

// const connection = mysql.createConnection({
//   host: 'localhost', // Địa chỉ của MySQL server
//   user: 'root', // Tên đăng nhập của MySQL
//   password: '', // Mật khẩu của MySQL
//   database: 'sech', // Tên database muốn kết nối
// });

// connection.connect((err:any) => {
//   if (err) {
//     console.error('Lỗi kết nối :', err);
//     return;
//   }
//   console.log('Kết nối MySQL thành công!');
// });

// export default connection;
