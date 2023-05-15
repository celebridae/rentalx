import { StatusCode } from "../enum/statusCode";
import { CategoriaRepository } from "../repository/categoriaRepository";


class CreateCategoriaService {
    constructor(private categoriaRepository: CategoriaRepository) {

    }

    execute({nome, descricao}){
        const categoriaAlreadyExists = this.categoriaRepository.findByNome( nome );
    if( categoriaAlreadyExists){
        throw new Error("Categoria já existe");
        // throw new AppError("Categoria já existe", StatusCode.BAD_REQUEST);
        // return  res.status(StatusCode.NEGOCIO).json( dataResponse( categoriaAlreadyExists, StatusCode.NEGOCIO)  );
    }
    this.categoriaRepository.create({ nome, descricao });

    }
}

export { CreateCategoriaService };