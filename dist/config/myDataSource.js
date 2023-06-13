"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const baiviet_1 = require("../models/database/baiviet");
const users_1 = require("../models/database/users");
const theloai_1 = require("../models/database/theloai");
const theloai2_1 = require("../models/database/theloai2");
const port = process.env.PORT || 3000;
const myDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: process.env.PORT,
    username: 'root',
    password: '',
    database: 'sach',
    entities: [baiviet_1.baiviet, theloai2_1.theloai2, theloai_1.theloai, users_1.users],
    logging: true,
    synchronize: false
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
