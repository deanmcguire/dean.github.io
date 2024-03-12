const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Replace 'your_api_key' and 'your_api_secret' with your actual Alpaca API key and secret
const APCA_API_KEY = 'your_api_key';
const APCA_API_SECRET = 'your_api_secret';

app.use(express.json());

app.get('/api/stock-data', async (req, res) => {
    try {
        const alpacaResponse = await fetch('https://data.alpaca.markets/v2/stocks/AAPL/quotes/latest', {
            headers: {
                'APCA-API-KEY-ID': AKYOLXO3BZLTJXFADVLP,
                'APCA-API-SECRET-KEY': 8UkBaN2vdeTA6eHN0BP6PsbBsHroAX0sOyyTz8Ve,
            },
        });

        const alpacaData = await alpacaResponse.json();
        res.json(alpacaData);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




