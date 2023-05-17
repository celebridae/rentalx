import { ICategoriaDTO } from "../DTO/ICategoriaDTO";
import { Categoria } from "../model/categoria";


interface ICategoriaRepository {
    create(categoria: ICategoriaDTO): void;
    update(categoria: Categoria): void;
    delete(categoria: Categoria): Categoria;
    findById(id: string): Categoria;
    findAll(): Categoria[];
    findByNome(nome):Categoria;
}

export { ICategoriaRepository };