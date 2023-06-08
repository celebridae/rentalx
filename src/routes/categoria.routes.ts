import { Router } from "express";
import { Categoria }  from "../model/categoria";
import { CategoriaRepository } from "../repository/categoriaRepository";
import { StatusCode } from '../enum/statusCode';
import { CreateCategoriaService } from '../services/createCategoriaService';
import { ResponseDate } from '../shared/responseDate';
import { PostgresCategoriaRepository } from "../repository/PostgresCategoriaRepository";
import { createCategoriaController } from "../useCases/createCategoria";


import multer from "multer";

const upload = multer({
    dest: './tmp'
});

const categoriaRouter = Router();
//const categoriaRepository = new CategoriaRepository();
// const categoriaRepository = new PostgresCategoriaRepository
const categoriaRepository = PostgresCategoriaRepository.getInstance();


categoriaRouter.get('/categoria', (req, res) => {
    // if( categoriaRepository.findAll().length > 0 ) {
    //    return  res.status(StatusCode.OK).json( ResponseDate.dataResponse( categoriaRepository.findAll() , StatusCode.OK, categoriaRepository.findAll().length) );
    // }
    // return  res.status(StatusCode.NOT_FOUND).json( ResponseDate.dataResponse( categoriaRepository.findAll() , StatusCode.NOT_FOUND)  );
    return createCategoriaController.findAllCategoria(req, res); 
});

categoriaRouter.post('/categoria', (req, res) => {
    // const { nome, descricao } = req.body;
    // const createCategoriaService = new CreateCategoriaService( categoriaRepository );
    // createCategoriaService.execute({ nome, descricao });
    // return res.status(StatusCode.OK).json( ResponseDate.dataResponse( { nome, descricao } , StatusCode.OK) );

    return createCategoriaController.createCategoria( req, res);
  });

  categoriaRouter.delete('/categoria', (req, res) => {
    const nome  = req.params;
    const categoria = new Categoria();
    categoriaRepository.delete( categoria );
    return res.status(StatusCode.OK).json( ResponseDate.dataResponse( { nome } , StatusCode.OK) );
  });

  // Upload de filcheiros

  categoriaRouter.post('/categoria/upload', upload.single('file'), (req, res) => {
    // const {file} = req;
    // return res.status(StatusCode.OK).json( ResponseDate.dataResponse( { file }, StatusCode.OK) );
    return createCategoriaController.importfile( req, res );
  });


  export default categoriaRouter;