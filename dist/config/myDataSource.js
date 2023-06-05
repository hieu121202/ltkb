"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const baiviet_1 = require("../models/database/baiviet");
const theloai_1 = require("../models/database/theloai");
const port = process.env.PORT || 3000;
const myDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: process.env.PORT,
    username: 'root',
    password: '',
    database: 'sech',
    entities: [baiviet_1.baiviet, theloai_1.theloai],
    logging: true,
    synchronize: true
});
exports.default = myDataSource;
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
