const cards = document.querySelectorAll('.card__inner');

function flipCard() {
    this.classList.toggle('is-flipped');
}

cards.forEach((card) => card.addEventListener("click", flipCard));