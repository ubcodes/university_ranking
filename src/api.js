const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://world-university-rankings.p.rapidapi.com/university/rankings',
  params: {
    filterByCountry: 'USA',
    page: '1',
    size: '1'
  },
  headers: {
    'X-RapidAPI-Key': '1310ec4b39msh97a75361d93c0ffp12e226jsncbc99f219802',
    'X-RapidAPI-Host': 'world-university-rankings.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}