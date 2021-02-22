/**
 * @swagger
 * /api/v1/session:
 *    post:
 *      tags:
 *        - Session
 *      summary: session
 *      parameters: [
 *         {
 *           in: body,
 *           name: body,
 *           schema: {
 *             type: object,
 *             properties: {
 *                email: {
 *                  type: string
 *                },
 *                password: {
 *                  type: string
 *                }
 *             }
 *           }
 *         }
 *      ]
 *      responses:
 *        200:
 *          description: OK
 *        5XX:
 *          description: Internal server error
 */
