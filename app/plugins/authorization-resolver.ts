export default defineNuxtPlugin({
	name: 'authorization-resolver',
	setup() {
		return {
			provide: {
				authorization: {
					resolveClientUser: () => useUserSession().user.value,
				},
			},
		}
	},
})
