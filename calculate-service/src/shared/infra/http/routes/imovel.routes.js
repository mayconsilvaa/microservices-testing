import { Router } from 'express';
import HealtyRepository from '../../../../modules/healty/repositories/HealtyRepository';

const imovelRouter = new Router();

imovelRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'Microservice two is Running!',
  });
});

imovelRouter.get('/imovel', HealtyRepository.index);

export default imovelRouter;
