import {isEscapeKey} from './utils.js';

//Находим темлеты #success и #error и получаем их содержимое
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

//Находит элемент с классом success или error, на странице он всегда один
export const checkTypeMessage = () => document.querySelector('.success, .error');

//Обработка ECS
const onMessageEscapeKeydown = (evt) => {
  if (isEscapeKey(evt) && checkTypeMessage()) {
    evt.preventDefault();
    closeMessageBox();
  }
};

//Обработка клика вне информационного окна
const onMessageOutsideClick = (evt) => {
  const messageElement = checkTypeMessage();
  if (evt.target === messageElement) {
    closeMessageBox();
  }
};

//Функция закрытия окна, удаляем обработчики и сам эелемент
function closeMessageBox () {
  document.removeEventListener('keydown', onMessageEscapeKeydown);
  document.removeEventListener('click', onMessageOutsideClick);
  const messageElement = checkTypeMessage();
  if (messageElement) {
    messageElement.remove();
  }
}

//Открыть инофрмационное окно и добавить обработчики
export const openMessageBox = (typeMessage) => {
  const message = typeMessage === 'success' ? successMessageTemplate.cloneNode(true) : errorMessageTemplate.cloneNode(true);
  const messageButton = message.querySelector(`.${typeMessage}__button`);
  document.body.append(message);

  messageButton.addEventListener('click', () => {
    closeMessageBox();
  });

  document.addEventListener('keydown', onMessageEscapeKeydown);
  document.addEventListener('click', onMessageOutsideClick);
};
