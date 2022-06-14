import * as express from 'express';

import registerRouter from './routes/register.router';
import loginRouter from './routes/login.router';
 
import errorMiddleware from './middlewares/error.middleware';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      return next();
    }

    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  }

  private routes(): void {
    this.app.use(express.json());

    this.app.get('/', async (_req, res) => {
      return res.status(200).json({ message: `Everything's ok!` });
    });

    this.app.use('/user', registerRouter);
    this.app.use('/login', loginRouter);

    this.app.use(errorMiddleware);
  }
}
