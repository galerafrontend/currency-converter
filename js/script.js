let currencyElement = document.querySelector(".js-formSelect");
let exchangeRateElement = document.querySelector(".js-formExchange");
let enterAmountElement = document.querySelector(".js-formAmount");
let calculatedAmountElement = document.querySelector(".js-calculatedAmount");
let formElement = document.querySelector(".js-form");

let euro = 4.58;
let dollar = 3.99;
let pound = 5.48;

currencyElement.value = "Euro";
exchangeRateElement.value = euro;

currencyElement.addEventListener("change", () => {
    
switch(currencyElement.value) {
    case "Euro":
        exchangeRateElement.value = euro;
        break;
        
    case "Dollar":
        exchangeRateElement.value = dollar;
        break;
        
    default:
        exchangeRateElement.value = pound;    
};
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let exchangeRate = exchangeRateElement.value
    let enterAmount = enterAmountElement.value

    calculatedAmount = enterAmount * exchangeRate;

    calculatedAmountElement.innerText = calculatedAmount.toFixed(2);
});





