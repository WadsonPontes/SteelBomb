import { Estado } from '../enum/Estado.js';

export class Sala {
	constructor(nome = 'SEM NOME') {
		this.nome = nome;
        this.jogadores = [];
		this.estado = Estado.INICIAL;
	}
}