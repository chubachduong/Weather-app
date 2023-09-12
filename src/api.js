export const geoApiOptions = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fe0e1accb4msh33483e497549beap113887jsn5cf39b02bb70',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";
  
  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  export const WEATHER_API_KEY = "a7fb64860a5d5f8aa48ea0497710af13";
  
try {
	const response = await fetch(GEO_API_URL, geoApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}