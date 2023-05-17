import { StatusCode } from "../enum/statusCode";
import { ResponseDefault, Retorno } from "../model/ResponseDefault";

class ResponseDate {
  

    static codigoResposta( retorno: Retorno){
        switch ( retorno.codigo ){
            case StatusCode.OK: return "Operação realizada com sucesso !";
            case StatusCode.NEGOCIO: return "Algum error inesperados aconteceu !";
            case StatusCode.NOT_FOUND: return "Dados não encontrados!";
            case StatusCode.SERVER: return "Internal Server Error !";
        }
    }
    
     static dataResponse(data: any, statusCode: number, qtd = 0) {
        const response = new ResponseDefault<any>()
        const retorno  = new Retorno()
        response.data = data;
        response.dataHora = new Date();
        response.quantidadeTotalItens = qtd;
        retorno.codigo = statusCode;
        retorno.mensagem = this.codigoResposta( retorno );
        response.retorno = retorno;
        return response;
    }

}

export {ResponseDate};