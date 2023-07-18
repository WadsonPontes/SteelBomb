import { BotaoComponent } from '../component/BotaoComponent.js';
import { GlobalManager } from '../manager/GlobalManager.js';
import { MensagemManager } from '../manager/MensagemManager.js';
import { ProcurandoJogoRapidoController } from './ProcurandoJogoRapidoController.js';

export class MenuPrincipalController {
	constructor() {
		this.corFundo = '#141B46';
    	this.componentes = [];
    	this.componentes.push(new BotaoComponent('botao_jogo_rapido', 'JOGO RÁPIDO', 50, 50, 15, '#C8158D'));
	}

	desenhar() {
		GlobalManager.pintarFundo(this.corFundo);

		this.componentes.forEach((value) => {
			value.desenhar();
		});
  	}

	redimensionar() {
		
	}

	clicou(event) {
		this.componentes.forEach((value) => {
			if (GlobalManager.contido(event.clientX, event.clientY, value)) {
				this.clicouComponente(event, value);
			}
		});
	}

	clicouComponente(event, componente) {
		if (componente.NOME == 'botao_jogo_rapido') {
			MensagemManager.enviar(
				'MenuPrincipalController',
				'procurarJogoRapido'
			);
		}
	}

	procurarJogoRapido() {
		GlobalManager.mudarTela(new ProcurandoJogoRapidoController());
	}
}