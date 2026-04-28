import type { User } from '#auth-utils'

export interface PostWithAuthor {
	id: string
	title: string
	body: string
	userId: string
	user: User
}
