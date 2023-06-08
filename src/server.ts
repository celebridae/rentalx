import express from 'express';
import categoriaRouter  from './routes/categoria.routes';


//Configuração do swagger para a documentação 

import swaggerUi  from 'swagger-ui-express';
// const swaggerDocument = require('./swagger.json');
import swaggerJson from './swagger.json';

const app = express();
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.use(express.json());
app.use( categoriaRouter );

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});