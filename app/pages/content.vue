<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })
</script>

<template>
	<div>
		<NuxtLink to="/">Back</NuxtLink>
		<AppContent />
	</div>
</template>
