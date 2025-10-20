import {Router} from 'express';
import userservice from '../services/userservice';

const userController = Router();

userController.post('/register', async (req, res) =>{
    const userData =  req.body;
    const result = await userservice.register(userData.email, userData.password)
    
    res.status(201).end();
} )


export default userController;


