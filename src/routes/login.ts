import loginController from '~/controllers/loginController'
import { NextFunction, Router, Request, Response } from 'express'
const router = Router()


router.use('/', loginController.login)


export default router