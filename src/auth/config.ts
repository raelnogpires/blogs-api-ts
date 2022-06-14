import { readFileSync } from 'fs';
import * as jwt from 'jsonwebtoken';

type JWTConfig = {
  secret: jwt.Secret,
  expiresIn: jwt.SignOptions['expiresIn'],
  algorithm: jwt.Algorithm,
};

const jwtConfig: JWTConfig = {
  // making sure that encoding is utf-8
  secret: readFileSync('jwt.evaluation.key', 'utf-8'),
  expiresIn: '2d',
  algorithm: 'HS256',
};

export default jwtConfig;