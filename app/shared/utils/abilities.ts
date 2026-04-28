import type { User } from '#auth-utils'
import { Role } from '~~/prisma/generated/enums'
import type { PostWithAuthor } from '../types/post'

const checkAuthenticated = (user?: User) => !!user

const checkAdmin = (user?: User) => user?.role === Role.ADMIN

const checkAuthor = (user: User, post: PostWithAuthor) =>
	user.id === post.userId

export const isAuthenticated = defineAbility(checkAuthenticated)

export const isAdmin = defineAbility(checkAdmin)

export const isAuthor = defineAbility(checkAuthor)

export const canRemove = defineAbility(
	(user: User, post: PostWithAuthor) =>
		checkAdmin(user) || checkAuthor(user, post),
)

// content

export const checkPaid = (user: User) => user.plan === 'PAID'

export const checkPremium = (user: User) => user.plan === 'PREMIUM'

export const canSeePaid = defineAbility(
	(user: User) => checkPaid(user) || checkPremium(user),
)

export const canSeePremium = defineAbility(checkPremium)
