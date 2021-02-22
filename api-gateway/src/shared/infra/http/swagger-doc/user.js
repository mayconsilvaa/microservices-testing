/**
 * @swagger
 * /api/v1/user:
 *    post:
 *      tags:
 *        - User
 *      summary: register
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

/**
 * @swagger
 * /api/v1/user/{key}:
 *    get:
 *      tags:
 *        - User
 *      summary: show
 *      parameters:
 *        - name: key
 *          in: path
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: OK
 *        5XX:
 *          description: Internal server error
 */

/**
 * @swagger
 * /api/v1/user/{key:
 *    delete:
 *      tags:
 *        - User
 *      summary: delete
 *      parameters:
 *        - name: key
 *          in: path
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: OK
 *        5XX:
 *          description: Internal server error
 */
