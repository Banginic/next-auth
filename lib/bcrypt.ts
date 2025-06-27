import bcrypt from 'bcrypt';

export function encryptPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export function decryptPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}