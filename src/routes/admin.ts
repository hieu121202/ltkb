import adminController from '~/controllers/adminController'
import { NextFunction, Router, Request, Response } from 'express'
const router = Router()

router.use('/baiviet', adminController.baiviet)
router.use('/', adminController.admin)




export default router