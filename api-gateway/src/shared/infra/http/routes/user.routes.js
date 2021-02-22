import { Router } from 'express';
import UserRepository from '../../../../modules/user/repositories/UserRepository';

const userRouter = new Router();

userRouter.post('/user', UserRepository.store);

/**
 * Routes Auth
 */

userRouter.get('/user/:key', UserRepository.show);
userRouter.delete('/user/:key', UserRepository.destroy);

export default userRouter;
