import siteController from '~/controllers/siteController'
import { NextFunction, Router, Request, Response } from 'express'
const router = Router()

router.get('/', siteController.home)


export default router