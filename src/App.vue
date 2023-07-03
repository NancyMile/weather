<script setup>
  import Form from './components/Form.vue'
  import Weather from './components/Weather.vue'
  import useWeather from './composables/useWeather';
  import Spinner from './components/Spinner.vue'

  const { getWeather, weather, displayWeather, loading } = useWeather()

  //console.log(import.meta.env)

</script>

<template>
  <h1 class="title">Search Weather</h1>
    <div class="container weather-search">
      <Form
      @get-weather="getWeather"
      />
      <Spinner v-if="loading"/>
      <Weather
        v-if="displayWeather"
        :weather="weather"
      />
    </div>
</template>
