<script setup>
  import Form from './components/Form.vue'
  import Weather from './components/Weather.vue'
  import useWeather from './composables/useWeather';

  const { getWeather, weather, displayWeather } = useWeather()

  //console.log(import.meta.env)

</script>

<template>
  <h1 class="title">Search Weather</h1>
    <div class="container weather-search">
      <Form
      @get-weather="getWeather"
      />
      <Weather v-if="displayWeather"/>
    </div>
</template>
