// Backend/SearchApi.js
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000; // Port to run the server

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API configuration
const config = {
  cUrl: 'https://api.countrystatecity.in/v1/countries',
  ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==' // Your API Key here
};

// Routes

// Get countries
app.get('/api/countries', async (req, res) => {
  try {
    const response = await axios.get(config.cUrl, {
      headers: { 'X-CSCAPI-KEY': config.ckey }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({ error: 'Error fetching countries' });
  }
});

// Get cities by country code and search input
app.get('/api/cities/:countryCode', async (req, res) => {
  const { countryCode } = req.params;
  const { searchInput } = req.query; // Query parameter for search input
  try {
    const response = await axios.get(`${config.cUrl}/${countryCode}/cities`, {
      headers: { 'X-CSCAPI-KEY': config.ckey }
    });

    // Filter cities based on the search input
    const filteredCities = response.data.filter((city) =>
      city.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    res.json(filteredCities);
  } catch (error) {
    console.error('Error fetching cities:', error);
    res.status(500).json({ error: 'Error fetching cities' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
