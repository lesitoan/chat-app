import { Router } from 'express';
import { signup } from '@/controllers/userController';

const userRoute = Router();
userRoute.post('/signup', signup);


export default userRoute;