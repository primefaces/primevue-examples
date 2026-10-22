<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import Select from 'primevue/select';

const cities = ['Portland', 'Beaverton', 'Gresham', 'Vancouver', 'Salem'];

const name = ref('');
const email = ref('');
const city = ref(null);
const delivery = ref(true);
const sent = ref(false);
</script>

<template>
    <form v-if="!sent" class="account-form" @submit.prevent="sent = true">
        <label for="name">Business name</label>
        <InputText id="name" v-model="name" placeholder="Little Owl Café" fluid />
        <label for="email">Email</label>
        <InputText id="email" v-model="email" type="email" placeholder="orders@littleowl.cafe" fluid />
        <label for="city">City</label>
        <Select v-model="city" inputId="city" :options="cities" placeholder="Choose a city" fluid />
        <div class="check">
            <Checkbox v-model="delivery" inputId="delivery" binary />
            <label for="delivery">Weekly delivery</label>
        </div>
        <Button type="submit" label="Request account" :disabled="!name || !email || !city" />
    </form>
    <Message v-else severity="success">Thanks, {{ name }}. We will email {{ email }} within two working days.</Message>
</template>

<style scoped>
.account-form {
    display: grid;
    gap: 8px;
}

.account-form label {
    font-size: 14px;
    font-weight: 600;
    margin-top: 10px;
}

.check {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 12px 0 8px;
}

.check label {
    margin: 0;
    font-weight: 400;
}
</style>
