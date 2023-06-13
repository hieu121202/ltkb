// auth.middleware.ts
import { Request, Response, NextFunction } from 'express';

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (! (req.session as any).user) {
    return res.redirect('/login');
  }

  next();
};

