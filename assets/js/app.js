//Variable con la cantidad de veces que el usuario desea jugar
const repetitions = prompt(
    "¿Cuántas veces desea repetir el juego?"
);
const repetitionsQty = Number.parseInt(repetitions);

//Variables de puntaje
let userScore = 0;
let machineScore = 0;

//Se imprime la cantidad de jugadas
console.log(`El usuario quiere que el juego se repita ${repetitionsQty} veces`);
  
//Ciclo for para repetir el juego la cantidad de veces indicada por el usuario
for (let count = 1; count <= repetitionsQty; count = count + 1) {
    //Jugadas del usuario
    const userMove = prompt(
      "Ingrese su jugada, debe ser: Piedra, Papel o Tijera"
    );
    //Jugadas de la máquina
    const randomMoveIndex = Math.floor(Math.random() * (4 - 1)) + 1;
    let machineMove = "";
  
    if (randomMoveIndex === 1) {
      machineMove = "Piedra";
    } else if (randomMoveIndex === 2) {
      machineMove = "Papel";
    } else if (randomMoveIndex === 3) {
      machineMove = "Tijera";
    } else {
      console.error(`La opcion randomMoveIndex no es valida: ${randomMoveIndex}`);
    }

    //Variable del ganador
    let winner = "";

    //Lógica del juego
    if (machineMove === "Piedra") {
      if (userMove === "Papel") {
        winner = "Usuario";
        userScore++;
      } else if (userMove === "Tijera") {
        winner = "Máquina";
        machineScore++;
      } else {
        winner = "Ambos";
      }
    } else if (machineMove === "Papel") {
      if (userMove === "Tijera") {
        winner = "Usuario";
        userScore++;
      } else if (userMove === "Piedra") {
        winner = "Máquina";
        machineScore++;
      } else {
        winner = "Ambos";
      }
    } else if (machineMove === "Tijera") {
      if (userMove === "Piedra") {
        winner = "Usuario";
        userScore++;
      } else if (userMove === "Papel") {
        winner = "Máquina";
        machineScore++;
      } else {
        winner = "Ambos";
      }
    } else {
      winner = "Desconocido";
    }

    //Resultado de cada jugada
    console.log({ userMove, machineMove });
    console.log(`El ganador es: ${winner}`);
}

//Resultado de la partida
if(userScore > machineScore){
    console.log('¡Felicidades, ganaste el juego!');
}
else if(userScore < machineScore){
    console.log('Perdiste el juego.');
}
else{
    console.log('Es un empate.');
}