import express, { Express, Request, Response } from 'express';
import 'express-async-errors'; // using handel error & log
import { error } from '../utils/error';
import { Port } from '../config/app';
import routerAuth from '../routes/auth';
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

app.use('/auth', routerAuth);

app.use(error); 

app.listen(Port, () => {
    console.log(`App listening on port ${Port}`)
})