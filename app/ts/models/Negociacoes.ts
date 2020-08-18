import {Negociacao} from './Negociacao';
import {logarTempoDeExecucao} from '../helpers/decorators/index';
import { Imprimivel } from './Imprimivel';

export class Negociacoes extends Imprimivel{
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao:Negociacao):void{
        this._negociacoes.push(negociacao);
    }

    @logarTempoDeExecucao()
    paraArray():Negociacao[]{
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {

        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }
    
}