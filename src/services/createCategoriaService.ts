
// ^Regras de negocio do sistema
// 
import * as statusCode from "../enum/statusCode";
import { ICategoriaRepository } from "../repository/ICategoriaRepository";
import { CategoriaRepository } from "../repository/categoriaRepository";


class CreateCategoriaService {
    constructor(private categoriaRepository: ICategoriaRepository) { }
    // constructor(private categoriaRepository: CategoriaRepository) { }

    execute({ nome, descricao }) {
        const categoriaAlreadyExists = this.categoriaRepository.findByNome(nome);
        if (categoriaAlreadyExists) {
            throw new Error("Categoria já existe");
        }
        this.categoriaRepository.create({ nome, descricao });
    }

    list(){
        return this.categoriaRepository.findAll();

    }
}

export { CreateCategoriaService };