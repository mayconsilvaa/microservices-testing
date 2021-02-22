import redisCache from '../../../utils/redis.config';
import { encryptPassword } from '../../../utils/password';

class UserRepository {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const userExist = await redisCache.get(email);

      if (userExist) {
        return res.status(400).json({
          message: 'Ops! O e-mail já está registrado!',
        });
      }

      const hashPassword = await encryptPassword(password);

      const user = await redisCache.set(email, hashPassword);

      return res.status(201).json({
        user,
        message: 'Usuário registrado com sucesso!',
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }

  async show(req, res) {
    try {
      const { key } = req.params;

      const userExist = await redisCache.get(key);

      if (!userExist) {
        return res.status(400).json({
          message: 'O usuário não foi localizado!',
        });
      }

      return res.status(200).json({
        data: userExist,
        message: 'Usuário listado com sucesso!',
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }

  async destroy(req, res) {
    try {
      const { key } = req.params;

      const userExist = await redisCache.get(key);

      if (!userExist) {
        return res.status(400).json({
          message: 'O usuário não foi localizado!',
        });
      }

      await redisCache.invalidated(key);

      return res.status(200).json({
        message: 'Usuário excluído com sucesso!',
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
}

export default new UserRepository();
