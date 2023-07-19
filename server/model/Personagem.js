import { Estado } from '../enum/Estado.js';
import { v4 as uuidv4 } from 'uuid';

export class Personagem {
	constructor(id, idjogador, idpartida, mapa) {
		this.id = id;
        this.idjogador = idjogador;
		this.idpartida = idpartida;
		this.nome = 'SEM NOME';
		this.imagem = `/asset/${id}.png`;
        this.x = mapa.getX(id);
        this.y = mapa.getY(id);
		this.angulo = 0;
        this.vida_max = 100;
        this.vida_atual = 100;
		this.estado = Estado.INICIAL;
	}
}
