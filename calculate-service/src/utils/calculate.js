import { get } from 'axios';

export const calculateSquare = async (id, qtdSquare) => {
  try {
    const consult = await get(`http://imovel-service:3020/api/v1/imovel/${id}`);

    if (!consult.data) {
      throw new Error('Imóvel não localizado!');
    }

    const calc = consult.data.realty.square_meter * qtdSquare;

    return {
      name: consult.data.realty.name,
      square_meter: consult.data.realty.square_meter,
      calcFinish: calc,
    };
  } catch (err) {
    return err.message;
  }
};
