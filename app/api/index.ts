import express, { Express, Request, Response } from 'express';
import 'express-async-errors'; // using handel error & log
import { error, logger, setLogFile } from '../utils/error';
import { PORT } from '../config/app';
import routerAuth from '../routes/auth';
const app: Express = express();
const log = logger(setLogFile('test'))


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
    log.info('logggggggggggggggg')
});

app.use('/auth', routerAuth);

app.use(error); 

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})