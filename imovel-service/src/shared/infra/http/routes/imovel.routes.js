import { Router } from 'express';
import RealtyRepository from '../../../../modules/realty/repositories/RealtyRepository';

const imovelRouter = new Router();

imovelRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'Microservice one is Running!',
  });
});

imovelRouter.post('/register', RealtyRepository.store);
imovelRouter.get('/all', RealtyRepository.index);
imovelRouter.get('/:realtyId', RealtyRepository.show);

export default imovelRouter;
