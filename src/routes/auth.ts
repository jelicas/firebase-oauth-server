import { Request, Response, Router } from "express";
import admin from 'firebase-admin';

const authRoutes = Router();

authRoutes.get('/login', (req: Request, res: Response) => {

  const token = req.headers.authorization!.split(' ')[1];

   admin.auth().verifyIdToken(token)
    .then(user => {
      console.log(user);
      res.send('VALID TOKEN');
    });

});

export { authRoutes };