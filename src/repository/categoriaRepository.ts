// Permitem a manipulacao de dados desde a insercao, listagem remocao e outros

import { Categoria } from "../model/categoria";

interface ICategoriaDTO{
    nome:string;
    descricao:string;
}

class CategoriaRepository {

    private listaCategoria: Categoria[];

    constructor() {
        this.listaCategoria = [];
    }

    create( {nome, descricao }: ICategoriaDTO) {
        const categoria = new Categoria();
        Object.assign(categoria,{
            nome,
            descricao,
            created_at: new Date()
        });
        this.listaCategoria.push( categoria );
    }

    list(){
        return this.listaCategoria;
    }

    delete( categoria: Categoria ) {
        this.listaCategoria.splice( this.listaCategoria.indexOf( categoria ))
    }

    findByNome( nome: string): Categoria {
        return this.listaCategoria.find( categoria => categoria.nome === nome );
    }

}

export { CategoriaRepository };