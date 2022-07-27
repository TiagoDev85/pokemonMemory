// ARRAY COM O NOME DAS IMAGENS
let imagesEasy = [
  "bulbasauro.png",
  "caterpie.png",
  "charmander.png",
  "bulbasauro.png",
  "caterpie.png",
  "charmander.png",
];
let imagesMedium = [
  "bulbasauro.png",
  "caterpie.png",
  "charmander.png",
  "pikachu.png",  
  "meowth.png",
  "bulbasauro.png",
  "caterpie.png",
  "charmander.png",
  "pikachu.png",  
  "meowth.png",
];
let imagesHard = [
  "bulbasauro.png",
  "caterpie.png",
  "charmander.png",
  "pikachu.png",
  "squirtle.png",
  "meowth.png",
  "pignite.png",
  "pawmi.png",
  "bulbasauro.png",
  "caterpie.png",
  "charmander.png",
  "pikachu.png",
  "squirtle.png",
  "meowth.png",
  "pignite.png",
  "pawmi.png",
];
let images = [];

// TELA DO JOGO
const game = document.querySelector(".game");
const memoryTable = document.getElementsByTagName("main")[0];

const selectMode = document.querySelector(".select-mode");

// TELA INICIAL
let logoPokemon = document.querySelector(".logo-pokemon");
const startGame = document.querySelector(".btn-start");
startGame.addEventListener("click", () => {
  logoPokemon.style.zIndex = -1;
  // game.style.zIndex = 999;
  // game.style.visibility = "visible";
  selectMode.style.zIndex = 1;
  selectMode.style.opacity = 1;
});

// TELA SELECT MODE
// const selectMode = document.querySelector(".select-mode");
// let selectDifficult = document.querySelector(".select-difficult");
// for (let o = 0; o < selectDifficult.length; o++) {
//   if (selectDifficult[o].value == 1) {
//     selectDifficult[o].addEventListener("click", () => {
//       images = imagesEasy;
//       selectMode.style.visibility = 'hidden';
//       game.style.zIndex = 999;
//       game.style.visibility = 'visible';
//       embaralhar()
//       console.log(images)
//     });
//   }
//   if (selectDifficult[o].value == 2) {
//     selectDifficult[o].addEventListener("click", () => {
//       images = imagesMedium;
//       selectMode.style.visibility = 'hidden';
//       game.style.zIndex = 999;
//       game.style.visibility = 'visible';
//       embaralhar()
//       console.log(images)
//     });
//   }
//   if (selectDifficult[o].value == 3) {
//     selectDifficult[o].addEventListener("click", () => {
//       images = imagesHard
//       selectMode.style.visibility = 'hidden';
//       game.style.zIndex = 999;
//       game.style.visibility = 'visible';
//       embaralhar()
//       console.log(images)
//     });
//   }
// }

let selectDifficult = document.querySelector(".select-difficult");
// DEFININDO DIFICULDADE DO JOGO
for (let o = 0; o < selectDifficult.length; o++) {
  if (selectDifficult[o].value == 1) {
    selectDifficult[o].addEventListener("change", () => {
      allFunctions(imagesEasy);
    });
  }
  if (selectDifficult[o].value == 2) {
    selectDifficult[o].addEventListener("change", () => {
      allFunctions(imagesMedium);
    });
  }
  if (selectDifficult[o].value == 3) {
    selectDifficult[o].addEventListener("change", () => {
      allFunctions(imagesHard);
    });
  }
}

// EMBARALHANDO AS IMAGENS
function embaralhar() {
  let m = images.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = images[m];
    images[m] = images[i];
    images[i] = t;
  }
}

// CRIANDO OS CARDS
function createCards(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let card = document.createElement("div");
    let memoryGame = document.querySelector(".memory-game");
    if (arr.length == 6) {
      card.style.width = "170px";
      card.style.height = "170px";
      memoryGame.style.height = "260px";
      memoryGame.style.justifyContent = "center";
      game.firstElementChild.style.top = '5%'
      // RESPONSIVO
      if(window.matchMedia("(max-width: 428px)").matches){
        card.style.width = "130px";
        card.style.height = "130px"
        memoryGame.style.width = "480px";
        memoryGame.style.height = "260px";
        game.firstElementChild.style.top = '25%'
      }     
    }
    if (arr.length == 10) {
      card.style.width = "150px";
      card.style.height = "150px";
      memoryGame.style.width = "800px";
      memoryGame.style.height = "260px";
      memoryGame.style.justifyContent = "center";
      game.firstElementChild.style.top = '5%'
      // RESPONSIVO
      if(window.matchMedia("(max-width: 428px)").matches){
        card.style.width = "130px"; 
        card.style.height = "130px";
        memoryGame.style.width = "300px";
        memoryGame.style.height = "600px";       
        memoryGame.style.top = "22%"; 
        game.firstElementChild.style.top = '5%'
      }
    }
    if (arr.length == 16) {
      card.style.width = "130px";
      card.style.height = "130px";      
      memoryGame.style.justifyContent = "center";
      game.firstElementChild.style.top = '5%'
      memoryGame.style.top = "35%";
      // RESPONSIVO
      if(window.matchMedia("(max-width: 428px)").matches){
        card.style.width = "90px"; 
        card.style.height = "90px";
        memoryGame.style.width = "480px";
        memoryGame.style.height = "400px";
        memoryGame.style.top = "30%";
        game.firstElementChild.style.top = '10%'
      }
      if(window.matchMedia("(max-width: 360px)").matches){
        card.style.width = "80px"; 
        card.style.height = "80px";
        memoryGame.style.width = "400px";
        memoryGame.style.height = "400px";
        memoryGame.style.top = "35%";
        game.firstElementChild.style.top = '10%'
      }
    }
    card.classList.add("card");
    card.setAttribute("data-card", arr[i]);
    memoryTable.appendChild(card);
  }
  cardsAction();
}

//INSERINDO AS IMAGENS NOS CARDS
function insertImages() {
  for (let c = 0; c <= images.length - 1; c++) {
    let table = document.querySelectorAll(`.memory-game :nth-child(${c + 1})`);
    table.forEach((data) => {
      // FUNDO DOS CARDS
      const imageCardBack = document.createElement("img");
      imageCardBack.classList.add("card-back");
      imageCardBack.src = "./img/int.png";

      // FRENTE DOS CARDS
      let imageCardFront = document.createElement("img");
      imageCardFront.classList.add("card-front");
      imageCardFront.src = `./img/${images[c]}`;
      data.appendChild(imageCardFront);
      data.appendChild(imageCardBack);
    });
  }
}

// FUNCIONALIDADES DE ANIMAÇÃO E VERIFICAÇÃO DAS CARTAS
function cardsAction() {
  let cards = document.querySelectorAll(".card");
  let hasFlippedCard = false;
  let firstCard, secondCard;
  let lockBoard = false;
  let viradas = [];
  let countClicks = 0;
  let qtdCliques = document.querySelector(".qtd-cliques");

  function flipCard() {
    //CONTANTO OS CLIQUES
    countClicks += 1;
    console.log(countClicks);
    // TRANCANDO O TABULEIRO PARA EVITAR GIRAR MAIS DE DUAS CARTAS POR VEZ
    if (lockBoard) return;

    // EVITANDO CLICAR DUAS VEZES NA MESMA CARTA
    if (this === firstCard) return;

    this.classList.add("flip");
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;

      return;
    }

    secondCard = this;
    hasFlippedCard = false;

    checkForMatch(firstCard, secondCard);
  }

  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });

  function checkForMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
      disableCards();
      endGame(firstCard, secondCard);
      return;
    }

    unflipCards();
  }

  // DESABILITA AS CARTAS CASO SEJAM IGUAIS
  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
  }

  // VIRA NOVAMENTE AS CARTAS CASO SEJAM DIFERENTES
  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      resetBoard();
    }, 1000);
  }

  // RESETAR O TABULEIRO
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false][(firstCard, secondCard)] = [
      null,
      null,
    ];
  }

  //FINALIZANDO O JOGO
  //VERIFICAR SE TODAS AS CARTAS FORAM VIRADAS ADICIONANDO UMA CLASSE VIRADA
  //AS CARTAS VIRADAS SÃO ADICIONADAS A UM ARRAY
  function endGame(first, second) {
    first.classList.add("virada");
    second.classList.add("virada");
    viradas.push(first, second);

    //COMPARO AS CARTAS VIRADAS DO ARRAY COM A QUANTIDADE DE CARTAS DO JOGO
    if (viradas.length == images.length) {
      game.style.visibility = "hidden";
      let end = document.querySelector(".end");
      end.style.visibility = "visible";
      end.style.zIndex = 9999;
      qtdCliques.innerHTML = countClicks;
      setTimeout(() => {
        window.location.reload();
        images = [];
      }, 2500);
    }
  }
}

function allFunctions(arr) {
  images = arr;
  embaralhar();
  createCards(images);
  insertImages();

  selectMode.style.visibility = "hidden";
  game.style.zIndex = 999;
  game.style.visibility = "visible";
}
