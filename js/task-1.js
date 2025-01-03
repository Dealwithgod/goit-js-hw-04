// Задача 1. Пакування товарів

// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи 
// помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — 
// кількість цих товарів.Наприклад, { apples: 2, grapes: 4 }.
//   containerSize — число, максимальна кількість одиниць товарів, яку в себе 
// може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. 
// Тобто порахувати загальну кількість товарів в об’єкті products і повернути true,
//   якщо вона менше або дорівнює containerSize, і false, якщо ні.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності 
// її роботи.У консоль будуть виведені результати її викликів.
  


function isEnoughCapacity(products, containerSize) {
  let sum = 0;
  for (const value of Object.values(products)) {
    sum += value;

 }
    return sum <= containerSize
};

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false

// Залиш цей код для перевірки ментором.

// На що буде звертати увагу ментор при перевірці:

// Оголошена функція isEnoughCapacity(products, containerSize)
// Виклик isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8) повертає true
// Виклик isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12) повертає false
// Виклик isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14) повертає true
// Виклик isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7) повертає false