<script setup>
    import { reactive, ref } from 'vue';
    import Alert from'./Alert.vue'

    const search = reactive({
        city: '',
        country: ''
    })

    const error = ref('')

    const emit = defineEmits(['get-weather'])

    const countries = [
        { code: 'US', name: 'United States' },
        { code: 'AR', name: 'Argentina' },
        { code: 'CO', name: 'Colombia' },
        { code: 'CR', name: 'Costa Rica' },
        { code: 'ES', name: 'Spain' },
    ]

    const CheckWeather = () => {
        //console.log('check weather...')
        if (Object.values(search).includes('')) {
            //console.log('error')
            error.value = 'Please select city and country'
            return
        }

        error.value = ''

        emit('get-weather')
    }

</script>

<template>
    <form
        class="form"
        @submit.prevent="CheckWeather"
    >
        <Alert v-if="error">
            {{ error }}
        </Alert>
        <div class="field">
            <label for="city">City</label>
            <input
                type="text"
                id="city"
                placeholder="city"
                v-model="search.city"
            >
        </div>
        <div class="field">
            <label for="country">Country</label>
            <select id="country"
                v-model="search.country"
            >
                <option value="">-- Select --</option>
                <option v-for="country in countries" :value="country.code">{{ country.name }}</option>
            </select>  
        </div>
        <input type="submit" value="Check Weather">
    </form>
</template>