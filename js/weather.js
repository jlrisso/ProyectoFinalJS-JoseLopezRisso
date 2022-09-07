
/**
 * 
 * 
 * @Author: JOSE LOPEZ RISSO
 * Email: jal.risso@gmail.com
 * 
 * Content: Este archivo contiene funciones relacionadas a la creación
 * del widget del clima. Primero se llama al método: "getCurrentPosition"
 * y se le pasa al mismo dos funciones: una para caso de éxito y otra
 * para caso de fracaso. En caso de éxito, se llama a la función 
 * "getWeather" que es la que se conecta a la API pasándole a la misma
 * ciertos parámetros. Una vez obtenida la data de la API, se hace un
 * filtro y me quedo solamente con los datos que necesito en el formato. 
 * que los necesito. Por ultimo se llama a la funcion "renderWeather"
 * que es la que se encarga de mostrar todo el contenido en pantalla
 * 
 */





//Constantes
const MY_API_KEY = '5065184466ab27720a925b9eeb854a84';
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';


//SRC para las diferentes imágenes { Key: path }
const weatherSrc = {
    'Clear':'animated/day.svg',
    'Atmospeher': 'animated/weather.svg',
    'Clouds':'animated/cloudy-day-1.svg',
    'Snow': 'animated/snowy-6.svg',
    'Rain':'animated/rainy-7.svg',
    'Drizzle':'animated/rainy-2.svg'
};





// EMPIEZA MAIN
navigator.geolocation.getCurrentPosition(positionSuccess, positionError);
// TERMINA MAIN


function positionSuccess({coords}) {
    getWeather(coords.latitude, coords.longitude, ENDPOINT, MY_API_KEY);
}

function positionError() {
    alert("Hubo un problema obteniendo tu ubicación. Por favor autorizanos a utilizar tu ubicación y actualizá la página");
}

async function getWeather(lat, lon, ENDPOINT, MY_API_KEY) {
    try {
        const response = await axios.get(ENDPOINT, {
            params: {
                lat,
                lon,
                appid: MY_API_KEY, 
                units: "metric", //Sistema métrico
                lang: "sp", //Spanish
            },
        })
        renderWeather(parseWeather(response.data));
    } catch(error) {
        console.error(`Error Message: ${error.message} -- Error Code: ${error.code}`);
        alert("Hubo un error consultando el Clima. Por favor, volvé a intentar");
    }
}


function parseWeather({ main, name, dt, weather, sys }){ //Filtro la data que viene de la API 
    const {temp, temp_max, temp_min } = main;            //para quedarme sólo con lo que me interesa
    const {sunrise, sunset } = sys

    return {
        currentTemp: Math.round(temp),
        highTemp: Math.round(temp_max),
        lowTemp: Math.round(temp_min),
        stationName: name,
        description: weather[0].description, //Descripcion
        main: weather[0].main, //Para la imagen
        sunriseTime: unixTimestampToTime(sunrise * 1000), //Unix Timestamp * 1000 (Se multiplica porque Js espera el tiempo en ms, y en UNIX es en segundos)
        sunsetTime: unixTimestampToTime (sunset * 1000), //Unix Timestamp * 1000 
        currentDate: unixTimestampToHumanFormat(dt *1000, 'es-ES'),//Unix Timestamp * 1000, idioma: spanish 
    }
}


function renderWeather (weatherData){ //Renderizo el widget del clima

    weatherIcon.src= weatherSrc[weatherData.main];

    setValue('#current-date', weatherData.currentDate);
    setValue('#current-temp', `${weatherData.currentTemp} °C`);
    setValue('#weather-description', weatherData.description);
    setValue('#station', `Estación: ${weatherData.stationName}`);
    setValue('#high-temp', `Max: ${weatherData.highTemp} °C`);
    setValue('#low-temp', `Min: ${weatherData.lowTemp} °C`);
    setValue('#sunrise-time', `Amanecer: ${weatherData.sunriseTime} hrs.`);
    setValue('#sunset-time', `Atardecer: ${weatherData.sunsetTime} hrs.`);
    
}


function unixTimestampToHumanFormat(timestamp, lang) { //Dado un timestamp y un lenguaje => devulevo la fecha actual en formato Humano
    return (new Date(timestamp).toLocaleDateString(lang, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
}

function unixTimestampToTime(timestamp) { //Dado un timestamp => devuelvo un hora => Formato HH:MM
    return (new Date(timestamp)).toTimeString().slice(0,5);
}


function setValue (selector, value){ //Dado un selector (ID o CLASE) => le asigno un value.
    document.querySelector(`${selector}`).textContent = value;
}



/*
const dayIndex = [(new Date(timestamp)).getDay()];
    return ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'][dayIndex];*/




/*

    axios.get(URL, {
            params: {
                lat,
                lon,
                appid: MY_API_KEY, 
                units: "metric", //Sistema métrico
                lang: "sp", //Spanish
            },
        })
        .then(({data}) => {
            renderWeather(parseWeather(data));
        })
        .catch(e => {
            console.log(e);
            alert("Hubo un error consultando el Clima. Por favor, volvé a intentar");
        })
}

*/