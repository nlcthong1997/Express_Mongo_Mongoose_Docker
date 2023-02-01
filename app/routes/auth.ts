import AuthController from '../controllers/authentication';
import express from 'express';
const router = express.Router();

router.get('/login', AuthController.login);

export = router;