const checkLength = (text, countCharacters) => text.length <= countCharacters;
console.log('Задание №1');
console.log(checkLength('ПРИВЕТ', 10));
console.log(checkLength('ПОКА', 4));
console.log(checkLength('ЗДРАВСТВУЙТЕ', 7));

const isPalindrome = (text) => {
  const prepareText = text.toLowerCase().replace(/[^a-zа-яё]/gi, '');
  const reverseText = prepareText.split('').reverse().join('');
  return reverseText === prepareText;
};
console.log('Задание №2');
console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл '));
console.log(isPalindrome('Лёша, на полке клопа нашёл ?'));
console.log(isPalindrome('Was it a car or a cat I saw?'));
console.log(isPalindrome('I like htmlacademy'));
console.log(isPalindrome('Лёша, на полке клопа нашёл!!! '));

const findNumbers = (value) => {
  const inputValue = String(value);
  const digits = inputValue.replace(/[^0-9]/g, '');
  if(digits.length !== 0) {
    return parseInt(digits, 10);
  }
  return NaN;
};
console.log('Задание №3');
console.log(findNumbers('2023 год'));
console.log(findNumbers('ECMAScript 2022'));
console.log(findNumbers('1 кефир, 0.5 батона'));
console.log(findNumbers('а я томат'));
console.log(findNumbers(2023));
console.log(findNumbers(-1));
console.log(findNumbers(1.5));

const setMinLengthString = (text, minLength, addCharacters) => {
  const inputText = text.toString();
  const inputAddCharacters = addCharacters.toString();
  const requiredPad = minLength - inputText.length;
  if(requiredPad > 0) {
    return inputAddCharacters.slice(0, requiredPad % inputAddCharacters.length)
      + inputAddCharacters.repeat(requiredPad / inputAddCharacters.length)
      + inputText;
  }
  return inputText;
};
console.log('Задание №4');
console.log(setMinLengthString('1', 2, '0'));
console.log(setMinLengthString('1', 4, '0'));
console.log(setMinLengthString('q', 4, 'werty'));
console.log(setMinLengthString('q', 4, 'we'));
console.log(setMinLengthString('qwerty', 4, '0'));
