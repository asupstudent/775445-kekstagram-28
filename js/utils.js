//Функция для проверки длины строки.
export const checkLength = (array, maxLength) => array.length <= maxLength;

export const checkRepeats = (array) => {
  const toUpper = array.map((item) => item.toUpperCase());
  const arrayNoRepeats = new Set(toUpper);
  return arrayNoRepeats.size === toUpper.length;
};

//Функция проверки нажатой клавиши Esc
export const isEscapeKey = (evt) => evt.key === 'Escape';

//Функция проверки нажатой клавиши Enter
export const isEnterKey = (evt) => evt.key === 'Enter';

//Функция для удаления последнего символа в строке
export const removeLastCharacter = (string) => string ? string.slice(0, -1) : string;
