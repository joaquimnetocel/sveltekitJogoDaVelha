<script lang="ts">
	import { funcaoVerificarVitoria } from './funcaoVerificarVitoria';
	import type { tipoXouO } from './tipoXouO';

	let estadoTabuleiro: tipoXouO[] = ['', '', '', '', '', '', '', '', ''];
	let estadoJogada = 1;
	let estadoAtivo = true;
	let estadoMensagem = '';

	function funcaoClick(parPosicao: number) {
		if (estadoAtivo === false) {
			return;
		}
		if (estadoTabuleiro[parPosicao] == '') {
			if (estadoJogada % 2 == 1) {
				estadoTabuleiro[parPosicao] = 'O';
			} else {
				estadoTabuleiro[parPosicao] = 'X';
			}
			estadoJogada++;
			const ganhador = funcaoVerificarVitoria(estadoTabuleiro);
			if (ganhador !== null) {
				estadoMensagem = `O jogador ${ganhador} venceu!`;
				estadoAtivo = false;
				return;
			}
			if (estadoJogada > 9) {
				estadoMensagem = `Deu velha!`;
				estadoAtivo = false;
				return;
			}
		} else {
			alert('JOGADA INVÁLIDA!');
		}
	}

	function funcaoReiniciarJogo() {
		estadoTabuleiro = ['', '', '', '', '', '', '', '', ''];
		estadoJogada = 1;
		estadoAtivo = true;
		estadoMensagem = '';
	}
</script>

<h1>JOGO DA VELHA</h1>
<p>PRIMEIRO A JOGAR: O</p>
<table>
	<tr>
		<td on:click={() => funcaoClick(0)}>
			{estadoTabuleiro[0]}
		</td>
		<td on:click={() => funcaoClick(1)}>
			{estadoTabuleiro[1]}
		</td>
		<td on:click={() => funcaoClick(2)}>
			{estadoTabuleiro[2]}
		</td>
	</tr>
	<tr>
		<td on:click={() => funcaoClick(3)}>
			{estadoTabuleiro[3]}
		</td>
		<td on:click={() => funcaoClick(4)}>
			{estadoTabuleiro[4]}
		</td>
		<td on:click={() => funcaoClick(5)}>
			{estadoTabuleiro[5]}
		</td>
	</tr>
	<tr>
		<td on:click={() => funcaoClick(6)}>
			{estadoTabuleiro[6]}
		</td>
		<td on:click={() => funcaoClick(7)}>
			{estadoTabuleiro[7]}
		</td>
		<td on:click={() => funcaoClick(8)}>
			{estadoTabuleiro[8]}
		</td>
	</tr>
</table>
<h2>{estadoMensagem}</h2>
{#if estadoAtivo === false}
	<button on:click={funcaoReiniciarJogo}>REINICIAR</button>
{/if}

<style>
	td {
		width: 60px;
		height: 60px;
		border: 1px solid black;
		font-size: 2rem;
		text-align: center;
	}
</style>
