import { TextoComponent } from '../component/TextoComponent.js';
import { GlobalManager } from '../manager/GlobalManager.js';

export class ProcurandoJogoRapidoController {
	constructor() {
		this.corFundo = '#141B46';
    	this.componentes = [];
    	this.componentes.push(new TextoComponent('texto_procurando_partida', 'PROCURANDO PARTIDA...', 50, 50, 30));
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
				value.clicou(event);
			}
		});
	}
}