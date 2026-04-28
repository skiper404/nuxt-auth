export default defineEventHandler(async (event) => {
	const posts = await prisma.post.findMany({
		include: { user: true },
	})
	return posts
})
