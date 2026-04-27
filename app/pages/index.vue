<script setup lang="ts">
import { isAuthenticated } from '~/shared/utils/abilities'

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

		<div class="mt-10">
			<Can :ability="isAuthenticated">
				<p class="text-green-500">
					You can see this text cause you are authorized as user
				</p>
			</Can>

			<Cannot :ability="isAuthenticated">
				<p class="text-red-500">
					You cannot see this text cause you are authorized as user
				</p>
			</Cannot>
		</div>
	</div>
</template>
