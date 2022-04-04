{
    const chooseCurrency = () => {

        const currencyElement = document.querySelector(".js-formSelect");
        const exchangeRateElement = document.querySelector(".js-formExchange");

        const euro = 4.58;
        const dollar = 3.99;
        const pound = 5.48;

        exchangeRateElement.value = euro;

        switch (currencyElement.value) {
            case "Euro":
                return euro;

            case "Dollar":
                return exchangeRateElement.value = dollar;

            case "Pound":
                return exchangeRateElement.value = pound;
        };
    };

    const calculateAmount = (event) => {
        event.preventDefault();

        const exchangeRateElement = document.querySelector(".js-formExchange");
        const enterAmountElement = document.querySelector(".js-formAmount");
        const calculatedAmountElement = document.querySelector(".js-calculatedAmount");

        const exchangeRate = exchangeRateElement.value
        const enterAmount = enterAmountElement.value

        calculatedAmount = enterAmount * exchangeRate;

        calculatedAmountElement.innerText = calculatedAmount.toFixed(2);
    };

    const init = () => {

        const currencyElement = document.querySelector(".js-formSelect");
        const formElement = document.querySelector(".js-form");

        currencyElement.addEventListener("change", chooseCurrency);
        formElement.addEventListener("submit", calculateAmount);

    };

    init();
};