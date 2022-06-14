import * as jwt from 'jsonwebtoken';

import jwtConfig from './config';

type TokenValidateData = {
  data: { email: string },
}

class AuthService {
  constructor(
    private _jswt = jwt,
  ) {}

  public generate(email: string): string {
    const { secret, expiresIn, algorithm } = jwtConfig;

    const token = this._jswt.sign({ email }, secret, { expiresIn, algorithm });

    return token;
  }

  public verify(token: string): TokenValidateData | null {
    const { secret } = jwtConfig;
    const decoded = this._jswt.verify(token, secret);

    // try/catch preventing 'jsonwebtoken mal formed' type of error
    try {
      return decoded as TokenValidateData;
    } catch (error) {
      return null;
    }
  }
}

export default AuthService;