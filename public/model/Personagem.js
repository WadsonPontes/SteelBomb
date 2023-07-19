import { Estado } from '../enum/Estado.js';

export class Personagem {
	constructor(id, idjogador, idpartida) {
		this.id = id;
        this.idjogador = idjogador;
		this.idpartida = idpartida;
		this.nome = 'SEM NOME';
        this.x = null;
        this.y = null;
        this.vida_max = 100;
        this.vida_atual = 100;
		this.estado = Estado.INICIAL;
	}
}
