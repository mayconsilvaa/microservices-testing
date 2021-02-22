/**
 * URL BASE
 */
const baseUrl = '/api/v1';

/**
 * URLS to
 * Microservices
 */

const urls = {
  imovel: 'http://imovel-service:3020/api/v1',
  calculate: 'http://calculate-service:3030/api/v1',
};

export const urlService = req => {
  console.log('req', req.path);

  if (req.path.startsWith(`${baseUrl}/imovel`)) return urls.imovel;
  if (req.path.startsWith(`${baseUrl}/calculate`)) return urls.calculate;
};
