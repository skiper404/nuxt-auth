<script setup lang="ts">
import { Plan, Role } from '~~/prisma/generated/enums'

const route = useRoute()

const { user, clear, fetch } = useUserSession()

const signOut = async () => {
	await clear()
	await navigateTo('/login')
}

const setRole = async (role: Role) => {
	try {
		await $fetch('/user/role', { method: 'POST', body: { role } })
		await fetch()
	} catch (error) {
		console.log(error)
	}
}

const setPlan = async (plan: Plan) => {
	try {
		await $fetch('/user/plan', { method: 'POST', body: { plan } })
		await fetch()
	} catch (error) {
		console.log(error)
	}
}
</script>

<template>
	<header class="bg-gray-800 p-2 flex items-center justify-between">
		<div v-if="user">
			<div class="flex gap-2">
				<div class="text-blue-300 w-40">Role: {{ user.role }}</div>
				<button
					:class="{ 'text-blue-500': user.role === 'ADMIN' }"
					@click="setRole(Role.ADMIN)"
				>
					ADMIN
				</button>
				<button
					:class="{ 'text-blue-500': user.role === 'USER' }"
					@click="setRole(Role.USER)"
				>
					USER
				</button>
			</div>
			<div class="flex gap-2">
				<div class="text-blue-300 w-40">Plan: {{ user.plan }}</div>
				<button
					:class="{ 'text-blue-500': user.plan === 'FREE' }"
					@click="setPlan(Plan.FREE)"
				>
					FREE
				</button>
				<button
					:class="{ 'text-blue-500': user.plan === 'PAID' }"
					@click="setPlan(Plan.PAID)"
				>
					PAID
				</button>
				<button
					:class="{ 'text-blue-500': user.plan === 'PREMIUM' }"
					@click="setPlan(Plan.PREMIUM)"
				>
					PREMIUM
				</button>
			</div>
			<div>User: {{ user?.email || user?.name }}</div>
		</div>
		<div class="flex gap-2">
			<NuxtLink
				to="/posts"
				:class="{ 'text-lime-400': route.path === '/posts' }"
			>
				Posts
			</NuxtLink>
			<NuxtLink
				to="/content"
				:class="{ 'text-lime-400': route.path === '/content' }"
			>
				Content
			</NuxtLink>
		</div>
		<button @click="signOut">SignOut</button>
	</header>
	<main class="p-4">
		<slot />
	</main>
</template>
