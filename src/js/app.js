export default function addImgInRandomCell() {
  // eslint-disable-next-line no-new-wrappers
  let prevNumber = new Number();

  setInterval(() => {
    const gameCells = document.querySelectorAll('.game_cell');
    let randomNumber = Math.floor(Math.random() * gameCells.length);
    const cellImg = document.createElement('img');
    cellImg.src = '../assets/img/goblin.png';

    // eslint-disable-next-line no-plusplus
    for (let counter = 0; counter < gameCells.length; counter++) {
      if (gameCells[counter].hasChildNodes()) {
        prevNumber = counter;
        document.querySelector('img').remove();
      }
    }

    if (randomNumber !== prevNumber) {
      gameCells[randomNumber].append(cellImg);
    } else {
      randomNumber = Math.floor(Math.random() * gameCells.length);
      gameCells[randomNumber].append(cellImg);
    }
  }, 2000);
}

addImgInRandomCell();
