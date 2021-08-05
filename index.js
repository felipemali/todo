import { createCard, cardTemplate } from "./cards.js";

for (let i = 0; i < 3; i++) {
  createCard(i);
}

document.getElementsByClassName("modal-content")[0].innerHTML =
  cardTemplate(10);
