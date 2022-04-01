import express from 'express'
import Movie from '../Models/movie.js'


const routes = express()

routes.get('/consulter', (req, res) => {
  res.send('Rest Api ok!')
})

routes.post('/register',async (req, res) => {
  const {data} = req.body
  const movie = new Movie(data)
  try {
    
    const newMovie = await movie.save()
    res.status(201).json(newMovie)

  } catch (error) { 
    res.status(400).json({message: error.message})
    }
})
routes.patch('/update:id', async (req,res) => { 
  const {params:{id}} = request
  const data = req.body
  const movie = Movie(data)

  try {
    const updateResult = await movie.updateOne({_id:id},data)
    res.json(updateResult)
  } catch (error) {
    res.status(400).json({message: error.message})
    
  }
})

routes.delete("/destroy:id", async (req, res) => {
  const {params:{id}} = request
  const data = req.body
  const movie = Movie(data)
  try {
    const updateResult = await movie.deleteOne({_id:id},data)
    res.json(updateResult)
  } catch (error) {
    res.status(400).json({message: error.message})
    
  }

})

export default routes