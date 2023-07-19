import { Estado } from '../enum/Estado.js';
import { v4 as uuidv4 } from 'uuid';

export class Mapa {
	constructor() {
		this.id = uuidv4();
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
