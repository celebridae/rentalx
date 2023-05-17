import { ICategoriaDTO } from "../DTO/ICategoriaDTO";
import { Categoria } from "../model/categoria";
import { ICategoriaRepository } from "./ICategoriaRepository";


class PostgresCategoriaRepository implements ICategoriaRepository{


    private listaCategoria: Categoria[];
    private static INSTANCE: PostgresCategoriaRepository;

    constructor() {
        this.listaCategoria = [];
    }

    public static getInstance(): PostgresCategoriaRepository{
        if(!PostgresCategoriaRepository.INSTANCE){
            PostgresCategoriaRepository.INSTANCE = new PostgresCategoriaRepository();
        }
        return PostgresCategoriaRepository.INSTANCE;
    }

    create({ nome,descricao,}: ICategoriaDTO): void {
        const categoria = new Categoria();
        Object.assign(categoria,{
            nome,
            descricao,
            created_at: new Date()
        });
        this.listaCategoria.push( categoria );        
    }

    update(categoria: Categoria): void {
        
    }

    delete(categoria: Categoria): Categoria {

        return categoria;
        
    }
    
    findById(id: string): Categoria {
        return new Categoria();
    }
    
    findAll(): Categoria[] {
        return this.listaCategoria;
    }

    findByNome( nome: string): Categoria {
        return this.listaCategoria.find( categoria => categoria.nome === nome );
    }




    // @Inject
    // private PostgreSQL postgres;
}

export { PostgresCategoriaRepository }