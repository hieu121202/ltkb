"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const myDataSource_1 = __importDefault(require("./config/myDataSource"));
const app = require('express')();
const bodyParser = require('body-parser');
const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
// const cookieParser = require('cookie-parser ')
//Template engine
app.engine('.hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(path.resolve('src/resources'), 'views'));
// console.log(global._io)
app.use(express_1.default.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'));
//khai báo để sử dụng khi lấy dữ liệu từ post lên nó sẽ lưu vào body
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true
}));
myDataSource_1.default
    .initialize()
    .then(() => {
    console.log('thành công!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization:', err);
});
//route init
(0, index_1.default)(app);
app.listen(3000, () => {
    console.log(`[Server]: I am running at http://localhost:${3000}`);
});
// app.get("/test",(req:any, res:any) => {
//   const sql = "select * from baiviet";
//   connection.query(sql,(err, data) => {
//     if (err) return res.json("err")
//       return res.json(sql)
//   })
// })
