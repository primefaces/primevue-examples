<template>
	<div class="container">
		<div class="flex flex-column align-items-center mt-1">
			<img alt="Vue logo" src="../assets/primevue-logo.png" />
			<Toast />

			<div class="mt-4">
					<InputText type="text" v-model="text" />
					<Button @click="greet" type="submit" label="Submit" class="ml-2" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const text = ref('');

const toast = useToast();

const greet = () => {
	toast.add({ severity: "info", summary: "Hello " + text.value });
};
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>