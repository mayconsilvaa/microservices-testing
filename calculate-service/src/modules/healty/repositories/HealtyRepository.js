import { calculateSquare } from '../../../utils/calculate';

class HealtyRepository {
  async index(req, res) {
    try {
      const { imovelId, qtdSquare } = req.query;

      const calc = await calculateSquare(imovelId, qtdSquare);

      return res.status(200).json({
        data: {
          name: calc.name,
          square_meter: calc.square_meter,
          propertyValue: calc.calcFinish,
        },
        message: 'Valor do imóvel calculado com sucesso!',
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
}

export default new HealtyRepository();
