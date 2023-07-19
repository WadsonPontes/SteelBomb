import { Estado } from '../enum/Estado.js';

export class Mapa {
	constructor() {
		this.id = null;
		this.idpartida = null;
		this.nome = 'SEM NOME';
		this.imagem = null;
		this.estado = Estado.INICIAL;
	}

	getX(id) {
		return 0;
	}

	getY(id) {
		return 0;
	}
}
