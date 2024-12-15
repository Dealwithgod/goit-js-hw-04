  
  function makeTransaction(quantity, pricePerDroid, customerCredits) 
  { const totalPrice = quantity * pricePerDroid;
return totalPrice > customerCredits ? "Insufficient funds!" :
  `You ordered ${quantity} droids worth ${totalPrice} credits!`;}
  

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// Залиш цей код для перевірки ментором.

// На що буде звертати увагу ментор при перевірці:

// Оголошена функція makeTransaction(quantity, pricePerDroid, customerCredits)
// Виклик makeTransaction(5, 3000, 23000) повертає "You ordered 5 droids worth 15000 credits!"
// Виклик makeTransaction(3, 1000, 15000) повертає "You ordered 3 droids worth 3000 credits!"
// Виклик makeTransaction(10, 5000, 8000) повертає "Insufficient funds!"
// Виклик makeTransaction(8, 2000, 10000) повертає "Insufficient funds!"
// Виклик makeTransaction(10, 500, 5000) повертає "You ordered 10 droids worth 5000 credits!"
