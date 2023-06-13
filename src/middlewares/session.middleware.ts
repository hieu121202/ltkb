// session.middleware.ts
import session from 'express-session';

export const sessionMiddleware = session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // set secure to true in production
});