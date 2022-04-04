import express from 'express';
//import mongoose from 'mongoose';
import cors from 'cors'
import rotes from '../routes/router.js'

const app = express();


//mongoose.connect('mongodb://localhost:27017/bonaparte',) 

//const db = mongoose.connection
//db.on('error', (err) => console.log(err))
   //db.once('open', () => console.log('Database Connected'))

  


app.use(cors())
app.use(express.json())
app.use(rotes)



app.listen(3333, () => {
  console.log('Server running!!!2')
})