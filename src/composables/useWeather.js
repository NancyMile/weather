export default function useWeather() { 

    const getWeather = ({ city, country}) => {
        //console.log('get weather', city ,country)

        //import API key
        const key = import.meta.env.VITE_API_KEY

        //get long  and lat
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`
        console.log(url)

        //get weather
    }

    return {
        getWeather
    }
}