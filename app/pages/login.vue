<script setup lang="ts">
definePageMeta({
	middleware: ['guest'],
})

const email = ref('')
const password = ref('')

const errorMessage = ref('')

const handleSubmit = async () => {
	if (email.value && password.value) {
		try {
			await $fetch('/auth/login', {
				method: 'POST',
				body: { email: email.value, password: password.value },
			})
			await navigateTo('/')
		} catch (e: any) {
			errorMessage.value = e.data?.message || e.message
		}
	}
}
</script>

<template>
	<div class="flex flex-col gap-2">
		<div>login</div>
		<pre>Error: {{ errorMessage }}</pre>
		<div class="flex gap-4 flex-col">
			<a href="/auth/github">Login with GitHub</a>
			<a href="/auth/google">Login with Google</a>
		</div>
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
				v-model="password"
				placeholder="password"
				class="bg-gray-300"
			/>

			<button type="submit">Login</button>
		</form>
		<NuxtLink to="/register" class="text-green-500">Register</NuxtLink>
	</div>
</template>
