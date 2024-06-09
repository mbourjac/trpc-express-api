import jwt from 'jsonwebtoken';
import { jwtPayloadSchema } from './jwt.schemas';

export const verifyJwtToken = (token: string) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  if (!secretKey) {
    throw new Error('Please provide a jwt secret key');
  }

  const payload = jwt.verify(token, secretKey);
  const parsedPayload = jwtPayloadSchema.safeParse(payload);

  return parsedPayload.success ? parsedPayload.data.userId : null;
};
