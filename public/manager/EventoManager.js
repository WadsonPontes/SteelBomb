import { GlobalManager } from './GlobalManager.js';

export class EventoManager {
	static iniciar() {
		document.addEventListener('keydown', EventoManager.teclou);
    	document.addEventListener('keyup', EventoManager.desteclou);
		window.addEventListener('resize', EventoManager.redimensionarTela);
		GlobalManager.canvas.addEventListener('click', EventoManager.clicouTela);
		EventoManager.redimensionarTela();
	}

	static teclou(event) {
		GlobalManager.tela.teclou(event.key);
	}

	static desteclou(event) {
		GlobalManager.tela.desteclou(event.key);
	}

	static redimensionarTela() {
		GlobalManager.canvas.width = window.innerWidth;
		GlobalManager.canvas.height = window.innerHeight;
	}

	static clicouTela(event) {
		GlobalManager.tela.clicou(event);
	}
}