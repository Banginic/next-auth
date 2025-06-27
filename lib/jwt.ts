import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@/config/env';

if(!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in the environment variables');
}

export function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET!, { expiresIn: '1h' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET!);
  } catch (error) {
    return null;
  }
}
