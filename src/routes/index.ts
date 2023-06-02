
import siteRouter from './site'

import { NextFunction, Router, Request, Response } from 'express'

function route(app: any) {
  app.use('/', siteRouter)
   
}


export default route
