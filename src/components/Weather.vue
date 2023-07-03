<script setup>
    import useWeather from '../composables/useWeather';

    const { formatTemperature }  = useWeather()

    defineProps({
        weather: {
            type: Object,
            required: true
        }
    })

</script>

<template>
    <div class="result">
        <h2>Weather in: {{ weather.name}}</h2>
        <p class="actual">
            {{ formatTemperature(weather.main.temp)}} &deg;C
        </p>
        <div class="temperatures">
            <p>Min: <span>&deg;C {{formatTemperature(weather.main.temp_min)}}</span></p>
            <p>Max: <span>&deg;C {{ formatTemperature(weather.main.temp_max)}}</span></p>
        </div>

    </div>
    
</template>