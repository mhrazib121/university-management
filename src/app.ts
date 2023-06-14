import express, { Application } from 'express'
import cors from 'cors';
import routes from './app/routes';
const app: Application = express()

// cors use
app.use(cors())

// Parsing data
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/v1', routes);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app;
