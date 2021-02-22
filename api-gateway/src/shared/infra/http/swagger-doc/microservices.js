/**
 * @swagger
 * /api/v1/imovel/register:
 *    post:
 *      tags:
 *        - Imóvel
 *      summary: register
 *      parameters: [
 *         {
 *           in: body,
 *           name: body,
 *           schema: {
 *             type: object,
 *             properties: {
 *                name: {
 *                  type: string
 *                },
 *                square_meter: {
 *                  type: number
 *                }
 *             }
 *           }
 *         }
 *      ]
 *      security:
 *	      - bearerAuth: []
 *      responses:
 *        200:
 *          description: OK
 *        5XX:
 *          description: Internal server error
 */

/**
 * @swagger
 * /api/v1/calculate/imovel:
 *    get:
 *      tags:
 *        - Imóvel
 *      summary: calculate
 *      parameters:
 *        - name: imovelId
 *          in: query
 *          required: true
 *          type: string
 *        - name: qtdSquare
 *          in: query
 *          required: true
 *          type: number
 *      security:
 *	      - bearerAuth: []
 *      responses:
 *        200:
 *          description: OK
 *        5XX:
 *          description: Internal server error
 */
