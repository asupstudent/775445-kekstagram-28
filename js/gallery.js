import {getItems} from './data.js';
import {renderSmallItems} from './small-items.js';
import {showPopup} from './popup.js';

//Получаем данные
const usersItems = getItems();

//Создать и вывести элементы на страницу
renderSmallItems(usersItems);

const pictures = document.querySelector('.pictures');
const onPictureClick = (evt) => {
  if(evt.target.closest('.picture')) {
    showPopup(usersItems[evt.target.id - 1]);
  }
};

pictures.addEventListener('click', onPictureClick);
