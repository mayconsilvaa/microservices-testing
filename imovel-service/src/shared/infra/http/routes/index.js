import { Router } from 'express';
import imovelRouter from './imovel.routes';

const routes = new Router();

routes.use('/imovel', imovelRouter);

export default routes;
