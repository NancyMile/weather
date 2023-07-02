<script setup>

const countries = [
    { code: 'US', name: 'United States' },
    { code: 'AR', name: 'Argentina' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'ES', name: 'Spain' },
]
</script>

<template>
    <form class="form">
        <div class="field">
            <label for="city">City</label>
            <input
                type="text"
                id="city"
                placeholder="city"
            >
        </div>
        <div class="field">
            <label for="country">Country</label>
            <select id="country">
                <option value="">-- Select --</option>
                <option v-for="country in countries" :value="country.code">{{ country.name }}</option>
            </select>  
        </div>
        <input type="submit" value="Check Weather">
    </form>
</template>