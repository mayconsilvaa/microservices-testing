import jwt from 'jsonwebtoken';
import authConfig from '../../../config/authConfig';
import redis from '../../../utils/redis.config';
import { validatedPassword } from '../../../utils/password';

class SessionRepository {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const userExist = await redis.get(email);

      if (!userExist) {
        return res.status(400).json({
          message: 'Usuário não localizado!',
        });
      }

      const checkPass = await validatedPassword(email, password);

      if (!checkPass) {
        return res.status(401).json({
          message: 'E-mail/senha incorreto!',
        });
      }

      return res.status(200).json({
        token: jwt.sign({ payload: userExist.key }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
}

export default new SessionRepository();
