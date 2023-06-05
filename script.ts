{
  const chooseCurrency = () => {
    const currencyElement =
      document.querySelector<HTMLSelectElement>(".js-formSelect");
    const exchangeRateElement =
      document.querySelector<HTMLInputElement>(".js-formExchange");

    const euro = "4.58";
    const dollar = "3.99";
    const pound = "5.48";
    const empty = "0.0";

    if (currencyElement && exchangeRateElement) {
      switch (currencyElement.value) {
        case "Euro":
          return (exchangeRateElement.value = euro);

        case "Dollar":
          return (exchangeRateElement.value = dollar);

        case "Pound":
          return (exchangeRateElement.value = pound);

        case "Empty":
          return (exchangeRateElement.value = empty);
      }
    }
  };

  const calculateAmount = (event: Event) => {
    event.preventDefault();

    const exchangeRateElement =
      document.querySelector<HTMLInputElement>(".js-formExchange");
    const inputValueElement =
      document.querySelector<HTMLInputElement>(".js-formAmount");
    const resultElement = document.querySelector<HTMLSpanElement>(".js-result");

    if (exchangeRateElement && inputValueElement && resultElement) {
      const exchangeRate = Number(exchangeRateElement.value);
      const inputValue = Number(inputValueElement.value);

      const result = inputValue * exchangeRate;

      resultElement.innerText = `${result.toFixed(2)} PLN`;
    }
  };

  const init = () => {
    const currencyElement =
      document.querySelector<HTMLSelectElement>(".js-formSelect");
    const formElement = document.querySelector<HTMLFormElement>(".js-form");

    if (currencyElement && formElement) {
      currencyElement.addEventListener("change", chooseCurrency);
      formElement.addEventListener("submit", calculateAmount);
    }
  };

  init();
}
