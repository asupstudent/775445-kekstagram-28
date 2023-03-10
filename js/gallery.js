import {getItems} from './data.js';
import {renderSmallItems} from './small-items.js';
import {showPopup} from './big-items.js';

//Получаем данные
const usersItems = getItems();
//Создать и вывести элементы на страницу
renderSmallItems(usersItems);
//Детальная информация об одной фотографии
showPopup(usersItems[1]);
