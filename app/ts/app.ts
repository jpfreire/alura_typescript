import { NegociacaoController } from './controllers/NegociacaoController'
const controller = new NegociacaoController();
//teste
$(".form").submit((evento)=>controller.adiciona(evento));
