import express from 'express'
import cors from 'cors'
import { dataA } from './data1.js';

const app = express()
app.use(cors());

const port = process.env.PORT || 4000;

app.get('/data', (req, res) => {

  res.json(dataA);    

});


app.listen(port, () => {
  console.log(`Manuel's Express app is listening on port ${port}`);
});