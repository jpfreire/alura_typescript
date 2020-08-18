import { Imprimivel } from "./Imprimivel";

export class Negociacao extends Imprimivel{

    // declaração das propriedades de classe
    

    constructor(readonly data: Date,
                readonly quantidade: number,
                readonly valor: number) {
        super();
    }

    get volume() {

        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log('-- paraTexto --');
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );
    }
}
