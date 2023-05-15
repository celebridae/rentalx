import { ResponseDefault, Retorno } from './../model/ResponseDefault';
import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

import { Categoria }  from "../model/categoria";
import { CategoriaRepository } from "../repository/categoriaRepository";
import { StatusCode } from '../enum/statusCode';
import { CreateCategoriaService } from '../services/createCategoriaService';


const categoriaRouter = Router();
// const listaCategoria: Categoria[] = [];

const categoriaRepository = new CategoriaRepository();

var categoria: Categoria;


function codigoResposta( retorno: Retorno){
    switch ( retorno.codigo ){
        case StatusCode.OK: return "Operação realizada com sucesso !";
        case StatusCode.NEGOCIO: return "Algum error inesperados aconteceu !";
        case StatusCode.NOT_FOUND: return "Dados não encontrados!";
        case StatusCode.SERVER: return "Internal Server Error !";
    }
}

function dataResponse(data: any, statusCode: number, qtd = 0) {
    const response = new ResponseDefault<any>()
    const retorno  = new Retorno()
    response.data = data;
    response.dataHora = new Date();
    response.quantidadeTotalItens = qtd;
    retorno.codigo = statusCode;
    retorno.mensagem = codigoResposta( retorno );
    response.retorno = retorno;
    return response;
}

categoriaRouter.get('/categorias', (req, res) => {
    if( categoriaRepository.list().length > 0 ) {
       return  res.status(StatusCode.OK).json( dataResponse( categoriaRepository.list() , StatusCode.OK, categoriaRepository.list().length) );
    }
    return  res.status(StatusCode.NOT_FOUND).json( dataResponse( categoriaRepository.list() , StatusCode.NOT_FOUND)  );
});

categoriaRouter.post('/categoria', (req, res) => {
    const { nome, descricao } = req.body;
    // const categoriaAlreadyExists = categoriaRepository.findByNome( nome );
    // if( categoriaAlreadyExists){
    //     return  res.status(StatusCode.NEGOCIO).json( dataResponse( categoriaAlreadyExists, StatusCode.NEGOCIO)  );
    // }
    // categoriaRepository.create({ nome, descricao });
    const createCategoriaService = new CreateCategoriaService( categoriaRepository );
    createCategoriaService.execute({ nome, descricao });
    return res.status(StatusCode.OK).json( dataResponse( { nome, descricao } , StatusCode.OK) );
  });

  categoriaRouter.delete('/categoria', (req, res) => {
    const nome  = req.params;

    const categoria = new Categoria();
    categoriaRepository.delete( categoria );
    return res.status(204).json({ nome });
  })


  export default categoriaRouter;