export default function useWeather() { 

    const getWeather = ({ city, country}) => {
        //console.log('get weather', city ,country)

        //import API key
        const key = import.meta.env.VITE_API_KEY

        //get long  and lat

        //get weather
    }

    return {
        getWeather
    }
}