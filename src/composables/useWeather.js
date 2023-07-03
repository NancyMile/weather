import axios from "axios"
import { ref,computed } from "vue"

export default function useWeather() { 

    const weather = ref({})
    const loading = ref(false)
    const error = ref('')

    const getWeather = async({ city, country}) => {
        //console.log('get weather', city ,country)

        //import API key
        const key = import.meta.env.VITE_API_KEY
        loading.value = true
        weather.value = {}
        error.value = ''

        //get long  and lat
        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`
            //console.log(url)
            const { data } = await axios(url) // doing  destructure allows mw to enter directly to the data object
            //console.log(data)// on this case returned the data  with a position 0
            const { lon, lat } = data[0]
            //console.log('lon: '+ lon + ' lat: '+ lat)

            //get weather
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            const { data: dataWeather } = await axios(urlWeather) // rename data as dataweather
            //console.log(dataWeather)
            weather.value = dataWeather

        } catch {
            error.value = "Not Found"
        }
        finally {
            loading.value = false
        }
    }

    const displayWeather = computed(() => {
        //ckecks if weather has data
        return Object.values(weather.value).length > 0
    })

    //temperaature minus the 273.15 kelving degrees
    const formatTemperature = temperature => parseInt(temperature - 273.15)

    return {
        getWeather,
        weather,
        displayWeather,
        formatTemperature,
        loading,
        error
    }
}