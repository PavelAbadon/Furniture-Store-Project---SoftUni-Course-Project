import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'

import routes from './routes.js';

const app = express();

//Setup Mongoose
try {
    await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'furnitureStore',
    });

    console.log('Вързахме се с базата данни ');
} catch (err) {
    console.error('Нещо се прееба с базата данни');
    console.error(err.message);
}


//add CORS
app.use(cors());

//add JSON parser
app.use(express.json());

//add Routes
app.use(routes)

app.listen(3030, () => 'Server is listening on http://localhost:3030...');