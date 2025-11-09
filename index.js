import express from 'express'
import bodyParser from 'body-parser'
import { dbConnection } from './src/config/db.config.js'
import { blogRouter } from './src/routes/v1/blog.route.js'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! firdous')
})

dbConnection();
app.use( bodyParser.json() );

app.use('/api/v1/blogs' , blogRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
