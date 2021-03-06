import {logarTempoDeExecucao} from '../helpers/decorators/index';
export abstract class View<T> {

    private _elemento:JQuery;

    constructor(seletor:string, private escapar:boolean = true){
        this._elemento = $(seletor);
    }

    @logarTempoDeExecucao(true)
    update(modelo:T):void {
        
        let template = this.template(modelo);
        if (this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(template);
    }

    abstract template(modelo:T): string;
}