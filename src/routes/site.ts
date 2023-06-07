import siteController from '~/controllers/siteController'
import { NextFunction, Router, Request, Response } from 'express'
const router = Router()


router.use('/:id', siteController.homewithId)

router.use('/', siteController.home)

export default router
