import {getItems} from './data.js';

const itemsContainer = document.querySelector('.pictures');
const itemTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const usersItems = getItems();

const createItem = (data) => {
  const {url, likes, comments} = data;
  console.log(url);
  console.log(likes);
  console.log(comments.length);
};

const renderItems = (items) => {
  createItem(items[3]);
};
renderItems(usersItems);
