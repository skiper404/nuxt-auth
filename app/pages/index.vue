<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })

const { user, clear } = useUserSession()

const signOut = async () => {
	await clear()
	await navigateTo('/login')
}
</script>

<template>
	<div>
		<div>Role: {{ user?.role }}</div>
		<div>User: {{ user?.email || user?.name }}</div>
		<button @click="signOut">SignOut</button>
		<AppPosts />
	</div>
</template>
