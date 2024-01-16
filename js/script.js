// Смена картин в карточке товара
const subImages = document.querySelectorAll('.sub__main img');
const mainImage = document.querySelector('.main img');

subImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    
    mainImage.src = image.src; 
    mainImage.alt = image.alt; 
  });
});

// Смена картин
const cards = document.querySelectorAll('.wrapper .card');

cards.forEach(card => {
  const cardImage = card.querySelector('.img-card');
  card.style.backgroundSize = 'cover';
  const originalImageSrc = cardImage.src;

  const newImageSrc = './img/img-2.jpg';
  card.addEventListener('mouseenter', function() {
    cardImage.src = newImageSrc; 
  });

  card.addEventListener('mouseleave', function() {
    cardImage.src = originalImageSrc;
  });
});

// Корзина
const cartButtons = document.querySelectorAll('.cart-btn');
const cartModal = document.querySelector('.cart-modal');
const closeBtn = cartModal.querySelector('.close');
cartButtons.forEach(button => {
  button.addEventListener('click', function() {
    cartModal.style.display = 'block';

  });
});

closeBtn.addEventListener('click', function() {
  cartModal.style.display = 'none';
});

// Добавление в корзину
const cartContent = cartModal.querySelector('.cart-content');

cards.forEach(card => {
  const cartBtn = card.querySelector('.cart-btn');
  cartBtn.addEventListener('click', () => {
    const selectedCard = card.cloneNode(true);
    const selectedCartBtn = selectedCard.querySelector('.cart-btn');
    selectedCartBtn.remove(); // Удаляем кнопку из скопированного блока
    cartContent.appendChild(selectedCard);
    cartModal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  cartContent.innerHTML = '';
  cartModal.style.display = 'none';
});
