import adminController from '~/controllers/adminController'
import { sessionMiddleware } from '../middlewares/session.middleware';
import { isLoggedIn } from '../middlewares/auth.middleware';
import { NextFunction, Router, Request, Response } from 'express'
const router = Router()

router.use(sessionMiddleware);
router.use('/baiviet',isLoggedIn, adminController.baiviet)
router.post('/store', adminController.addBaiviet) //them
router.use('/:id', adminController.adminwithId)     //sua
router.use('/',isLoggedIn, adminController.admin)




export default router