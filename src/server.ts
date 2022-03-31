import express from 'express';
import cors from 'cors'
const conn = require('../db/conn')


import routes from '../routes/routes';

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('Server started on porte')
})