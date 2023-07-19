import { Estado } from '../enum/Estado.js';
import { v4 as uuidv4 } from 'uuid';
import { GlobalManager } from '../manager/GlobalManager.js';

export class Tiro {
	constructor(idjogador, idpartida, x, y, angulo, dano) {
		this.id = uuidv4();
        this.idjogador = idjogador;
		this.idpartida = idpartida;
		this.nome = 'SEM NOME';
		this.imagem = '/asset/tiro.png';
        this.x = x+7.5;
        this.y = y+8.5;
		this.angulo = angulo;
        this.vida_max = 100;
        this.vida_atual = 100;
		this.dano = dano;
		this.estado = Estado.INICIAL;
	}

	atualizar(index) {
		if (this.angulo == 0) {
            this.y -= 20;
        }
        else if (this.angulo == 90) {
            this.x += 20;
        }
        else if (this.angulo == 180) {
            this.y += 20;
        }
        else {
            this.x -= 20;
        }

        this.vida_atual -= 3;

        if (this.vida_atual <= 0) {
            GlobalManager.partidas[this.idpartida].tiros.splice(index, 1);
        }
	}
}
