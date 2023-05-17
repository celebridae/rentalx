import { Request, Response } from "express";
import { CreateCategoriaService } from "../../services/createCategoriaService";
import { StatusCode } from "../../enum/statusCode";
import { ResponseDate } from '../../shared/responseDate';

class CreateCategoriaController {
    constructor(private createCategoriaService: CreateCategoriaService) { }

    createCategoria(request: Request, response: Response): Response{
        const { nome, descricao } = request.body;
        this.createCategoriaService.execute( { nome, descricao } );   
        return response.status(StatusCode.OK).json( ResponseDate.dataResponse( { nome, descricao } , StatusCode.OK) ); 
    }

    findAllCategoria(request: Request, response: Response): Response{
        if( this.createCategoriaService.list().length > 0 ) {
            return  response.status(StatusCode.OK).json( ResponseDate.dataResponse( this.createCategoriaService.list() , StatusCode.OK, this.createCategoriaService.list().length) );
         }
         return  response.status(StatusCode.NOT_FOUND).json( ResponseDate.dataResponse( this.createCategoriaService.list() , StatusCode.NOT_FOUND)  );
    }
}


export { CreateCategoriaController };