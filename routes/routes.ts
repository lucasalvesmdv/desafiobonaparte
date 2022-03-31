import { Router } from 'express';
import Movies from '../model/Movies';


const routes = Router()

routes.post('/register', async(request, response) => {
  try {
    const movie = await Movies.create(request.body);
    console.log(request)

    return response.send({movie})
  } catch (err) {
    return response.status(400).send({error: "Registration failed"})
  }

})

export default routes;