<script setup lang="ts">
const emit = defineEmits<{ (e: 'submitPost'): void }>()

const title = ref('')
const body = ref('')

const resetForm = () => {
	title.value = ''
	body.value = ''
}

const onSubmit = async () => {
	if (title.value && body.value) {
		try {
			await $fetch('/posts/post', {
				method: 'POST',
				body: { title: title.value, body: body.value },
			})
			emit('submitPost')
			resetForm()
		} catch (e: any) {
			console.log(e.value)
		}
	}
}
</script>

<template>
	<div>
		<form @submit.prevent="onSubmit" class="flex flex-col items-center gap-2">
			<input
				type="text"
				v-model="title"
				placeholder="title"
				class="bg-gray-800 p-1 rounded-xl"
			/>
			<input
				type="text"
				placeholder="Post title"
				v-model="body"
				class="bg-gray-800 p-1 rounded-xl h-8"
			/>
			<button
				type="submit"
				class="bg-gray-800 p-1 rounded-xl hover:text-gray-400"
			>
				Submit
			</button>
		</form>
	</div>
</template>
