import type { tipoXouO } from './tipoXouO';

export function funcaoVerificarVitoria(parTabuleiro: tipoXouO[]) {
	let ganhador: null | 'O' | 'X' = null;
	if (
		(parTabuleiro[0] == parTabuleiro[1] && //linha 1
			parTabuleiro[1] == parTabuleiro[2] &&
			parTabuleiro[0] != '' &&
			(ganhador = parTabuleiro[0])) ||
		(parTabuleiro[3] == parTabuleiro[4] && //linha 2
			parTabuleiro[4] == parTabuleiro[5] &&
			parTabuleiro[3] != '' &&
			(ganhador = parTabuleiro[3])) ||
		(parTabuleiro[6] == parTabuleiro[7] && //linha 3
			parTabuleiro[7] == parTabuleiro[8] &&
			parTabuleiro[6] != '' &&
			(ganhador = parTabuleiro[6])) ||
		(parTabuleiro[0] == parTabuleiro[3] && //coluna 1
			parTabuleiro[3] == parTabuleiro[6] &&
			parTabuleiro[0] != '' &&
			(ganhador = parTabuleiro[0])) ||
		(parTabuleiro[1] == parTabuleiro[4] && //coluna 2
			parTabuleiro[4] == parTabuleiro[7] &&
			parTabuleiro[1] != '' &&
			(ganhador = parTabuleiro[1])) ||
		(parTabuleiro[2] == parTabuleiro[5] && //coluna 3
			parTabuleiro[5] == parTabuleiro[8] &&
			parTabuleiro[2] != '' &&
			(ganhador = parTabuleiro[2])) ||
		(parTabuleiro[0] == parTabuleiro[4] && //diagonal 1
			parTabuleiro[4] == parTabuleiro[8] &&
			parTabuleiro[0] != '' &&
			(ganhador = parTabuleiro[0])) ||
		(parTabuleiro[2] == parTabuleiro[4] && //diagonal 2
			parTabuleiro[4] == parTabuleiro[6] &&
			parTabuleiro[2] != '' &&
			(ganhador = parTabuleiro[2]))
	) {
		return ganhador;
	}
	return ganhador;
}
