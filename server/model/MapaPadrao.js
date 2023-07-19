
import { Estado } from '../enum/Estado.js';
import { Mapa } from './Mapa.js';
import { v4 as uuidv4 } from 'uuid';

export class MapaPadrao extends Mapa {
	constructor() {
		super();
		this.mapa = [];
	}

	getX(id) {
		if (id == 1) {
			return 50;
		}

		return 0;
	}

	getY(id) {
		if (id == 1) {
			return 50;
		}

		return 0;
	}
}
