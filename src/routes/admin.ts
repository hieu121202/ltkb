import adminController from '~/controllers/adminController'
import { NextFunction, Router, Request, Response } from 'express'
const router = Router()


router.use('/', adminController.login)


export default router