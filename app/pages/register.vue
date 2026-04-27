<script setup lang="ts">
definePageMeta({
	middleware: ['guest'],
})

const email = ref('')
const name = ref('')
const password = ref('')

const errorMessage = ref('')

const handleSubmit = async () => {
	if (email.value && password.value) {
		try {
			await $fetch('/auth/register', {
				method: 'POST',
				body: {
					email: email.value,
					password: password.value,
					name: name.value,
				},
			})
			await navigateTo('/')
		} catch (e: any) {
			if (e) {
				errorMessage.value = e.data?.message || e.message
			}
		}
	}
}
</script>

<template>
	<div class="flex flex-col gap-4">
		<div>Register</div>
		<pre>{{ errorMessage }}</pre>
		<form
			@submit.prevent="handleSubmit"
			class="flex flex-col items-center w-fit gap-2"
		>
			<input
				type="text"
				v-model="email"
				placeholder="email"
				class="bg-gray-300"
			/>
			<input
				type="text"
				v-model="name"
				placeholder="name"
				class="bg-gray-300"
			/>
			<input
				type="text"
				v-model="password"
				placeholder="password"
				class="bg-gray-300"
			/>
			<button type="submit">Register</button>
		</form>
		<NuxtLink to="/login" class="text-green-500">Login</NuxtLink>
	</div>
</template>
