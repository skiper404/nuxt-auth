<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })

const { loggedIn, user, clear } = useUserSession()

const signOut = async () => {
	await clear()
	await navigateTo('/login')
}
</script>

<template>
	<div>
		<div>loggedIn: {{ loggedIn }}</div>
		<div>user:{{ user }}</div>
		<button @click="signOut">SignOut</button>
	</div>
</template>
