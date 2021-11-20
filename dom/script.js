let cards = document.querySelector(".cards");
let allCards = document.querySelectorAll(".card");

for (let i = 0; i < 4; i++) {
  let newBox = document.createElement("div");
  newBox.className = "card";
  newBox.innerText = `This is card ${allCards.length + 1}`;
  newBox.style.cssText = `
        background-color: yellow;
        color: red;
    `;
  cards.appendChild(newBox);
  allCards = document.querySelectorAll(".card");
}

for (let i = 0; i < allCards.length; i++) {
  allCards[i].style.cssText = `
        position: relative;
        background-color: rgb(${rand()}, ${rand()}, ${rand()});
    `;

  let innerDiv = document.createElement("div");
  innerDiv.className = "innerDiv";
  allCards[i].appendChild(innerDiv);
  innerDiv.innerText = getNum(allCards[i]);
  innerDiv.style.cssText = `
    width: 50px;
    height: 50px;
    background-color: red;
    color: white;
    
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`;
}

function getNum(element) {
  let text = element.innerText.trim();
  return text[text.length - 1];
}

function rand() {
  return Math.floor(Math.random() * 255);
}

cards.addEventListener("click", (event) => {
  event.preventDefault();

  for (let i = 0; i < allCards.length; i++) {
    if (event.target === allCards[i]) {
      allCards[i].style.cssText = `
          position: relative;
          background-color: rgb(${rand()}, ${rand()}, ${rand()});
      `;
    }
  }
});

let btn = document.createElement("button");
btn.innerText = "Change all colors";
btn.style.color = "red";
btn.style.backgroundColor = "white";
cards.appendChild(btn);

btn.addEventListener("click", (event) => {
  event.preventDefault();

  for (let i = 0; i < allCards.length; i++) {
    allCards[i].style.cssText = `
        position: relative;
        background-color: rgb(${rand()}, ${rand()}, ${rand()});
    `;

    let innerDiv = document.createElement("div");
    innerDiv.className = "innerDiv";
    allCards[i].appendChild(innerDiv);
    innerDiv.innerText = getNum(allCards[i]);
    innerDiv.style.cssText = `
    width: 50px;
    height: 50px;
    background-color: red;
    color: white;
    
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`;
  }
});
