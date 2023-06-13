import { NextFunction, Router, Request, Response } from 'express'
import { sessionMiddleware } from '~/middlewares/session.middleware';
const router = Router()

router.use(sessionMiddleware);
router.get('/', (req: Request, res: Response) => {
    req.session.destroy((error) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal server error');
        return;
      }
      res.clearCookie('connect.sid');
      res.redirect('/login');
    });
  });

export default router