// Находим все изображения внутри элемента с классом "sub__main"
const subImages = document.querySelectorAll('.sub__main img');

// Находим элемент с классом "main", в который мы будем вставлять выбранные изображения
const mainImage = document.querySelector('.main img');

// Добавляем обработчик события клика для каждого изображения в ".sub__main"
subImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    // При клике заменяем изображение в элементе с классом "main" на изображение, которое было выбрано
    mainImage.src = image.src; // Заменяем src изображения в .main на src изображения, по которому кликнули
    mainImage.alt = image.alt; // Меняем alt атрибут для доступности
  });
});