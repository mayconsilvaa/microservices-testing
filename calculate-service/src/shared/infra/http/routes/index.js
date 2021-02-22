import { Router } from 'express';
import imovelRouter from './imovel.routes';

const routes = new Router();

routes.use('/calculate', imovelRouter);

export default routes;
