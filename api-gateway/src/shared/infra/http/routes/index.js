import { Router } from 'express';
import sessionRouter from './session.routes';
import userRouter from './user.routes';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'API Gateway is Running!',
  });
});

routes.use('/', sessionRouter);
routes.use('/', userRouter);

export default routes;
