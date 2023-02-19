function checkLength(text, countCharacters) {
  return text.length <= countCharacters;
}

const isPalindrome = function(text) {
  const prepareText = text.toLowerCase().replace(/[^a-zа-яё]/gi, '');
  const reverseText = prepareText.split('').reverse().join('');
  return reverseText === prepareText;
};

const findNumbers = (value) => {
  const inputValue = String(value);
  const digits = inputValue.replace(/[^0-9]/g, '');
  if(digits.length !== 0) {
    return parseInt(digits, 10);
  }
  return NaN;
};

const leftPad = (text, minLength, addCharacters) => {
  const inputText = text.toString();
  const inputAddCharacters = addCharacters.toString();
  if(inputText.length < minLength) {
    const outputAddCharaters = inputAddCharacters.repeat(minLength - inputText.length);
    return outputAddCharaters.slice(0, minLength - inputText.length) + inputText;
  }
  return inputText;
};

// Вывод результатов

const outputResults = document.createElement('p');
document.body.append(outputResults);

outputResults.innerHTML = 'Задание №1<br><br>';
outputResults.innerHTML += `|ПРИВЕТ 10| ${checkLength('ПРИВЕТ', 10)}<br>`;
outputResults.innerHTML += `|ПОКА 4| ${checkLength('ПОКА', 4)}<br>`;
outputResults.innerHTML += `|ЗДРАВСТВУЙТЕ 7| ${checkLength('ЗДРАВСТВУЙТЕ', 7)}<br><br>`;

outputResults.innerHTML += 'Задание №2<br><br>';
outputResults.innerHTML += `|топот| ${isPalindrome('топот')}<br>`;
outputResults.innerHTML += `|ДовОд| ${isPalindrome('ДовОд')}<br>`;
outputResults.innerHTML += `|Кекс| ${isPalindrome('Кекс')}<br>`;
outputResults.innerHTML += `|Лёша на полке клопа нашёл | ${isPalindrome('Лёша на полке клопа нашёл ')}<br>`;
outputResults.innerHTML += `|Лёша, на полке клопа нашёл ?| ${isPalindrome('Лёша, на полке клопа нашёл ?')}<br>`;
outputResults.innerHTML += `|Was it a car or a cat I saw?| ${isPalindrome('Was it a car or a cat I saw?')}<br>`;
outputResults.innerHTML += `|I like htmlacademy| ${isPalindrome('I like htmlacademy')}<br>`;
outputResults.innerHTML += `|Лёша, на полке клопа нашёл!!! | ${isPalindrome('Лёша, на полке клопа нашёл!!! ')}<br><br>`;

outputResults.innerHTML += 'Задание №3<br><br>';
outputResults.innerHTML += `|2023 год| ${findNumbers('2023 год')}<br>`;
outputResults.innerHTML += `|ECMAScript 2022| ${findNumbers('ECMAScript 2022')}<br>`;
outputResults.innerHTML += `|1 кефир, 0.5 батона| ${findNumbers('1 кефир, 0.5 батона')}<br>`;
outputResults.innerHTML += `|а я томат| ${findNumbers('а я томат')}<br>`;
outputResults.innerHTML += `|2023| ${findNumbers(2023)}<br>`;
outputResults.innerHTML += `|-1| ${findNumbers(-1)}<br>`;
outputResults.innerHTML += `|1.5| ${findNumbers(1.5)}<br><br>`;

outputResults.innerHTML += 'Задание №4<br><br>';
outputResults.innerHTML += `|'1', 2, '0'| ${leftPad('1', 2, '0')}<br>`;
outputResults.innerHTML += `|'1', 4, '0'| ${leftPad('1', 4, '0')}<br>`;
outputResults.innerHTML += `|'q', 4, 'werty'| ${leftPad('q', 4, 'werty')}<br>`;
outputResults.innerHTML += `|'q', 4, 'we'| ${leftPad('q', 4, 'we')}<br>`;
outputResults.innerHTML += `|'qwerty', 4, '0'| ${leftPad('qwerty', 4, '0')}<br>`;
