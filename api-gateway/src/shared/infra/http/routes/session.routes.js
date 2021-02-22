import { Router } from 'express';
import SessionRepository from '../../../../modules/session/repositories/SessionRepository';

const sessionRouter = new Router();

sessionRouter.post('/session', SessionRepository.store);

export default sessionRouter;
