import Realty from '../entities/Realty';

class RealtyRepository {
  async index(req, res) {
    try {
      const realty = await Realty.find().sort('-created_at');

      if (realty.length <= 0) {
        return res.status(200).json({
          realty,
          message: 'Nenhum imóvel disponível!',
        });
      }

      return res.status(200).json({
        realty,
        message: 'Todos os imóveis listado com sucesso!',
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }

  async store(req, res) {
    try {
      const { name, square_meter } = req.body;

      const checkRealty = await Realty.findOne({
        name,
      });

      if (checkRealty) {
        return res.status(400).json({
          message: 'O imóvel já está cadastrado!',
        });
      }

      const realty = await Realty.create({
        name,
        square_meter,
      });

      return res.status(201).json({
        realty,
        message: 'Imóvel cadastrado com sucesso!',
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }

  async show(req, res) {
    try {
      const { realtyId } = req.params;

      const realtyExist = await Realty.findById(realtyId);

      if (!realtyExist) {
        return res.status(400).json({
          message: 'Imóvel não localizado!',
        });
      }

      const { name, square_meter } = realtyExist;

      return res.status(200).json({
        realty: {
          name,
          square_meter,
        },
        message: 'Imóvel localizado com sucesso!',
      });
    } catch (err) {
      console.log('err', err);
      return res.status(500).json({
        message: err.message,
      });
    }
  }
}

export default new RealtyRepository();
