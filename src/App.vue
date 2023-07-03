<script setup>
  import Form from './components/Form.vue'
  import useWeather from './composables/useWeather';

  const { getWeather } = useWeather()

  //console.log(import.meta.env)

</script>

<template>
  <h1 class="title">Search Weather</h1>
    <div class="container weather-search">
      <Form
      @get-weather="getWeather"
      />
    </div>
</template>
