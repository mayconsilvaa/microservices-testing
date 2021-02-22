import bcrypt from 'bcryptjs';
import redis from './redis.config';

export const encryptPassword = async password => {
  let newPassword = '';

  newPassword = await bcrypt.hash(password, 8);
  return newPassword;
};

export const validatedPassword = async (email, password) => {
  const user = await redis.get(email);

  const checkPass = await bcrypt.compare(password, user);

  return checkPass;
};
