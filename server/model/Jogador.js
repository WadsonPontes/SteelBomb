import { Tela } from '../enum/Tela.js';
import { Estado } from '../enum/Estado.js';

export class Jogador {
	constructor(ws) {
		this.ws = ws;
		this.nome = 'SEM NOME';
		this.tela = Tela.INICIAL;
		this.estado = Estado.INICIAL;
	}

	toJSON() {
		const retorno = Object.assign({}, this);
		delete retorno.ws;
		return retorno;
	}
}
