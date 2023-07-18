import { GlobalManager } from './GlobalManager.js';

export class EventoManager {
	static iniciar() {
		window.addEventListener('resize', EventoManager.redimensionarTela);
		GlobalManager.canvas.addEventListener('click', EventoManager.clicouTela);
		EventoManager.redimensionarTela();
	}

	static redimensionarTela() {
		GlobalManager.canvas.width = window.innerWidth;
		GlobalManager.canvas.height = window.innerHeight;
	}

	static clicouTela(event) {
		GlobalManager.tela.clicou(event);
	}
}