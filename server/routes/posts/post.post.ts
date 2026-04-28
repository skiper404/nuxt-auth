export default defineEventHandler(async (event) => {
	const session = await getUserSession(event)

	const body = await readBody(event)
	const { title, body: postBody } = body

	const post = await prisma.post.create({
		data: { title: title, body: postBody, userId: session?.user?.id },
	})

	return post
})
