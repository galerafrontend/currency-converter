{
    const chooseCurrency = () => {

        const currencyElement = document.querySelector(".js-formSelect");
        const exchangeRateElement = document.querySelector(".js-formExchange");

        const euro = 4.58;
        const dollar = 3.99;
        const pound = 5.48;
        const empty = 0.00;

        switch (currencyElement.value) {
            case "Euro":
                return exchangeRateElement.value = euro;

            case "Dollar":
                return exchangeRateElement.value = dollar;

            case "Pound":
                return exchangeRateElement.value = pound;

            case "Empty":
                return exchangeRateElement.value = empty;
        };
    };

    const calculateAmount = (event) => {
        event.preventDefault();

        const exchangeRateElement = document.querySelector(".js-formExchange");
        const inputValueElement = document.querySelector(".js-formAmount");
        const resultElement = document.querySelector(".js-result");

        const exchangeRate = exchangeRateElement.value
        const inputValue = inputValueElement.value

        const result = inputValue * exchangeRate;

        resultElement.innerText = `${result.toFixed(2)} PLN`;
    };

    const init = () => {

        const currencyElement = document.querySelector(".js-formSelect");
        const formElement = document.querySelector(".js-form");

        currencyElement.addEventListener("change", chooseCurrency);
        formElement.addEventListener("submit", calculateAmount);

    };

    init();
};