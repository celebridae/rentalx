import express from 'express';
import categoriaRouter  from './routes/categoria.routes';

const app = express();

app.use(express.json());
app.use( categoriaRouter );

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});