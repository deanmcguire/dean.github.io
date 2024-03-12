// app.js

async function fetchStockData() {
    try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://data.alpaca.markets/v2/stocks/AAPL/quotes/latest");
        const data = await response.json();
        
        // Update your website with the received data
        document.getElementById('stock-suggestions').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Error fetching stock data:", error);
    }
}

// Fetch data every 60 seconds
setInterval(fetchStockData, 60000);

