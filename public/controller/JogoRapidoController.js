import { TextoComponent } from '../component/TextoComponent.js';
import { GlobalManager } from '../manager/GlobalManager.js';
import { MensagemManager } from '../manager/MensagemManager.js';
import { Partida } from '../model/Partida.js';

export class JogoRapidoController {
	constructor() {
		this.corFundo = '#141B46';
    	this.componentes = [];
    	this.componentes.push(new TextoComponent('texto_achou', 'ACHOU', 50, 50, 30));
	}

	iniciar(jogador, dados) {
		GlobalManager.attJogador(jogador);
		GlobalManager.addPartida(dados);
		GlobalManager.mudarTela(this);
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
		if (componente.NOME == '') {
			
		}
	}
}