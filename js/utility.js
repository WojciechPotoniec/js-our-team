function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  function NewSquare(content, numSquare, type, idClass) {
    let newSquare = document.createElement('div');
    newSquare.innerHTML = content;
    newSquare.setAttribute(`${type}, ${idClass}`);
    squareWidth = calc`(100% / ${Math.sqrt(numSquare)} - 10px)`;
    newSquare.style.width = squareWidth;
    return newSquare;
  }

