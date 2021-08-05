function textboxFocus(e, contentId) {
  console.log(contentId);
  document
    .getElementById(contentId)
    .querySelector(".placeholder").style.display = "none";
}

function textboxFocusOut(element, contentId) {
  //só entra se não foi digitado nada
  if (!element.innerHTML) {
    document
      .getElementById(contentId)
      .querySelector(".placeholder").style.display = "block";
  }
}

export function cardTemplate(id) {
  return `
    <div class="card">
        <header class="card-header">
        <p class="card-header-title">Component</p>
        <button class="card-header-icon" aria-label="more options">
            <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
        </button>
        </header>
        <div class="card-content">
        <div id="content-${id}" class="content">
            <div class="placeholder">Criar uma nota...</div>
            <div
            onfocus="card.textboxFocus(this, 'content-${id}')"
            onfocusout="card.textboxFocusOut(this, 'content-${id}')"
            contenteditable="true"
            aria-multiline="true"
            role="textbox"
            class="textbox"
            spellcheck="true"
            ></div>
        </div>
        </div>
    </div>
    `;
}

export function createCard(id) {
  document.getElementById("cards").innerHTML += cardTemplate(id);
}

window.card = {
  textboxFocusOut,
  textboxFocus,
  create: createCard,
};
