document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'YOUR_API_KEY';
    const secretKey = 'YOUR_SECRET_KEY';
    const baseUrl = 'https://paper-api.alpaca.markets';

    function fetchStockInfo() {
        fetch(`${baseUrl}/v2/account`, {
            method: 'GET',
            headers: {
                AKK8UAEA1V2NR9JD5K7E: apiKey,
                jvBRxjqntk6hEIcbV8mbljIkxLcm1heAYFKeNgze: secretKey,
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Update the stock information on the webpage
            updateStockInfo(data);
        })
        .catch(error => console.error('Error:', error));
    }

    function updateStockInfo(stockData) {
        const stockInfoElement = document.getElementById('stock-info');
        stockInfoElement.innerHTML = `<pre>${JSON.stringify(stockData, null, 2)}</pre>`;
    }

    // Fetch stock information initially
    fetchStockInfo();

    // Set an interval to fetch and update stock information every 5 minutes (adjust as needed)
    setInterval(fetchStockInfo, 5 * 60 * 1000);
});
