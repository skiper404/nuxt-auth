import type { User } from '#auth-utils'
import type { PostWithAuthor } from '../types/post'

const checkAuthenticated = (user?: User) => !!user

const checkAdmin = (user?: User) => user?.role === 'admin'

const checkAuthor = (user: User, post: PostWithAuthor) =>
	user.id === post.userId

export const isAuthenticated = defineAbility(checkAuthenticated)

export const isAdmin = defineAbility(checkAdmin)

export const isAuthor = defineAbility(checkAuthor)

export const canRemove = defineAbility(
	(user: User, post: PostWithAuthor) =>
		checkAdmin(user) || checkAuthor(user, post),
)
