import { Request, Response } from 'express';

class Authentication
{
    constructor() {
        //
    }

    login = (req: Request, res: Response) : void => {
        a/2   
        res.send('login')
    }
}

const Auth: Authentication = new Authentication();
export = Auth;