export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', 'nuxt-auth-utils', 'nuxt-authorization'],

	auth: { webAuth: true },
})
