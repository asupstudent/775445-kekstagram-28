const checkLength = (text, countCharacters) => text.length <= countCharacters;
checkLength('', '');

const isPalindrome = (text) => {
  const prepareText = text.toLowerCase().replace(/[^a-zа-яё]/gi, '');
  const reverseText = prepareText.split('').reverse().join('');
  return reverseText === prepareText;
};
isPalindrome('');

const findNumbers = (value) => {
  const inputValue = String(value);
  const digits = inputValue.replace(/[^0-9]/g, '');
  if(digits.length !== 0) {
    return parseInt(digits, 10);
  }
  return NaN;
};
findNumbers('');

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
setMinLengthString('', '', '');
