import siteController from '~/controllers/siteController'
import { NextFunction, Router, Request, Response } from 'express'
const router = Router()


router.use('/site', siteController.site)

router.use('/', siteController.home)

export default router
