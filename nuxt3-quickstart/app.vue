<template>
	<div class="container">
		<div class="flex flex-column align-items-center mt-1">
			<img alt="Vue logo" src="./assets/primevue-logo.png" />
			<Toast />

			<div class="mt-4">
				<form @submit.prevent="greet">
					<InputText type="text" v-model="text" />
					<Button type="submit" label="Submit" />
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const text = ref();
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
