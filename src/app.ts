import express, { Application } from 'express';
import cors from 'cors'
const app: Application = express()

// cors use
app.use(cors())

// Parsing data
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

export default app
