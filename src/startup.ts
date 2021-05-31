import * as express from 'express';
import DataBase from './infra/db';
import userRouter from './routers/user-router';
import categoryRouter from './routers/category-router';
import entryRouter from './routers/entry-router';
import authRouter from './routers/auth-router';


import * as cors from 'cors';
import Auth from './infra/auth';

class StartUp {

    public app: express.Application;
    private _db: DataBase;

    constructor() {
        this.app = express();
        this._db = new DataBase();
        this._db.createConnection();
        this.middler();
        this.routes();
    }

    enableCors() {
        const options: cors.CorsOptions = {
          methods: 'GET,OPTIONS,PUT,POST,DELETE,PATCH',
          origin: '*'
        };
    
        this.app.use(cors(options));
      }

    middler() {
        this.enableCors();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use('/', authRouter);               
        // this.app.use(Auth.validate);
        this.app.use('/user', userRouter);        
        this.app.use('/entry', entryRouter);        
        this.app.use('/category', categoryRouter);        
    }
}

export default new StartUp();