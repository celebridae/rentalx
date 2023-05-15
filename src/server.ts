import express from 'express';
import categoriaRouter  from './routes/categoria.routes';

const app = express();

app.use(express.json());
app.use( categoriaRouter );

// app.get('/', (req, res) => {
//   res.send('Hello World!   ascsafa');
// });

// app.post('/cursos', (req, res) => {
//     const { name } = req.body;

//     return res.json({success:"success  ", name: name});
// });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});