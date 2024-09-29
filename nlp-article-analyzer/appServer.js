const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const server = express();
server.use(bodyParser.json());
server.use(cors());

server.post('/analyzeArticle', async (req, res) => {
    const { url } = req.body;

    const apiKey = 'YOUR_AYLIEN_API_KEY';
    const apiUrl = `https://api.aylien.com/analyze?url=${url}`;

    try {
        const apiResponse = await fetch(apiUrl, {
            headers: {
                'X-AYLIEN-TextAPI-Application-Key': apiKey,
            },
        });
        const result = await apiResponse.json();
        res.json({
            polarity: result.polarity,
            subjectivity: result.subjectivity,
            text: result.text,
        });
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data from the API' });
    }
});

server.listen(8081, () => {
    console.log('Server is running at http://localhost:8081');
});
