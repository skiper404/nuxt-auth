<script setup lang="ts">
import type { PostWithAuthor } from '~/shared/types/post'

const { data: posts, execute } = useFetch<PostWithAuthor[]>('/posts/posts')
</script>

<template>
	<div class="mt-2">
		<CreatePost @submit-post="execute" />
		<ul v-if="posts?.length" class="grid grid-cols-1 gap-2 mt-2">
			<PostItem
				v-for="post in posts"
				:key="post.id"
				:post="post"
				@delete-post="execute"
			/>
		</ul>
		<div v-else>No Posts...</div>
	</div>
</template>
