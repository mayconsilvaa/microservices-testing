import './bootstrap';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './shared/infra/http/routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.disable('x-powered-by');
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(morgan('dev'));
  }

  routes() {
    this.server.use('/api/v1', routes);
  }
}

export default new App().server;
