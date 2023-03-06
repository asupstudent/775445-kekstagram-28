import {getItems} from './data.js';

//Место куда будем добавлять элементы
const itemsContainer = document.querySelector('.pictures');
//Заготовка элемента для заполнения данными
const itemTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
//Получаем данные
const usersItems = getItems();

//Функция создает элемент с данными
const createItem = (data) => {
  const {url, description, likes, comments} = data;
  const userItem = itemTemplate.cloneNode(true);
  const userItemImg = userItem.querySelector('.picture__img');
  userItemImg.src = url;
  userItemImg.alt = description;
  const userItemComments = userItem.querySelector('.picture__comments');
  userItemComments.textContent = comments.length;
  const userItemLikes = userItem.querySelector('.picture__likes');
  userItemLikes.textContent = likes;
  return userItem;
};

//Функция для создания и отрисовки элементов
const renderItems = (items) => {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const element = createItem(item);
    fragment.append(element);
  });
  itemsContainer.append(fragment);
};

//Создать и вывести элементы на страницу
renderItems(usersItems);
