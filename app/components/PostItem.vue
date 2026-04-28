<script setup lang="ts">
import type { PostWithAuthor } from '~/shared/types/post'
import {
	canRemove,
	isAdmin,
	isAuthenticated,
	isAuthor,
} from '~/shared/utils/abilities'

const emit = defineEmits<{ (e: 'deletePost'): void }>()

const { post } = defineProps<{ post: PostWithAuthor }>()

const removePost = async (id: String) => {
	try {
		await $fetch(`/posts/${id}`, { method: 'DELETE' })
		emit('deletePost')
	} catch (e: any) {
		console.log(e.value)
	}
}
</script>

<template>
	<div class="flex border p-2 rounded-xl border-gray-800 gap-2 items-center">
		<div>
			<div class="text-yellow-400">{{ post.title }}</div>
			<div>{{ post.body }}</div>
			<div class="text-xs text-blue-400">
				{{ post.user.email || post.user.name }}
			</div>
		</div>

		<Can :ability="[isAuthor]" :args="[[post]]">
			<button
				class="text-red-300 hover:text-red-400 ml-auto"
				@click="removePost(post.id)"
			>
				Remove
			</button>
		</Can>
	</div>
</template>
