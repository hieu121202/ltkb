
import siteRouter from './site'
import loginRouter from './login'
import adminRouter from './admin'
import logoutRouter from './logout'
import connection from '~/config/myDataSource'

import { NextFunction, Router, Request, Response } from 'express'
// import { checkLogin } from '~/middlewares/requireLogin'

function route(app: any) {

  app.use('/login',loginRouter)
  app.use('/logout',logoutRouter)
  app.use('/admin',adminRouter)
  // app.use('/:id',siteRouter)
  
  //getAll
  // app.get('/u', (req: Request, res: Response) => {
  //   connection.query('SELECT * FROM baiviet', (error, results, fields) => {
  //     if (error) {
  //       console.error('Lỗi truy vấn MySQL:', error);
  //       res.status(500).send('Lỗi truy vấn MySQL');
  //       return;
  //     }
  
  //     res.send(results);
  //   });
  // });
  //getById
  // app.get('/:id', (req: Request, res: Response) => {
  //   connection.query('SELECT * FROM baiviet where id_baiviet = ?',[req.params['id']] ,(error, results, fields) => {
  //     if (error) {
  //       console.error('Lỗi truy vấn MySQL:', error);
  //       res.status(500).send('Lỗi truy vấn MySQL');
  //       return;
  //     }
  
  //     res.send(results);
  //   });
  // });
  
  
  

  app.use('/', siteRouter)
}


export default route
