function simpsonCard(img, character, quote) {
  const card = document.createElement('div');
  card.classList.add('card');

  const characterName = document.createElement('h2');
  characterName.textContent = character;

  const image = document.createElement('img');
  image.src = img;
  image.alt = 'Simpson Character';

  const quoteText = document.createElement('p');
  quoteText.textContent = quote;

  card.appendChild(characterName);
  card.appendChild(image);
  card.appendChild(quoteText);

  document.getElementById('cardContainer').appendChild(card);
}

function fetchSimpsonsQuote() {
  const options = { method: 'GET' };

  fetch('https://thesimpsonsquoteapi.glitch.me/quotes', options)
    .then(response => response.json())
    .then(data => {
      const quote = data[0].quote;
      const character = data[0].character;
      const image = data[0].image;

      // Limpiar el contenido del contenedor de tarjetas
      const cardContainer = document.getElementById('cardContainer');
      cardContainer.innerHTML = '';

      // Agregar la nueva tarjeta al contenedor
      simpsonCard(image, character, quote);
    })
    .catch(err => console.error('error the image dont have on the a API', err));
}

document.getElementById('btn-get-api').addEventListener('click', fetchSimpsonsQuote);
