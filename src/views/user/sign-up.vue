<script lang="ts" setup>
import clientForm from '@/src/components/client-form.vue';
</script>


<template>
    <div class="px-0 relative">
        <p class="py-8 px-4 text-center text-lg">Renseignez vos informations pour accéder à notre menu</p>
        <div class="px-4">
        <clientForm></clientForm>    
        </div>
       

       <div class="fixed bottom-0 text-center w-screen">
<div class="text-center text-xs">
    Made with ❤️ by Taas Ekpaye
</div>    
       </div>
    </div>
</template>