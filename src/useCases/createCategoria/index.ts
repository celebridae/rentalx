import { CategoriaRepository } from "../../repository/categoriaRepository";
import { CreateCategoriaService } from "../../services/createCategoriaService";
import { ICategoriaRepository } from "../../repository/ICategoriaRepository";
import { CreateCategoriaController } from "./createCategoriaController";
import { PostgresCategoriaRepository } from "../../repository/PostgresCategoriaRepository";


// const categoriaRepository = new CategoriaRepository();
// const categoriaRepository = new PostgresCategoriaRepository();

const categoriaRepository = PostgresCategoriaRepository.getInstance();

const createCategoriaService = new CreateCategoriaService( categoriaRepository );
const createCategoriaController = new CreateCategoriaController( createCategoriaService );


export { createCategoriaController };