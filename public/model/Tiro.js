import { Estado } from '../enum/Estado.js';
import { GlobalManager } from '../manager/GlobalManager.js';

export class Tiro {
	constructor(idjogador, idpartida, x, y, angulo, dano) {
		this.id = null;
        this.idjogador = idjogador;
		this.idpartida = idpartida;
		this.nome = 'SEM NOME';
		this.imagem = '/asset/tiro.png';
        this.x = x;
        this.y = y;
		this.angulo = angulo;
        this.vida_max = 100;
        this.vida_atual = 100;
		this.dano = dano;
		this.estado = Estado.INICIAL;
	}
}
