import { Estado } from '../enum/Estado.js';
import { v4 as uuidv4 } from 'uuid';

export class Jogador {
	constructor(ws) {
		this.ws = ws;
		this.id = uuidv4();
		this.idpartida = null;
		this.idpersonagem = null;
		this.nome = 'SEM NOME';
		this.estado = Estado.INICIAL;
	}

	toJSON() {
		const retorno = Object.assign({}, this);
		delete retorno.ws;
		return retorno;
	}
}
