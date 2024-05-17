import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Manage vehicles store'));

app.listen(3000);