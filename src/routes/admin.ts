import adminController from '~/controllers/adminController'
import { sessionMiddleware } from '../middlewares/session.middleware';
import { isLoggedIn } from '../middlewares/auth.middleware';
import { NextFunction, Router, Request, Response } from 'express'
const router = Router()

router.use(sessionMiddleware);
router.get('/suabaiviet', adminController.adminwithId)     //sua
router.put('/suabaiviet',adminController.update)
router.delete('/delete', adminController.destroy)
router.use('/baiviet',isLoggedIn, adminController.baiviet)
router.post('/store', adminController.addBaiviet) //them
router.use('/cmt',isLoggedIn, adminController.cmt)
router.delete('/deletecmt', adminController.destroycmt)

router.use('/',isLoggedIn, adminController.admin)




export default router