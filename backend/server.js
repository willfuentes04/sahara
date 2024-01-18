import express from 'express';
import data from './data.js';
import cors from 'cors';


const app = express();
app.use(cors())
// test
app.get('/api/products', (req, res) => {
  console.log(req.headers)
  res.send(data.products);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});