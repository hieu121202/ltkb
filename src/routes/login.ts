import loginController from '~/controllers/loginController'
import { NextFunction, Router, Request, Response } from 'express'
const router = Router()

router.post('/', loginController.checklogin)
router.use('/', loginController.login)



export default router