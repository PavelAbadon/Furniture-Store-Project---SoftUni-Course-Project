import express from 'express';

const app = express();

app.get('/', (req, res) =>{
    console.log('a dano raboti');
    res.send('raboti ve');
});

app.listen(3030, () => 'Server is listening on http://localhost:3030...');