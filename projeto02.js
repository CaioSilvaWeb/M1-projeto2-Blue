console.clear();
const prompt = require("prompt-sync")();

while(true){
let listaDeJogadas = ["pedra", "papel", "tesoura"];
let vitoriasJogador = 0;
let vitoriasComputador = 0;
let empate = 0;
console.log("Olá, seja bem vindo!!Quantas rodadas voce quer jogar? ");
let rodadas = +prompt();

for (let i = 0; i < rodadas; i++) {
  let jogador = prompt("Pedra, papel ou tesoura? ").toLowerCase();
  while (jogador != "pedra" && jogador != "papel" && jogador != "tesoura") {
    console.log("Digite um valor válido!! (pedra, papel, ou tesoura.");
    jogador = prompt("Pedra, papel ou tesoura? ").toLowerCase();
  }
  const computador = listaDeJogadas[Math.floor(Math.random() * listaDeJogadas.length)];

  console.log(`A escolha do jogador foi ${jogador}`);
  console.log(`A escolha do computador foi ${computador}`);

  if (computador == "pedra") {
    if (jogador == "pedra") {
      console.log("EMPATE");
      empate++;
    } else if (jogador == "papel") {
      console.log("jogador venceu");
      vitoriasJogador++;
    } else if (jogador == "tesoura") {
      console.log("computador venceu");
      vitoriasComputador++;
    }
  } else if (computador == "papel") {
    if (jogador == "pedra") {
      console.log("computador ganha");
      vitoriasComputador++;
    } else if (jogador == "papel") {
      console.log("empate");
      empate++;
    } else if (jogador == "tesoura") {
      console.log("jogador ganha");
      vitoriasJogador++;
    }
  } else if (computador == "tesoura") {
    if (jogador == "pedra") {
      console.log("jogador ganha");
      vitoriasJogador++;
    } else if (jogador == "papel") {
      console.log("computador ganha");
      vitoriasComputador++;
    } else if (jogador == "tesoura") {
      console.log("empate");
      empate++;
    }
  }
}
console.log(
  `O jogador venceu ${vitoriasJogador} rodadas.\nO computador venceu ${vitoriasComputador} rodadas.\nTivemos ${empate} empates.`
);

if(vitoriasJogador > vitoriasComputador){
    console.log('Jogador foi o campeao!!')
}else if(vitoriasJogador < vitoriasComputador){
    console.log('computador foi o campeao!!')
}else{
    console.log('Nao tivemos um campeao!(empate)');
}

let jogarNovamente = prompt('Voce quer jogar novamente? ').toLowerCase();
while(jogarNovamente != 'sim' && jogarNovamente != 'nao'){
 jogarNovamente = prompt('Voce quer jogar novamente? ').toLowerCase();
}
if (jogarNovamente == 'sim') {
    true;
}else{
    break;
}
}
console.log('Jogo finalizado!!');