import {API_KEY} from './Constants';

export default function fetchWeather(city, country){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;

    return fetch(url).then((res) => res.json()).catch((err) => err);
}