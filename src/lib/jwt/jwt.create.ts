import jwt from 'jsonwebtoken';

export const createJwtToken = (userId: string) => {
  const payload = { userId };
  const secretKey = process.env.JWT_SECRET_KEY;

  if (!secretKey) {
    throw new Error('Please provide a jwt secret key');
  }

  return jwt.sign(payload, secretKey, {
    expiresIn: '24h',
  });
};
