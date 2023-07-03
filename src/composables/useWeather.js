import axios from "axios"

export default function useWeather() { 

    const getWeather = async({ city, country}) => {
        //console.log('get weather', city ,country)

        //import API key
        const key = import.meta.env.VITE_API_KEY

        //get long  and lat
        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`
            //console.log(url)
            const { data } = await axios(url) // doing  destructure allows mw to enter directly to the data object
            //console.log(data)// on this case returned the data  with a position 0
            const { lon, lat } = data[0]
            //console.log('lon: '+ lon + ' lat: '+ lat)

            //get weather

        } catch (error) {
            console.log(error)
        }
    }

    return {
        getWeather
    }
}