import { Estado } from '../enum/Estado.js';

export class Personagem {
	constructor(posicao, idjogador, idpartida) {
		this.id = null;
		this.posicao = posicao;
        this.idjogador = idjogador;
		this.idpartida = idpartida;
		this.nome = 'SEM NOME';
		this.imagem = null;
        this.x = null;
        this.y = null;
		this.angulo = 0;
        this.vida_max = 100;
        this.vida_atual = 100;
		this.dano = 10;
		this.estado = Estado.INICIAL;
	}
}
