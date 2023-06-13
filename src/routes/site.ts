import siteController from '~/controllers/siteController'
import { NextFunction, Router, Request, Response } from 'express'
const router = Router()

// router.get('/su-kien', siteController.menu)
// router.get('/giai-thuong', siteController.menu)
// router.get('/goc-cam-nhan', siteController.menu)
// router.get('/tac-gia', siteController.menu)
// router.get('/du-lich', siteController.menu)
// router.get('/diem-tin-sach', siteController.menu)
// router.get('/top-10', siteController.menu)
// router.get('/phim-chuyen-the', siteController.menu)
// router.get('/light-novel', siteController.menu)
// router.get('/cong-viec', siteController.menu)
// router.get('/nghe-thuat-song', siteController.menu)
// router.get('/suc-khoe', siteController.menu)
router.get('/menu/:id', siteController.menu);
router.get('/menu1/:id', siteController.menu1);


router.get('/search/:q', siteController.search);

router.use('/:id', siteController.homewithId)

router.use('/', siteController.home)

export default router
