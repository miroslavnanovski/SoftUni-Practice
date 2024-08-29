export async function fetchExchangeRate(currentRate,targetRate){

    const apiKey = `Cm5hjhUO3sBuJTOx3DI4EjDXqQjZ54cO`

    const URL = `https://api.apilayer.com/exchangerates_data/latest?base=${currentRate}&apikey=${apiKey}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();
        
        
        return data.rates[targetRate] // Get the conversion rate
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
    }
}

export async function currencyExchange(amount,baseCurrency,targetCurrency){


    const rate = await fetchExchangeRate(baseCurrency,targetCurrency);

    return amount * rate;



}

