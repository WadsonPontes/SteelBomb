
import { Estado } from '../enum/Estado.js';
import { Mapa } from './Mapa.js';
import { v4 as uuidv4 } from 'uuid';

export class MapaPadrao extends Mapa {
	constructor() {
		super();
		this.imagem = '/asset/city.jpg';
	}

	getX(id) {
		if (id == 1) {
			return 5372;
		}

		return 1176;
	}

	getY(id) {
		if (id == 1) {
			return 3596;
		}

		return 1497;
	}
}
