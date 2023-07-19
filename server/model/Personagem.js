import { Estado } from '../enum/Estado.js';
import { GlobalManager } from '../manager/GlobalManager.js';
import { Tiro } from './Tiro.js';
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
        this.vida_max = 50;
        this.vida_atual = 50;
		this.dano = 10;
		this.ultimo_tiro = Date.now();
		this.estado = Estado.INICIAL;
	}

	atirar() {
		this.ultimo_tiro = Date.now();
		const tiro = new Tiro(this.idjogador, this.idpartida, this.x, this.y, this.angulo, this.dano);
		GlobalManager.partidas[this.idpartida].tiros.push(tiro);
	}

	tomarDano(dano) {
		this.vida_atual -= dano;

		if (this.vida_atual <= 0) {
			this.morrer();
		}
	}

	morrer() {
		GlobalManager.partidas[this.idpartida].personagens.splice(this.id, 1);
	}
}
