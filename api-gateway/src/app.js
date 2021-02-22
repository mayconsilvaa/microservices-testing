import './bootstrap';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import httpProxy from 'express-http-proxy';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../swagger';
// import swaggerJsDoc from 'swagger-jsdoc';
import routes from './shared/infra/http/routes';
import { urlService } from './utils/urlService';
import authJwt from './shared/infra/http/middlewares/auth';

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
    /**
     * Documentation
     */

    // const swaggerOptions = {
    //   swaggerDefinition: {
    //     info: {
    //       title: 'API GATEWAY',
    //       version: '1.0.0',
    //     },
    //   },
    //   apis: ['./shared/infra/http/routes*.js'],
    // };

    // const swaggerDocs = swaggerJsDoc(swaggerOptions);

    // this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    /**
     * Route Init
     * and others
     */

    this.server.use('/api/v1', routes);

    /**
     * Auth JWT
     */

    this.server.use(authJwt);

    /**
     * Redirect Proxy
     * to Microservices
     */

    this.server.use((req, res, next) => {
      httpProxy(urlService(req))(req, res, next);
    });
  }
}

export default new App().server;
