export const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API GATEWAY',
      version: '1.0.0',
      description:
        'Documentação para acesso ao API GATEWAY e os MICROSERVICES.',
    },
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [`${__dirname}/../shared/infra/http/swagger-doc/*.js`],
};
