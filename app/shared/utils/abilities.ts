import type { User } from '#auth-utils'

export const isAuthenticated = defineAbility((user: User) => {
	return !!user
})

export const isAdmin = defineAbility((user: any) => {
	return user.role === 'admin'
})
