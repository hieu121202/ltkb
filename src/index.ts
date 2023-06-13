import express from 'express'
import route from './routes/index'
import myDataSource from './config/myDataSource'
import methodOverride from "method-override";
const app = require('express')()
const bodyParser = require('body-parser')
const path = require('path')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const session = require('express-session')
const flash = require('express-flash')
const passport = require('passport')
// const cookieParser = require('cookie-parser ')

//Template engine
app.engine(
  '.hbs',
  handlebars.engine({
    extname: '.hbs'
  })
)
app.use(methodOverride("_method"));
app.set('view engine', '.hbs')
app.set('views', path.join(path.resolve('src/resources'),'views'))

// console.log(global._io)

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'))

//khai báo để sử dụng khi lấy dữ liệu từ post lên nó sẽ lưu vào body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true
}));

myDataSource
  .initialize()
  .then(() => {
    console.log('thành công!')
  })
  .catch((err: any) => {
    console.error('Error during Data Source initialization:', err)
  })

//route init
route(app)

app.listen(3000, () => {
  console.log(`[Server]: I am running at http://localhost:${3000}`)
})


// app.get("/test",(req:any, res:any) => {
//   const sql = "select * from baiviet";
//   connection.query(sql,(err, data) => {
//     if (err) return res.json("err")
//       return res.json(sql)
//   })
// })