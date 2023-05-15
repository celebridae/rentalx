
export class ResponseDefault<T>{
    data?: T;
    retorno?: Retorno;
    dataHora?: Date;
    quantidadeTotalItens?: number;
}


export class Retorno{
    codigo: number;
    mensagem: string;
}